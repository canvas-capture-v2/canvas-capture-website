import {Key, useEffect, useState} from "react";
import {Tree, TreeDataNode, TreeProps} from "antd";
import {SelectorAssignmentGroup, SelectorCourse} from "./SelectorTypes.ts";


type SelectorProps = {
    courses: SelectorCourse[]
    set_selected_courses: (new_courses: string) => void
}

export default function Selector(props: SelectorProps) {
    const {courses, set_selected_courses} = props
    const treeData: TreeDataNode[] = []
    courses.map((course: SelectorCourse)=> {
        const courseChildren: TreeDataNode[] = []
        course.assignment_groups.map((assignmentGroup: SelectorAssignmentGroup) => {
            const assignmentGroupChildren: TreeDataNode[] = []
            assignmentGroup.assignments.map((assignment) => {
                assignmentGroupChildren.push({
                    title: assignment.name,
                    key: `assignment-${assignment.id}`
                })
            })
            courseChildren.push({
                title: assignmentGroup.name,
                key: `assignment-group-${assignmentGroup.id}`,
                children: assignmentGroupChildren
            })
        })
        treeData.push({
            title: course.name,
            key: `course-${course.course_code}`,
            children: courseChildren
        })
    })
    const [expandedKeys, setExpandedKeys] = useState<Key[]>()
    const [checkedKeys, setCheckedKeys] = useState<Key[]>()
    const [selectedKeys, setSelectedKeys] = useState<Key[]>()
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true)

    const onExpand: TreeProps['onExpand'] = (expandedKeysValue) => {
        setExpandedKeys(expandedKeysValue)
        setAutoExpandParent(false)
    }

    const onCheck: TreeProps['onCheck'] = (checkedKeysValue) => {
        setCheckedKeys(checkedKeysValue as Key[])

    }

    const onSelect: TreeProps['onSelect'] = (selectedKeysValue) => {
        setSelectedKeys(selectedKeysValue)
    }

    useEffect(() => {
        if (checkedKeys === undefined) {
            return
        }
        const selected_courses: SelectorCourse[] = courses.slice()
        selected_courses.map((course) => {
            course.selected = checkedKeys.includes(`course-${course.course_code}`)
            course.assignment_groups.map((assignment_group) => {
                assignment_group.selected = checkedKeys.includes(`assignment-group-${assignment_group.id}`)
                assignment_group.assignments.map((assignment) => {
                    assignment.selected = checkedKeys.includes(`assignment-${assignment.id}`)
                })
            })
        })
        set_selected_courses(JSON.stringify(selected_courses))
    }, [checkedKeys])

    return(
        <Tree
            checkable
            draggable
            blockNode
            onExpand={onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onCheck={onCheck}
            checkedKeys={checkedKeys}
            onSelect={onSelect}
            selectedKeys={selectedKeys}
            treeData={treeData}
        />
    )
}