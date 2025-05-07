import {Table, TableColumnsType} from "antd";
import {Course} from "../course/CourseTypes.ts";

type AssignmentGroupDateTableProps = {
    course: Course
}

interface AssignmentGroupDateTableRow {
    key: string
    name: string
    avg_num_assignments_due_per_day: number
    due_date: string
    last_submission_date: string
    last_graded_date: string
    num_late: number
    avg_submissions_per_user: number
    id: number
}

const AssignmentGroupDateTable = (props: AssignmentGroupDateTableProps) => {
    const {course} = props

    const assignment_group_date_columns: TableColumnsType<AssignmentGroupDateTableRow> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, assignment_group) => <a href={`#${assignment_group.id}`}>{text}</a>,
            sorter: (a, b) => {
                return a.name.localeCompare(b.name)
            }
        },
        {
            title: 'Average # Assignments Due Per Day',
            dataIndex: 'avg_num_assignments_due_per_day',
            key: 'avg_num_assignments_due_per_day',
            sorter: (a, b) => {
                return a.avg_num_assignments_due_per_day - b.avg_num_assignments_due_per_day
            }
        },
        {
            title: 'Date Due',
            dataIndex: 'due_date',
            key: 'due_date',
            sorter: (a, b) => {
                const a_due_date = new Date(a.due_date)
                const b_due_date = new Date(b.due_date)
                if (a_due_date.getFullYear() - b_due_date.getFullYear() === 0) {
                    if (a_due_date.getMonth() - b_due_date.getFullYear() === 0) {
                        return a_due_date.getDate() - b_due_date.getDate()
                    }
                    return a_due_date.getFullYear() - b_due_date.getFullYear()
                }
                return a_due_date.getFullYear() - b_due_date.getFullYear()
            }
        },
        {
            title: 'Date of Last Submission',
            dataIndex: 'last_submission_date',
            key: 'last_submission_date',
            sorter: (a, b) => {
                const a_last_submission_date = new Date(a.last_submission_date)
                const b_last_submission_date = new Date(b.last_submission_date)
                if (a_last_submission_date.getFullYear() - b_last_submission_date.getFullYear() === 0) {
                    if (a_last_submission_date.getMonth() - b_last_submission_date.getFullYear() === 0) {
                        return a_last_submission_date.getDate() - b_last_submission_date.getDate()
                    }
                    return a_last_submission_date.getFullYear() - b_last_submission_date.getFullYear()
                }
                return a_last_submission_date.getFullYear() - b_last_submission_date.getFullYear()
            }
        },
        {
            title: 'Date of Last Graded',
            dataIndex: 'last_graded_date',
            key: 'last_graded_date',
            sorter: (a, b) => {
                const a_last_graded_date = new Date(a.last_graded_date)
                const b_last_graded_date = new Date(b.last_graded_date)
                if (a_last_graded_date.getFullYear() - b_last_graded_date.getFullYear() === 0) {
                    if (a_last_graded_date.getMonth() - b_last_graded_date.getFullYear() === 0) {
                        return a_last_graded_date.getDate() - b_last_graded_date.getDate()
                    }
                    return a_last_graded_date.getFullYear() - b_last_graded_date.getFullYear()
                }
                return a_last_graded_date.getFullYear() - b_last_graded_date.getFullYear()
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
        {
            title: 'Average # Submissions/Student',
            dataIndex: 'avg_submissions_per_user',
            key: 'avg_submissions_per_user',
            sorter: (a, b) => {
                return a.avg_submissions_per_user - b.avg_submissions_per_user
            }
        }
    ]
    const data: AssignmentGroupDateTableRow[] = []

    course.assignment_groups.map((assignment_group) => {
        data.push({
            key: `course-${course.id}-assignment_group-grade-summary`,
            name: assignment_group.name,
            avg_num_assignments_due_per_day: assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_num_assignments_due_per_day : -1,
            due_date: assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_time_assigned_to_due : 'N/A',
            last_submission_date: assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_time_last_past_due : 'N/A',
            last_graded_date: assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_time_last_to_grade : 'N/A',
            num_late: assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_num_late : -1,
            avg_submissions_per_user: assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_submissions : -1,
            id: assignment_group.id
        })
    })

    const summary = () => {
        return (
            <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total/Average</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>{course.date_statistics !== undefined ? course.date_statistics.avg_num_assignments_due_per_day : -1}</Table.Summary.Cell>
                <Table.Summary.Cell index={2}>{course.date_statistics !== undefined ? course.date_statistics.avg_time_assigned_to_due : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={3}>{course.date_statistics !== undefined ? course.date_statistics.avg_time_last_past_due : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={4}>{course.date_statistics !== undefined ? course.date_statistics.avg_time_last_to_grade : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={5}>{course.date_statistics !== undefined ? course.date_statistics.avg_num_late : -1}</Table.Summary.Cell>
                <Table.Summary.Cell index={6}>{course.date_statistics !== undefined ? course.date_statistics.avg_submissions : -1}</Table.Summary.Cell>
            </Table.Summary.Row>
        )
    }

    return(
        <Table<AssignmentGroupDateTableRow> columns={assignment_group_date_columns} dataSource={data} summary={summary} pagination={false}/>
    )
}

export default AssignmentGroupDateTable