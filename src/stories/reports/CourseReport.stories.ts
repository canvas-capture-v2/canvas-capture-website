import {Meta, StoryObj} from "@storybook/react";
import CourseReport from "../../components/reports/course/Course.tsx";


const meta = {
    title: 'Report/CourseReport',
    component: CourseReport,
    parameters: {
        layout: 'centered'
    },

} satisfies Meta<typeof CourseReport>

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
                "start_at": null,
                "grading_standard_id": null,
                "is_public": true,
                "created_at": "2024-11-18T18:22:24Z",
                "course_code": "David",
                "default_view": "modules",
                "root_account_id": 1,
                "enrollment_term_id": 1,
                "license": "public_domain",
                "grade_passback_setting": null,
                "end_at": null,
                "public_syllabus": true,
                "public_syllabus_to_auth": false,
                "storage_quota_mb": 500,
                "is_public_to_auth_users": false,
                "homeroom_course": false,
                "course_color": null,
                "friendly_name": null,
                "apply_assignment_group_weights": false,
                "calendar": {
                    "ics": "http://sdlstudentvm09.msoe.edu/feeds/calendars/course_n0NY7H5ymqovpEH0s8PFdwKwARcpjzhTOXa0H68E.ics"
                },
                "time_zone": "America/Chicago",
                "blueprint": false,
                "sis_course_id": null,
                "sis_import_id": null,
                "integration_id": null,
                "enrollments": [
                    {
                        "type": "teacher",
                        "role": "TeacherEnrollment",
                        "role_id": 4,
                        "user_id": 1,
                        "enrollment_state": "active",
                        "limit_privileges_to_course_section": false
                    }
                ],
                "hide_final_grades": false,
                "workflow_state": "unpublished",
                "restrict_enrollments_to_course_dates": false
            },
            {
                "id": 2,
                "name": "Gavin Test",
                "account_id": 3,
                "uuid": "27HKJop40Qv1MshOhOnsGwJVbFYsOlz1lLHvXh2v",
                "start_at": null,
                "grading_standard_id": null,
                "is_public": true,
                "created_at": "2024-11-18T18:28:56Z",
                "course_code": "Gavin",
                "default_view": "modules",
                "root_account_id": 1,
                "enrollment_term_id": 1,
                "license": "private",
                "grade_passback_setting": null,
                "end_at": null,
                "public_syllabus": true,
                "public_syllabus_to_auth": false,
                "storage_quota_mb": 500,
                "is_public_to_auth_users": false,
                "homeroom_course": false,
                "course_color": null,
                "friendly_name": null,
                "apply_assignment_group_weights": false,
                "calendar": {
                "ics": "http://sdlstudentvm09.msoe.edu/feeds/calendars/course_27HKJop40Qv1MshOhOnsGwJVbFYsOlz1lLHvXh2v.ics"
            },
                "time_zone": "America/Chicago",
                "blueprint": false,
                "sis_course_id": null,
                "sis_import_id": null,
                "integration_id": null,
                "enrollments": [
                {
                    "type": "teacher",
                    "role": "TeacherEnrollment",
                    "role_id": 4,
                    "user_id": 1,
                    "enrollment_state": "active",
                    "limit_privileges_to_course_section": false
                }
            ],
                "hide_final_grades": false,
                "workflow_state": "unpublished",
                "restrict_enrollments_to_course_dates": false
            },
            {
                "id": 4,
                "name": "General Test",
                "account_id": 3,
                "uuid": "htHsFx9yU3GFbQYwA2nOhtHSwHeK2Ig06qnBJknf",
                "start_at": null,
                "grading_standard_id": null,
                "is_public": false,
                "created_at": "2024-11-20T14:13:09Z",
                "course_code": "General",
                "default_view": "assignments",
                "root_account_id": 1,
                "enrollment_term_id": 1,
                "license": "private",
                "grade_passback_setting": null,
                "end_at": null,
                "public_syllabus": false,
                "public_syllabus_to_auth": false,
                "storage_quota_mb": 500,
                "is_public_to_auth_users": false,
                "homeroom_course": false,
                "course_color": null,
                "friendly_name": null,
                "apply_assignment_group_weights": false,
                "calendar": {
                "ics": "http://sdlstudentvm09.msoe.edu/feeds/calendars/course_htHsFx9yU3GFbQYwA2nOhtHSwHeK2Ig06qnBJknf.ics"
            },
                "time_zone": "America/Chicago",
                "blueprint": false,
                "sis_course_id": null,
                "sis_import_id": null,
                "integration_id": null,
                "enrollments": [
                {
                    "type": "teacher",
                    "role": "TeacherEnrollment",
                    "role_id": 4,
                    "user_id": 1,
                    "enrollment_state": "active",
                    "limit_privileges_to_course_section": false
                }
            ],
                "hide_final_grades": false,
                "workflow_state": "available",
                "restrict_enrollments_to_course_dates": false
            },
            {
                "id": 3,
                "name": "Rudy Test",
                "account_id": 3,
                "uuid": "6q8VWZn5gUpgUMmxbM3squyAnVbqVpxiz5AiuuHm",
                "start_at": null,
                "grading_standard_id": null,
                "is_public": false,
                "created_at": "2024-11-18T18:29:51Z",
                "course_code": "Rudy",
                "default_view": "modules",
                "root_account_id": 1,
                "enrollment_term_id": 1,
                "license": "private",
                "grade_passback_setting": null,
                "end_at": null,
                "public_syllabus": false,
                "public_syllabus_to_auth": false,
                "storage_quota_mb": 500,
                "is_public_to_auth_users": false,
                "homeroom_course": false,
                "course_color": null,
                "friendly_name": null,
                "apply_assignment_group_weights": false,
                "calendar": {
                    "ics": "http://sdlstudentvm09.msoe.edu/feeds/calendars/course_6q8VWZn5gUpgUMmxbM3squyAnVbqVpxiz5AiuuHm.ics"
                },
                "time_zone": "America/Chicago",
                "blueprint": false,
                "sis_course_id": null,
                "sis_import_id": null,
                "integration_id": null,
                "enrollments": [
                {
                    "type": "teacher",
                    "role": "TeacherEnrollment",
                    "role_id": 4,
                    "user_id": 1,
                    "enrollment_state": "active",
                    "limit_privileges_to_course_section": false
                }
            ],
                "hide_final_grades": false,
                "workflow_state": "available",
                "restrict_enrollments_to_course_dates": false
            }
        ]
    }
}