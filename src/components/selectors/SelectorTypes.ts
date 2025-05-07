
export type SelectorAssignment = {
    id: number
    name: string
    selected: boolean
}

export type SelectorAssignmentGroup = {
    id: number
    name: string
    selected: boolean
    assignments: SelectorAssignment[]
}

export type SelectorCourse = {
    course_code: string
    name: string
    selected: boolean
    assignment_groups: SelectorAssignmentGroup[]
}