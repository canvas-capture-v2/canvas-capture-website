import {Assignment} from "../assignment/AssignmentTypes.ts";
import {Table, TableColumnsType} from "antd";

type SubmissionTableProps = {
    assignment: Assignment
}

interface SubmissionTableRow {
    key: string
    user_id: string
    time_late: string
    time_to_grade: string
    points_scored: string
    id: number
}

const SubmissionTable = (props: SubmissionTableProps) => {
    const {assignment} = props

    const submission_columns: TableColumnsType<SubmissionTableRow> = [
        {
            title: '(Anonymous) User Id',
            dataIndex: 'user_id',
            key: 'user_id',
            render: (text, submission) => <a href={`#assignment-${assignment.id}-submission-${submission.id}`}>{text}</a>,
            sorter: (a, b) => {
                return a.user_id.localeCompare(b.user_id)
            }
        },
        {
            title: 'Time Late',
            dataIndex: 'time_late',
            key: 'time_late',
            sorter: (a, b) => {
                return a.time_late.localeCompare(b.time_late)
            }
        },
        {
            title: 'Time To Grade',
            dataIndex: 'time_to_grade',
            key: 'time_to_grade',
            sorter: (a, b) => {
                return a.time_to_grade.localeCompare(b.time_to_grade)
            }
        },
        {
            title: 'Score',
            dataIndex: 'points_scored',
            key: 'points_scored',
            sorter: (a, b) => {
                return a.points_scored.localeCompare(b.points_scored)
            }
        }
    ]
    const data: SubmissionTableRow[] = []

    assignment.submissions.map((submission) => {
        data.push({
            key: `assignment-${assignment.id}-submission-by-${submission.anonymous_id}-attempt-${submission.attempt}-table_entry`,
            user_id: submission.anonymous_id,
            time_late: submission.time_late,
            time_to_grade: submission.time_to_grade,
            points_scored: `${submission.score}/${assignment.points_possible}`,
            id: submission.id
        })
    })

    const summary = () => {
        return (
            <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>{assignment.avg_submission_time}</Table.Summary.Cell>
                <Table.Summary.Cell index={2}>{assignment.avg_time_to_grade}</Table.Summary.Cell>
                <Table.Summary.Cell index={3}>{assignment.score_statistics.mean}</Table.Summary.Cell>
            </Table.Summary.Row>
        )
    }

    return <Table<SubmissionTableRow> columns={submission_columns} dataSource={data} summary={summary} pagination={false} />
}

export default SubmissionTable