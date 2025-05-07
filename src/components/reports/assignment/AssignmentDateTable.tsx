import {Table, TableColumnsType} from "antd";
import {AssignmentGroup} from "./AssignmentTypes.ts";

type AssignmentDateTableProps = {
    assignment_group: AssignmentGroup
}

interface AssignmentDateTableRow {
    key: string
    name: string
    date_assigned: string
    due_date: string
    last_submission_date: string
    last_graded_date: string
    num_late: number
    avg_submissions_per_user: number
    id: number
}

const AssignmentDateTable = (props: AssignmentDateTableProps) => {
    const {assignment_group} = props

    const assignment_date_columns: TableColumnsType<AssignmentDateTableRow> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, assignment) => <a href={`#assignment-${assignment.id}`}>{text}</a>,
            sorter: (a, b) => {
                return a.name.localeCompare(b.name)
            }
        },
        {
            title: 'Date Assigned',
            dataIndex: 'date_assigned',
            key: 'date_assigned',
            sorter: (a, b) => {
                const a_date_assigned = new Date(a.date_assigned)
                const b_date_assigned = new Date(b.date_assigned)
                if (a_date_assigned.getFullYear() - b_date_assigned.getFullYear() === 0) {
                    if (a_date_assigned.getMonth() - b_date_assigned.getFullYear() === 0) {
                        return a_date_assigned.getDate() - b_date_assigned.getDate()
                    }
                    return a_date_assigned.getFullYear() - b_date_assigned.getFullYear()
                }
                return a_date_assigned.getFullYear() - b_date_assigned.getFullYear()
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
    const data: AssignmentDateTableRow[] = []

    assignment_group.assignments.map((assignment) => {
        data.push({
            key: `assignment-${assignment.id}-grade-table_entry`,
            name: assignment.name,
            date_assigned: assignment.unlock_at !== undefined ? assignment.unlock_at.toDateString() : 'N/A',
            due_date: assignment.due_at !== undefined ? assignment.due_at.toDateString() : 'N/A',
            last_submission_date: assignment.last_submission_date !== undefined ? assignment.last_submission_date.toDateString() : 'N/A',
            last_graded_date:  assignment.last_graded_date !== undefined ? assignment.last_graded_date.toDateString() : 'N/A',
            num_late: assignment.num_late_submissions,
            avg_submissions_per_user: assignment.avg_submissions_per_user,
            id: assignment.id
        })
    })

    const summary = () => {
        return (
            <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_num_assignments_due_per_day : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={2}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_time_assigned_to_due : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={3}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_time_last_past_due : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={4}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_time_last_to_grade : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={5}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_num_late : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={6}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_submissions : 'N/A'}</Table.Summary.Cell>
            </Table.Summary.Row>
        )
    }

    return <Table<AssignmentDateTableRow> columns={assignment_date_columns} dataSource={data} summary={summary} pagination={false} />
}

export default AssignmentDateTable