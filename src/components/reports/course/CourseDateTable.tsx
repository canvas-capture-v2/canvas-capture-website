import {Course} from "./CourseTypes.ts";
import {Table, TableColumnsType} from "antd";
import {add_time_strings, compare_time_strings, divide_time_strings} from "../../../utils/date_utils.ts";

type CourseDateTableProps = {
    courses: Course[]
}

interface CourseDateTableRow {
    key: string
    name: string
    course_code: string
    start_date: string
    end_date: string
    avg_num_assignments_due_per_day: number
    avg_time_assigned_to_due: string
    avg_time_late_submission: string
    avg_time_last_to_graded: string
    num_late: number
    id: number
}


const CourseDateTable = (props: CourseDateTableProps) => {
    const {courses} = props

    const course_date_columns: TableColumnsType<CourseDateTableRow> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, course) => <a href={`#${course.id}`}>{text}</a>,
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
            title: 'Start Date',
            dataIndex: 'start_date',
            key: 'start_date',
            sorter: (a, b) => {
                const a_start_date = new Date(a.start_date)
                const b_start_date = new Date(b.start_date)
                if (a_start_date.getFullYear() - b_start_date.getFullYear() === 0) {
                    if (a_start_date.getMonth() - b_start_date.getFullYear() === 0) {
                        return a_start_date.getDate() - b_start_date.getDate()
                    }
                    return a_start_date.getFullYear() - b_start_date.getFullYear()
                }
                return a_start_date.getFullYear() - b_start_date.getFullYear()
            }
        },
        {
            title: 'End Date',
            dataIndex: 'end_date',
            key: 'end_date',
            sorter: (a, b) => {
                const a_end_date = new Date(a.end_date)
                const b_end_date = new Date(b.end_date)
                if (a_end_date.getFullYear() - b_end_date.getFullYear() === 0) {
                    if (a_end_date.getMonth() - b_end_date.getFullYear() === 0) {
                        return a_end_date.getDate() - b_end_date.getDate()
                    }
                    return a_end_date.getFullYear() - b_end_date.getFullYear()
                }
                return a_end_date.getFullYear() - b_end_date.getFullYear()
            }
        },
        {
            title: 'Average Time Between Assignments',
            dataIndex: 'avg_time_due_to_assigned',
            key: 'avg_time_due_to_assigned',
            sorter: (a, b) => {
                return a.avg_num_assignments_due_per_day - b.avg_num_assignments_due_per_day
            }
        },
        {
            title: 'Average Time Between Assigned & Due',
            dataIndex: 'avg_time_assigned_to_due',
            key: 'avg_time_assigned_to_due',
            sorter: (a, b) => {
                return compare_time_strings(a.avg_time_assigned_to_due, b.avg_time_assigned_to_due)
            }
        },
        {
            title: 'Average Submission Late Time',
            dataIndex: 'avg_time_late_submission',
            key: 'avg_time_late_submission',
            sorter: (a, b) => {
                return compare_time_strings(a.avg_time_late_submission, b.avg_time_late_submission)
            }
        },
        {
            title: 'Average Time Between Last Submission & Last Grade',
            dataIndex: 'avg_time_last_to_graded',
            key: 'avg_time_last_to_graded',
            sorter: (a, b) => {
                return compare_time_strings(a.avg_time_last_to_graded, b.avg_time_last_to_graded)
            }
        },
        {
            title: '# Late Submissions',
            dataIndex: 'num_late',
            key: 'num_late',
            sorter: (a, b) => {
                return a.num_late - b.num_late
            }
        },
    ]
    const data: CourseDateTableRow[] = []

    courses.map((course) => {
        data.push({
            key: `course-${course.id}-date-summary-table_entry`,
            name: course.name,
            course_code: course.course_code,
            start_date: course.start_at !== undefined ? course.start_at.toDateString() : 'Not Set',
            end_date: course.end_at !== undefined ? course.end_at.toDateString() : 'Not Set',
            avg_num_assignments_due_per_day: course.date_statistics !== undefined ? course.date_statistics.avg_num_assignments_due_per_day : 0,
            avg_time_assigned_to_due: course.date_statistics !== undefined ? course.date_statistics.avg_time_assigned_to_due : 'N/A',
            avg_time_late_submission: course.date_statistics !== undefined ? course.date_statistics.avg_time_last_past_due : 'N/A',
            avg_time_last_to_graded: course.date_statistics !== undefined ? course.date_statistics.avg_time_last_to_grade : 'N/A',
            num_late: course.date_statistics !== undefined ? course.date_statistics.avg_num_late : 0,
            id: course.id
        })
    })

    const summary = (data: readonly CourseDateTableRow[]) => {
        const course_summary_row: CourseDateTableRow = {
            key: `course-date-table-summary`,
            name: 'Total/Average',
            course_code: 'N/A',
            start_date: new Date(2100, 11, 31).toDateString(),
            end_date: new Date(1900, 0 , 1).toDateString(),
            avg_num_assignments_due_per_day: 0,
            avg_time_assigned_to_due: '0 D 0 H 0 M 0 S 0 Ms',
            avg_time_late_submission: '0 D 0 H 0 M 0 S 0 Ms',
            avg_time_last_to_graded: '0 D 0 H 0 M 0 S 0 Ms',
            num_late: 0,
            id: -1
        }

        data.map((course) => {
            const earliest_start = new Date(course_summary_row.start_date)
            const latest_end = new Date(course_summary_row.end_date)
            const course_start_date = new Date(course.start_date)
            const course_end_date = new Date(course.end_date)

            if (course_start_date.getFullYear() < earliest_start.getFullYear()) {
                course_summary_row.start_date = course_start_date.toDateString()
            } else if (course_start_date.getFullYear() === earliest_start.getFullYear()) {
                if (course_start_date.getMonth() < earliest_start.getMonth()) {
                    course_summary_row.start_date = course_start_date.toDateString()
                } else if (course_start_date.getMonth() === earliest_start.getMonth()) {
                    if(course_start_date.getDate() < earliest_start.getDate()) {
                        course_summary_row.start_date = course_start_date.toDateString()
                    }
                }
            }

            if (course_end_date.getFullYear() > latest_end.getFullYear()) {
                course_summary_row.end_date = course_end_date.toDateString()
            } else if (course_end_date.getFullYear() === latest_end.getFullYear()) {
                if (course_end_date.getMonth() < latest_end.getMonth()) {
                    course_summary_row.end_date = course_end_date.toDateString()
                } else if (course_end_date.getMonth() === latest_end.getMonth()) {
                    if(course_end_date.getDate() < latest_end.getDate()) {
                        course_summary_row.end_date = course_end_date.toDateString()
                    }
                }
            }

            course_summary_row.avg_num_assignments_due_per_day +=  course.avg_num_assignments_due_per_day
            course_summary_row.avg_time_assigned_to_due = add_time_strings(course_summary_row.avg_time_assigned_to_due, course.avg_time_assigned_to_due)
            course_summary_row.avg_time_late_submission = add_time_strings(course_summary_row.avg_time_late_submission, course.avg_time_late_submission)
            course_summary_row.avg_time_last_to_graded = add_time_strings(course_summary_row.avg_time_last_to_graded, course.avg_time_last_to_graded)

            course_summary_row.num_late += course.num_late
        })

        course_summary_row.avg_num_assignments_due_per_day = course_summary_row.avg_num_assignments_due_per_day / data.length
        course_summary_row.avg_time_assigned_to_due = divide_time_strings(course_summary_row.avg_time_assigned_to_due, data.length)
        course_summary_row.avg_time_late_submission = divide_time_strings(course_summary_row.avg_time_late_submission, data.length)
        course_summary_row.avg_time_last_to_graded = divide_time_strings(course_summary_row.avg_time_last_to_graded, data.length)

        return (
            <Table.Summary.Row>
                <Table.Summary.Cell index={0}>{course_summary_row.name}</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>{course_summary_row.course_code}</Table.Summary.Cell>
                <Table.Summary.Cell index={2}>{course_summary_row.start_date}</Table.Summary.Cell>
                <Table.Summary.Cell index={3}>{course_summary_row.end_date}</Table.Summary.Cell>
                <Table.Summary.Cell index={4}>{course_summary_row.avg_num_assignments_due_per_day}</Table.Summary.Cell>
                <Table.Summary.Cell index={5}>{course_summary_row.avg_time_assigned_to_due}</Table.Summary.Cell>
                <Table.Summary.Cell index={6}>{course_summary_row.avg_time_late_submission}</Table.Summary.Cell>
                <Table.Summary.Cell index={7}>{course_summary_row.avg_time_last_to_graded}</Table.Summary.Cell>
                <Table.Summary.Cell index={8}>{course_summary_row.num_late}</Table.Summary.Cell>
            </Table.Summary.Row>
        )
    }

    return <Table<CourseDateTableRow> columns={course_date_columns} dataSource={data} summary={summary} pagination={false} />
}

export default CourseDateTable