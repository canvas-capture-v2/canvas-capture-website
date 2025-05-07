import {AssignmentGroup} from "./AssignmentTypes.ts";
import {Table, TableColumnsType} from "antd";


type AssignmentGradeTableProps = {
    assignment_group: AssignmentGroup
}

interface AssignmentGradeTableRow {
    key: string
    name: string
    points_possible: number
    avg_points: number
    high_points: number
    upper_q_points: number
    median_points: number
    lower_q_points: number
    low_points: number
    id: number
}

const AssignmentGradeTable = (props: AssignmentGradeTableProps) => {
    const {assignment_group} = props

    const assignment_grade_columns: TableColumnsType<AssignmentGradeTableRow> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, assignment) => <a href={`#${assignment.id}`}>{text}</a>,
            sorter: (a, b) => {
                return a.name.localeCompare(b.name)
            }
        },
        {
            title: 'Points Possible',
            dataIndex: 'points_possible',
            key: 'points_possible',
            sorter: (a, b) => {
                return a.points_possible - b.points_possible
            }
        },
        {
            title: 'Average Points Scored',
            dataIndex: 'avg_points',
            key: 'avg_points',
            sorter: (a, b) => {
                return a.avg_points - b.avg_points
            }
        },
        {
            title: 'High Points Scored',
            dataIndex: 'high_points',
            key: 'high_points',
            sorter: (a, b) => {
                return a.high_points - b.high_points
            }
        },
        {
            title: 'Upper Quartile Points Scored',
            dataIndex: 'upper_q_points',
            key: 'upper_q_points',
            sorter: (a, b) => {
                return a.upper_q_points - b.upper_q_points
            }
        },
        {
            title: 'Median Points Scored',
            dataIndex: 'median_points',
            key: 'median_points',
            sorter: (a, b) => {
                return a.median_points - b.median_points
            }
        },
        {
            title: 'Lower Quartile Points Scored',
            dataIndex: 'lower_q_points',
            key: 'lower_q_points',
            sorter: (a, b) => {
                return a.lower_q_points - b.lower_q_points
            }
        },
        {
            title: 'Low Points Scored',
            dataIndex: 'low_points',
            key: 'low_points',
            sorter: (a, b) => {
                return a.low_points - b.median_points
            }
        },
    ]
    const data: AssignmentGradeTableRow[] = []

    assignment_group.assignments.map((assignment) => {
        data.push({
            key: `assignment-${assignment.id}-grade-table_entry`,
            name: assignment.name,
            points_possible: assignment.points_possible,
            avg_points: assignment.score_statistics !== undefined ? assignment.score_statistics.mean : -1,
            high_points: assignment.score_statistics !== undefined ? assignment.score_statistics.max : -1,
            upper_q_points: assignment.score_statistics !== undefined ? assignment.score_statistics.upper_q : -1,
            median_points: assignment.score_statistics !== undefined ? assignment.score_statistics.median : -1,
            lower_q_points: assignment.score_statistics !== undefined ? assignment.score_statistics.lower_q : -1,
            low_points: assignment.score_statistics !== undefined ? assignment.score_statistics.min : -1,
            id: assignment.id
        })
    })

    const summary = () => {
        return (
            <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>{assignment_group.points_possible}</Table.Summary.Cell>
                <Table.Summary.Cell index={2}>{assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.mean : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={3}>{assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.max : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={4}>{assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.upper_q : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={5}>{assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.median : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={6}>{assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.lower_q : 'N/A'}</Table.Summary.Cell>
                <Table.Summary.Cell index={7}>{assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.min : 'N/A'}</Table.Summary.Cell>
            </Table.Summary.Row>
        )
    }

    return <Table<AssignmentGradeTableRow> columns={assignment_grade_columns} dataSource={data} summary={summary} pagination={false} />
}

export default AssignmentGradeTable