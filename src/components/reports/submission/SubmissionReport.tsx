import {Submission} from "./SubmissionTypes.ts";
import SubmissionCommentTable from "./SubmissionCommentTable.tsx";
import {Card, Descriptions, Flex, Tag, Typography} from "antd";
const {Title, Text} = Typography

import {Assignment} from "../assignment/AssignmentTypes.ts";
import {JSX} from "react";
import JumpLinks from "../JumpLinks.tsx";

type SubmissionReportProps = {
    assignment: Assignment
    submission: Submission
}

const SubmissionReport = (props: SubmissionReportProps) => {
    const {assignment, submission} = props

    let tags: JSX.Element[] = []
    if (submission.id === assignment.low_submission.id) {
        tags.push(<Tag color='red'>Low Score</Tag>)
    } else if (submission.id === assignment.median_submission.id) {
        tags.push(<Tag color='yellow'>Median Score</Tag>)
    } else if (submission.id === assignment.high_submission.id) {
        tags.push(<Tag color='green'>High Score</Tag>)
    }
    return (
        <Card id={`assignment-${assignment.id}-submission-${submission.id}-user-${submission.anonymous_id}-attempt-${submission.attempt}`} type={'inner'} title={`SUBMISSION: ${assignment.name}`}>
            <Descriptions title={"Submission Details"}>
                <Descriptions.Item label={"(Anonymous) User Id"}>{submission.anonymous_id}</Descriptions.Item>
                <Descriptions.Item label={"Attempt #"}>{submission.attempt}</Descriptions.Item>
                <Descriptions.Item label={"Points Scored"}>{submission.score}/{assignment.points_possible}</Descriptions.Item>
                {tags.length > 0 ? <Descriptions.Item label={"Tags"}><Flex gap={'4px 0'}>{tags.map(tag => tag)}</Flex></Descriptions.Item> : ''}
                {submission.late ? <Descriptions.Item label={"Late Status"}>{submission.late_policy_status.charAt(0).toUpperCase() + submission.late_policy_status.slice(1)}</Descriptions.Item> : ''}
                {submission.late ? <Descriptions.Item label={"Time Late:"}>{submission.time_late}</Descriptions.Item> : ''}
                <Descriptions.Item label={"Time to Grade"}>{submission.time_to_grade}</Descriptions.Item>
            </Descriptions>
            <JumpLinks descriptionLink={`#assignment-${assignment}`}
                       lowLink={`assignment-${assignment}-submission-${assignment.low_submission.id}-user-${assignment.low_submission.anonymous_id}-attempt-${assignment.low_submission.attempt}`}
                       medianLink={`assignment-${assignment}-submission-${assignment.median_submission.id}-user-${assignment.median_submission.anonymous_id}-attempt-${assignment.median_submission.attempt}`}
                       highLink={`assigment-${assignment}-submission-${assignment.high_submission.id}-user-${assignment.high_submission.anonymous_id}-attempt-${assignment.high_submission.attempt}`}
            />
            <div>
                <Title level={5}>Submission Body</Title>
                <Text>{submission.body}</Text>
            </div>
            <SubmissionCommentTable submission={submission} />
        </Card>
    )
}

export default SubmissionReport