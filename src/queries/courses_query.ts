import {gql} from "@apollo/client";

export const GET_SELECTORS = gql`
    query Courses {
        courses {
            id
            name
            course_code
            assignment_groups {
                id
                name
                assignments {
                    id
                    name
                }
            }
        }
    }
`

export const GET_COURSES = gql`
    query Courses {
        courses {
            id
            name
            course_code
            assignment_groups {
                id
                assignments {
                    id
                    name
                    description
                    updated_at
                    due_at
                    unlock_at
                    course_id
                    assignment_group_id
                    position
                    points_possible
                    submission_types
                    published
                    has_submitted_submissions
                    quiz_id
                    anonymous_submissions
                    use_rubric_for_grading
                    allowed_attempts
                    score_statistics {
                        id
                        min
                        max
                        mean
                        upper_q
                        median
                        lower_q
                    }
                    is_quiz_assignment
                    submissions {
                        assignment_id
                        attempt
                        body
                        score
                        submitted_at
                        user_id
                        late
                        excused
                        missing
                        late_policy_status
                        anonymous_id
                        id
                        time_late
                        time_to_grade
                        submission_comments {
                            id
                            author_name
                            comment
                            created_at
                            edited_at
                        }
                    }
                    high_submission {
                        assignment_id
                        attempt
                        body
                        score
                        submitted_at
                        user_id
                        late
                        excused
                        missing
                        late_policy_status
                        anonymous_id
                        id
                        time_late
                        time_to_grade
                        submission_comments {
                            id
                            author_name
                            comment
                            created_at
                            edited_at
                        }
                    }
                    median_submission {
                        assignment_id
                        attempt
                        body
                        score
                        submitted_at
                        user_id
                        late
                        excused
                        missing
                        late_policy_status
                        anonymous_id
                        id
                        time_late
                        time_to_grade
                        submission_comments {
                            id
                            author_name
                            comment
                            created_at
                            edited_at
                        }
                    }
                    low_submission {
                        assignment_id
                        attempt
                        body
                        score
                        submitted_at
                        user_id
                        late
                        excused
                        missing
                        late_policy_status
                        anonymous_id
                        id
                        time_late
                        time_to_grade
                        submission_comments {
                            id
                            author_name
                            comment
                            created_at
                            edited_at
                        }
                    }
                    last_submission_date
                    last_graded_date
                    num_late_submissions
                    avg_submissions_per_user
                    avg_submission_time
                    avg_time_to_grade
                }
                name
                course_id
                position
                group_weight
                points_possible
                date_statistics {
                    id
                    avg_time_due_to_assigned
                    avg_time_assigned_to_due
                    avg_time_last_past_due
                    avg_time_last_to_grade
                    avg_num_late
                    avg_submissions
                }
                score_statistics {
                    id
                    min
                    max
                    mean
                    upper_q
                    median
                    lower_q
                }
            }
            start_at
            end_at
            total_students
            syllabus_body
            public_description
            weight
            points_possible
            score_statistics {
                id
                min
                max
                mean
                upper_q
                median
                lower_q
            }
            date_statistics {
                id
                avg_time_due_to_assigned
                avg_time_assigned_to_due
                avg_time_last_past_due
                avg_time_last_to_grade
                avg_num_late
                avg_submissions
            }
        }
    }
`