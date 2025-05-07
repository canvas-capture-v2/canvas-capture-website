import {Meta, StoryObj} from "@storybook/react";
import Selector from "../../components/selectors/Selector.tsx";


const meta = {
    title: 'Component/NewSelector',
    component: Selector,
    parameters: {
        layout: 'centered'
    },

} satisfies Meta<typeof Selector>

export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
    args: {
        courses: [
            {
                courseName: 'Microservices',
                courseCode: 'CSC5201',
                assignmentGroups: [
                    {
                        assignmentGroupId: 0,
                        assignmentGroupName: 'Labs',
                        assignments: [
                            {
                                assignmentId: 0,
                                assignmentName: 'Lab 1'
                            },
                            {
                                assignmentId: 1,
                                assignmentName: 'Lab 2'
                            }
                        ]
                    },
                    {
                        assignmentGroupId: 1,
                        assignmentGroupName: 'Midterms',
                        assignments: [
                            {
                                assignmentId: 2,
                                assignmentName: 'Midterm 1',
                            },
                            {
                                assignmentId: 3,
                                assignmentName: 'Midterm 2'
                            }
                        ]
                    }
                ]
            },
            {
                courseName: 'DevSecOps',
                courseCode: 'SWE4511',
                assignmentGroups: [
                    {
                        assignmentGroupId: 2,
                        assignmentGroupName: 'Labs',
                        assignments: [
                            {
                                assignmentId: 4,
                                assignmentName: 'Lab 1'
                            },
                            {
                                assignmentId: 5,
                                assignmentName: 'Lab 2'
                            }
                        ]
                    },
                    {
                        assignmentGroupId: 3,
                        assignmentGroupName: 'Reading Quizzes',
                        assignments: [
                            {
                                assignmentId: 6,
                                assignmentName: 'Reading 1 Quiz'
                            },
                            {
                                assignmentId: 7,
                                assignmentName: 'Reading 2 Quiz'
                            }
                        ]
                    }
                ]
            }
        ]
    },
}