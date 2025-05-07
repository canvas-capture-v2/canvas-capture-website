import {Meta, StoryObj} from "@storybook/react";
import CourseGradeTable from "../../components/reports/course/CourseTable.tsx";


const meta = {
    title: 'Component/CourseTable',
    component: CourseGradeTable,
    parameters: {
        layout: 'centered'
    },

} satisfies Meta<typeof CourseGradeTable>

export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
    args: {
        // @ts-ignore
        courses: [
            {
                "id": 1,
                "name": "David Test",
                "account_id": 3,
                "uuid": "n0NY7H5ymqovpEH0s8PFdwKwARcpjzhTOXa0H68E",
                "start_at": new Date(2024, 8, 1),
                "grading_standard_id": null,
                "created_at": new Date("2024-11-18T18:22:24Z"),
                "course_code": "David",
                "root_account_id": 1,
                "enrollment_term_id": 1,
                "grade_passback_setting": null,
                "end_at": new Date(2024, 11, 23),
                "apply_assignment_group_weights": false,
                "time_zone": "America/Chicago",
                "enrollments": [
                    {
                        "type": "teacher",
                        "role": "TeacherEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 93
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 91
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 97
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 87
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 85
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 77
                        }
                    }
                ],
                "workflow_state": "unpublished",
                "assignment_groups": []
            },
            {
                "id": 2,
                "name": "Gavin Test",
                "account_id": 3,
                "uuid": "27HKJop40Qv1MshOhOnsGwJVbFYsOlz1lLHvXh2v",
                "start_at": new Date(2024, 8, 1),
                "grading_standard_id": null,
                "created_at": new Date("2024-11-18T18:28:56Z"),
                "course_code": "Gavin",
                "root_account_id": 1,
                "enrollment_term_id": 1,
                "grade_passback_setting": null,
                "end_at": new Date(2024, 11, 23),
                "apply_assignment_group_weights": false,
                "time_zone": "America/Chicago",
                "enrollments": [
                    {
                        "type": "teacher",
                        "role": "TeacherEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 66
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 77
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 88
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 99
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 91
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 82
                        }
                    }
                ],
                "workflow_state": "unpublished",
                "assignment_groups": []
            },
            {
                "id": 4,
                "name": "General Test",
                "account_id": 3,
                "uuid": "htHsFx9yU3GFbQYwA2nOhtHSwHeK2Ig06qnBJknf",
                "start_at": new Date(2024, 8, 1),
                "grading_standard_id": null,
                "created_at": new Date("2024-11-20T14:13:09Z"),
                "course_code": "General",
                "root_account_id": 1,
                "enrollment_term_id": 1,
                "grade_passback_setting": null,
                "end_at": new Date(2024, 11, 23),
                "apply_assignment_group_weights": false,
                "time_zone": "America/Chicago",
                "enrollments": [
                    {
                        "type": "teacher",
                        "role": "TeacherEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 100
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 99
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 97
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 95
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 93
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 94
                        }
                    }
                ],
                "workflow_state": "available",
                "assignment_groups": []
            },
            {
                "id": 3,
                "name": "Rudy Test",
                "account_id": 3,
                "uuid": "6q8VWZn5gUpgUMmxbM3squyAnVbqVpxiz5AiuuHm",
                "start_at": new Date(2024, 8, 1),
                "grading_standard_id": null,
                "created_at": new Date("2024-11-18T18:29:51Z"),
                "course_code": "Rudy",
                "root_account_id": 1,
                "enrollment_term_id": 1,
                "grade_passback_setting": null,
                "end_at": new Date(2024, 11, 23),
                "apply_assignment_group_weights": false,
                "time_zone": "America/Chicago",
                "enrollments": [
                    {
                        "type": "teacher",
                        "role": "TeacherEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 67
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 89
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 82
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 76
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 72
                        }
                    },
                    {
                        "type": "student",
                        "role": "StudentEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false,
                        "grades": {
                            "final_score": 90
                        }
                    }
                ],
                "workflow_state": "available",
                "assignment_groups": []
            }
        ]
    }
}