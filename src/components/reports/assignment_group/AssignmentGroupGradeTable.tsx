import {Course} from "../course/CourseTypes.ts";
import {Table, TableColumnsType} from "antd";

type AssignmentGroupGradeTableProps = {
    course: Course
}

interface AssignmentGroupGradeTableRow {
    key: string
    name: string
    weight: number
    points_possible: number
    avg_points: number
    high_points: number
    upper_q_points: number
    median_points: number
    lower_q_points: number
    low_points: number
    id: number
}

const AssignmentGroupGradeTable = (props: AssignmentGroupGradeTableProps) => {
    const {course} = props

    const assignment_group_grade_columns: TableColumnsType<AssignmentGroupGradeTableRow> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, assignment_group) => <a href={`#course-${course.id}-assignment_group-${assignment_group.id}`}>{text}</a>,
            sorter: (a, b) => {
                return a.name.localeCompare(b.name)
            }
        },
        {
            title: 'Weight',
            dataIndex: 'weight',
            key: 'weight',
            sorter: (a, b) => {
                return a.weight - b.weight
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

    const data: AssignmentGroupGradeTableRow[] = []

    course.assignment_groups.map((assignment_group) => {
        data.push({
            key: `assignment-group-${assignment_group.id}-grade_table_entry`,
            name: assignment_group.name,
            weight: assignment_group.group_weight,
            points_possible: assignment_group.points_possible,
            avg_points: assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.mean : -1,
            high_points: assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.max : -1,
            upper_q_points: assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.upper_q : -1,
            median_points: assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.median : -1,
            lower_q_points: assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.lower_q : -1,
            low_points: assignment_group.score_statistics !== undefined ? assignment_group.score_statistics.min : -1,
            id: assignment_group.id
        })
    })

    const summary = () => {
        return (
            <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>{course.weight}</Table.Summary.Cell>
                <Table.Summary.Cell index={2}>{course.points_possible}</Table.Summary.Cell>
                <Table.Summary.Cell index={3}>{course.score_statistics !== undefined ? course.score_statistics.mean : -1}</Table.Summary.Cell>
                <Table.Summary.Cell index={4}>{course.score_statistics !== undefined ? course.score_statistics.max : -1}</Table.Summary.Cell>
                <Table.Summary.Cell index={5}>{course.score_statistics !== undefined ? course.score_statistics.upper_q : -1}</Table.Summary.Cell>
                <Table.Summary.Cell index={5}>{course.score_statistics !== undefined ? course.score_statistics.median : -1}</Table.Summary.Cell>
                <Table.Summary.Cell index={6}>{course.score_statistics !== undefined ? course.score_statistics.lower_q : -1}</Table.Summary.Cell>
                <Table.Summary.Cell index={6}>{course.score_statistics !== undefined ? course.score_statistics.min: -1}</Table.Summary.Cell>
            </Table.Summary.Row>
        )
    }

    return <Table<AssignmentGroupGradeTableRow> columns={assignment_group_grade_columns} dataSource={data} summary={summary} pagination={false} />
}

export default AssignmentGroupGradeTable