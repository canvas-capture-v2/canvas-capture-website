import {Assignment} from "./AssignmentTypes.ts";
import {Card, Descriptions, Typography} from "antd";
import SubmissionTable from "../submission/SubmissionTable.tsx";
import JumpLinks from "../JumpLinks.tsx";
import SubmissionReport from "../submission/SubmissionReport.tsx";
const {Title, Text} = Typography

type AssignmentReportProps = {
    assignment: Assignment
}

const AssignmentReport = (props: AssignmentReportProps) => {
    const {assignment} = props

    return (
        <Card id={`assignment-${assignment.id}`} type={'inner'} title={`ASSIGNMENT: ${assignment.name}`}>
            <Descriptions>
                <Descriptions.Item label={'Average Points Scored'}>{assignment.score_statistics !== undefined ? assignment.score_statistics.mean : 'N'}/{assignment.score_statistics !== undefined ? assignment.points_possible : 'A'}</Descriptions.Item>
                <Descriptions.Item label={'Highest Points Scored'}>{assignment.score_statistics !== undefined ? assignment.score_statistics.max : 'N'}/{assignment.score_statistics !== undefined ? assignment.points_possible : 'A'}</Descriptions.Item>
                <Descriptions.Item label={'Median Points Scored'}>{assignment.score_statistics !== undefined ? assignment.score_statistics.median : 'N'}/{assignment.score_statistics !== undefined ? assignment.points_possible : 'A'}</Descriptions.Item>
                <Descriptions.Item label={'Lowest Points Scored'}>{assignment.score_statistics !== undefined ? assignment.score_statistics.min : 'N'}/{assignment.score_statistics !== undefined ? assignment.points_possible : 'A'}</Descriptions.Item>
                <Descriptions.Item label={'Assigned Date'}>{assignment.unlock_at !== undefined ? assignment.unlock_at.toDateString() : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Due Date'}>{assignment.due_at !== undefined ? assignment.due_at.toDateString() : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'# Late Submissions'}>{assignment.num_late_submissions !== undefined ? assignment.num_late_submissions : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Time To Grade After Last Submission'}>{assignment.avg_time_to_grade !== undefined ? assignment.avg_time_to_grade : 'N/A'}</Descriptions.Item>
            </Descriptions>
            {assignment.score_statistics !== undefined ? <JumpLinks descriptionLink={`#assignment-${assignment}`}
                       lowLink={`assignment-${assignment}-submission-${assignment.low_submission.id}-user-${assignment.low_submission.anonymous_id}-attempt-${assignment.low_submission.attempt}`}
                       medianLink={`assignment-${assignment}-submission-${assignment.median_submission.id}-user-${assignment.median_submission.anonymous_id}-attempt-${assignment.median_submission.attempt}`}
                       highLink={`assigment-${assignment}-submission-${assignment.high_submission.id}-user-${assignment.high_submission.anonymous_id}-attempt-${assignment.high_submission.attempt}`}
            /> : '' }
            <div>
                <Title level={5}>Assignment Description</Title>
                <Text>{assignment.description}</Text>
            </div>
            {assignment.submissions !== undefined ? <SubmissionTable assignment={assignment} /> : ''}
            {assignment.submissions !== undefined ? assignment.submissions.map(submission => <SubmissionReport assignment={assignment} submission={submission}/>) : ''}
        </Card>
    )
}

export default AssignmentReport