import {Table, TableColumnsType} from "antd";
import {Course} from "./CourseTypes.ts";

type CourseGradeTableProps = {
    courses: Course[]
}

interface CourseGradeTableRow {
    key: string
    name: string
    course_code: string
    avg_grade: number
    high_grade: number
    upper_q_grade: number
    median_grade: number
    lower_q_grade: number
    low_grade: number
    id: number
}

const CourseGradeTable = (props: CourseGradeTableProps) => {
    const {courses} = props

    const course_grade_columns: TableColumnsType<CourseGradeTableRow> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, course) => <a href={`#course-${course.id}`}>{text}</a>,
            sorter: (a, b) => {
                return a.name.localeCompare(b.name)
            }
        },
        {
            title: 'Course Code',
            dataIndex: 'course_code',
            key: 'course_code',
            sorter: (a, b) => {
                return a.course_code.localeCompare(b.course_code)
            }
        },
        {
            title: 'Average Grade',
            dataIndex: 'avg_grade',
            key: 'avg_grade',
            sorter: (a, b) => {
                return a.avg_grade - b.avg_grade
            }
        },
        {
            title: 'High Grade',
            dataIndex: 'high_grade',
            key: 'high_grade',
            sorter: (a, b) => {
                return a.high_grade - b.high_grade
            }
        },
        {
            title: 'Upper Quartile Grade',
            dataIndex: 'upper_q_grade',
            key: 'upper_q_grade',
            sorter: (a, b) => {
                return a.upper_q_grade - b.upper_q_grade
            }
        },
        {
            title: 'Median Grade',
            dataIndex: 'median_grade',
            key: 'median_grade',
            sorter: (a, b) => {
                return a.median_grade - b.median_grade
            }
        },
        {
            title: 'Lower Quartile Grade',
            dataIndex: 'lower_q_grade',
            key: 'lower_q_grade',
            sorter: (a, b) => {
                return a.lower_q_grade - b.lower_q_grade
            }
        },
        {
            title: 'Low Grade',
            dataIndex: 'low_grade',
            key: 'low_grade',
            sorter: (a, b) => {
                return a.low_grade - b.low_grade
            }
        },
    ]
    const data: CourseGradeTableRow[] = []

    courses.map((course) => {
        if (course.score_statistics !== undefined) {
            data.push({
                key: `course-${course.id}-grade-summary-table_entry`,
                name: course.name,
                course_code: course.course_code,
                avg_grade: course.score_statistics.mean,
                high_grade: course.score_statistics.max,
                upper_q_grade: course.score_statistics.upper_q,
                median_grade: course.score_statistics.median,
                lower_q_grade: course.score_statistics.lower_q,
                low_grade: course.score_statistics.min,
                id: course.id
            })
        }
    })

    const summary = (data: readonly CourseGradeTableRow[]) => {
        const course_summary_row: CourseGradeTableRow = {
            key: `$course-grade-table-summary-row`,
            name: 'Total',
            course_code: 'N/A',
            avg_grade: 0,
            high_grade: -1,
            upper_q_grade: 0,
            median_grade: 0,
            lower_q_grade: 0,
            low_grade: 1000000,
            id: -1
        }
        const stat_grades: number[] = []

        data.map((course) => {
            course_summary_row.avg_grade += course.avg_grade
            course_summary_row.high_grade = course.high_grade > course_summary_row.high_grade ? course.high_grade : course_summary_row.high_grade
            stat_grades.push(course.avg_grade)
            course_summary_row.low_grade = course.low_grade < course_summary_row.low_grade ? course.low_grade : course_summary_row.low_grade
        })

        const sort_grades: number[] = stat_grades.slice().sort()

        const up_pos = (sort_grades.length - 1) * 0.75
        const up_ind = Math.floor(up_pos)
        const up_rem = up_pos - up_ind
        if (sort_grades[up_ind+1] !== undefined) {
            course_summary_row.upper_q_grade = sort_grades[up_ind] + (up_rem * (sort_grades[up_ind+1] - sort_grades[up_ind]))
        } else {
            course_summary_row.upper_q_grade = sort_grades[up_ind]
        }

        const low_pos = (sort_grades.length - 1) * 0.25
        const low_ind = Math.floor(low_pos)
        const low_rem = low_pos - low_ind
        if (sort_grades[low_ind+1] !== undefined) {
            course_summary_row.lower_q_grade = sort_grades[low_ind] + (low_rem * (sort_grades[low_ind+1] - sort_grades[low_ind]))
        } else {
            course_summary_row.lower_q_grade = sort_grades[low_ind]
        }

        if (stat_grades.length % 2 === 0) {
            course_summary_row.median_grade = (sort_grades.sort()[(sort_grades.length / 2) - 1] + sort_grades.sort()[stat_grades.length / 2]) / 2
        } else {
            course_summary_row.median_grade = sort_grades.sort()[(sort_grades.length / 2) -0.5]
        }

        return (
            <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total/Average</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>N/A</Table.Summary.Cell>
                <Table.Summary.Cell index={2}>{course_summary_row.avg_grade}</Table.Summary.Cell>
                <Table.Summary.Cell index={3}>{course_summary_row.high_grade}</Table.Summary.Cell>
                <Table.Summary.Cell index={4}>{course_summary_row.upper_q_grade}</Table.Summary.Cell>
                <Table.Summary.Cell index={5}>{course_summary_row.median_grade}</Table.Summary.Cell>
                <Table.Summary.Cell index={6}>{course_summary_row.lower_q_grade}</Table.Summary.Cell>
                <Table.Summary.Cell index={7}>{course_summary_row.low_grade}</Table.Summary.Cell>
            </Table.Summary.Row>
        )
    }

    return <Table<CourseGradeTableRow> columns={course_grade_columns} dataSource={data} summary={summary} pagination={false} />
}

export default CourseGradeTable