import './App.css'
import {Anchor, Layout, Menu} from "antd";
import Sider from "antd/lib/layout/Sider";
import {Content, Footer, Header} from "antd/lib/layout/layout";
import Selector from "./components/selectors/Selector.tsx";
import {Course} from "./components/reports/course/CourseTypes.ts";
import {SelectorAssignment, SelectorAssignmentGroup, SelectorCourse} from "./components/selectors/SelectorTypes.ts";
import {useEffect, useState} from "react";
import Report from "./components/reports/Report.tsx";
import {useQuery} from "@apollo/client";
import {GET_COURSES} from "./queries/courses_query.ts";
import {Assignment, AssignmentGroup} from "./components/reports/assignment/AssignmentTypes.ts";

export default function App() {
    const {loading, error, data} = useQuery(GET_COURSES)
    const initCourses: SelectorCourse[] = []
    const initSelection: Course[] = []
    const [selector_courses, set_selector_courses] = useState(JSON.stringify(initCourses))
    const [selected_courses, set_selected_courses] = useState(JSON.stringify(initSelection))
    useEffect(() => {
        if (data === undefined) {
            return
        }
        const tempCourses: SelectorCourse[] = []
        data.courses.map((course: Course) => {
            const selectorAssignmentGroups: SelectorAssignmentGroup[] = []
            course.assignment_groups.map((assignmentGroup: AssignmentGroup) => {
                const selectorAssignments: SelectorAssignment[] = []
                assignmentGroup.assignments.map((assignment: Assignment) => {
                    selectorAssignments.push({
                        id: assignment.id,
                        name: assignment.name,
                        selected: false
                    })
                })
                selectorAssignmentGroups.push({
                    id: assignmentGroup.id,
                    name: assignmentGroup.name,
                    selected: false,
                    assignments: selectorAssignments,
                })
            })
            tempCourses.push({
                course_code: course.course_code,
                name: course.name,
                selected: false,
                assignment_groups: selectorAssignmentGroups
            })
        })
        set_selector_courses(JSON.stringify(tempCourses))

        const new_selection: Course[] = data.courses.filter((course: Course) => {
            return (JSON.parse(selector_courses) as SelectorCourse[]).find(selector_course => selector_course.selected && selector_course.course_code === course.course_code) !== undefined
        })

        new_selection.map((course) => {
            const selector_course = (JSON.parse(selector_courses) as SelectorCourse[]).find(selector_course => selector_course.selected && selector_course.course_code === course.course_code)
            if (selector_course !== undefined) {
                course.assignment_groups = course.assignment_groups.filter((assignment_group) => {
                    return selector_course.assignment_groups.find(selector_assignment_group => selector_assignment_group.selected && selector_assignment_group.id === assignment_group.id) !== undefined
                })

                course.assignment_groups.map((assignment_group) => {
                    const selector_assignment_group = selector_course.assignment_groups.find(selector_assignment_group => selector_assignment_group.selected && selector_assignment_group.id === assignment_group.id)
                    if (selector_assignment_group !== undefined) {
                        assignment_group.assignments = assignment_group.assignments.filter((assignment) => {
                            return selector_assignment_group.assignments.find(selector_assignment => selector_assignment.selected && selector_assignment.id === assignment.id)
                        })
                    }
                })
            }
        })

        set_selected_courses(JSON.stringify(new_selection))
    }, [data])

    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }
    console.log(JSON.stringify(data))
    return (
        <div className="App">
            <Layout>
                <Header>
                    <Menu
                    theme="light"
                    mode="horizontal"
                    />
                </Header>
                <Layout>
                    <Sider>
                        <Selector courses={JSON.parse(selector_courses) as SelectorCourse[]} set_selected_courses={set_selected_courses}/>
                    </Sider>
                    <Content>
                        <Report courses={JSON.parse(selected_courses) as Course[]} />
                    </Content>
                    <Anchor />
                </Layout>
                <Footer></Footer>
            </Layout>
        </div>
    )
}
