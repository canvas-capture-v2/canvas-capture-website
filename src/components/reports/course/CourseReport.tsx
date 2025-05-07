import {Card, Descriptions, Typography} from "antd";
import {Course} from "./CourseTypes.ts";
import AssignmentGroupReport from "../assignment_group/AssignmentGroupReport.tsx";
import AssignmentGroupGradeTable from "../assignment_group/AssignmentGroupGradeTable.tsx";
import AssignmentGroupDateTable from "../assignment_group/AssignmentGroupDateTable.tsx";

const {Title, Text} = Typography

type CourseReportProps = {
    course: Course
}

const CourseReport = (props: CourseReportProps) => {
    const {course} = props

    return (
        <Card id={`course-${course.id}`} title={`COURSE: ${course.course_code} - ${course.name}`}>
            <Descriptions>
                <Descriptions.Item label={'# Students'}>{course.total_students}</Descriptions.Item>
                <Descriptions.Item label={'Start Date'}>{course.start_at !== undefined ? course.start_at.toDateString() : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'End Date'}>{course.end_at !== undefined ? course.end_at.toDateString() : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Average Grade'}>{course.score_statistics !== undefined ? course.score_statistics.mean : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Highest Grade'}>{course.score_statistics !== undefined ? course.score_statistics.max : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Median Grade'}>{course.score_statistics !== undefined ? course.score_statistics.median : 'N/A'}</Descriptions.Item>
                <Descriptions.Item label={'Lowest Grade'}>{course.score_statistics !== undefined ? course.score_statistics.min : 'N/A'}</Descriptions.Item>
            </Descriptions>
            <div>
                <Title level={5}>Course Description</Title>
                <Text>{course.public_description}</Text>
            </div>
            <AssignmentGroupGradeTable course={course} />
            <AssignmentGroupDateTable course={course} />
            {course.assignment_groups.map(assignment_group => <AssignmentGroupReport assignment_group={assignment_group}/>)}
        </Card>
    )
}

export default CourseReport