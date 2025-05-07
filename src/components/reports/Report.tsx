import { Course } from "./course/CourseTypes"
import CourseReport from "./course/CourseReport.tsx";
import {Card} from "antd";
import CourseGradeTable from "./course/CourseGradeTable.tsx";
import CourseDateTable from "./course/CourseDateTable.tsx";

type ReportProps = {
    courses: Course[]
}

const Report = (props: ReportProps) => {
    const {courses} = props

    return(
        <>
            <Card>
                <CourseGradeTable courses={courses}/>
                <CourseDateTable courses={courses}/>
            </Card>
            {courses.map(course => <CourseReport course={course}/>)}
        </>
    )
}

export default Report