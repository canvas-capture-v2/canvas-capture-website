import {AssignmentGroup} from "../assignment/AssignmentTypes.ts";
import {Card, Descriptions} from "antd";
import AssignmentReport from "../assignment/AssignmentReport.tsx";
import AssignmentGradeTable from "../assignment/AssignmentGradeTable.tsx";
import AssignmentDateTable from "../assignment/AssignmentDateTable.tsx";

type AssignmentGroupReportProps = {
    assignment_group: AssignmentGroup
}

const AssignmentGroupReport = (props: AssignmentGroupReportProps) => {
    const {assignment_group} = props

    return(
        <Card id={`assignment_group-${assignment_group.id}`} type={'inner'} title={`ASSIGNMENT GROUP: ${assignment_group.name}`}>
            <Descriptions>
                <Descriptions.Item label={'Weight'}>{assignment_group.group_weight}</Descriptions.Item>
                <Descriptions.Item label={'# Assignments'}>{assignment_group.assignments.length}</Descriptions.Item>
                <Descriptions.Item label={'# Assignments Due Per Day'}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_num_assignments_due_per_day : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Average Time to Complete Assignments'}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_time_assigned_to_due : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Average Time to Submit Assignments'}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_time_last_past_due : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Average Time To Grade'}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_time_last_to_grade: 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Average # Submissions'}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_submissions : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Average # Late Submissions'}>{assignment_group.date_statistics !== undefined ? assignment_group.date_statistics.avg_num_late : 'N/A'}</Descriptions.Item>
            </Descriptions>
            <AssignmentGradeTable assignment_group={assignment_group} />
            <AssignmentDateTable assignment_group={assignment_group} />
            {assignment_group.assignments.map(assignment => <AssignmentReport assignment={assignment}/>)}
        </Card>
    )
}

export default AssignmentGroupReport