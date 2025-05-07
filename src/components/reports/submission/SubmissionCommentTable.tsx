import { Submission } from "./SubmissionTypes"
import {Table, TableColumnsType} from "antd";

type SubmissionCommentTableProps = {
    submission: Submission
}

interface SubmissionCommentTableRow {
    key: string
    name: string
    comment: string
    created_at: string
    edited_at?: string
}

const SubmissionCommentTable = (props: SubmissionCommentTableProps) => {
    const {submission} = props

    if (!submission.submission_comments || submission.submission_comments.length === 0) {
        return
    }

    const submission_comment_columns: TableColumnsType<SubmissionCommentTableRow> = [
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => {
                return a.name.localeCompare(b.name)
            }
        },
        {
            title: 'Comment Text',
            dataIndex: 'comment',
            key: 'comment',
            sorter: (a, b) => {
                if (a.comment.length === b.comment.length) {
                    return a.comment.localeCompare(b.comment)
                }
                return a.comment.length - b.comment.length
            }
        },
        {
            title: 'Created At',
            dataIndex: 'created_at',
            key: 'created_at',
            sorter: (a, b) => {
                const a_created_at = new Date(a.created_at)
                const b_created_at = new Date(b.created_at)
                if (a_created_at.getFullYear() - b_created_at.getFullYear() === 0) {
                    if (a_created_at.getMonth() - b_created_at.getFullYear() === 0) {
                        if (a_created_at.getDate() - b_created_at.getDate() === 0) {
                            if (a_created_at.getHours() - b_created_at.getHours() === 0) {
                                if (a_created_at.getMinutes() - b_created_at.getMinutes() === 0) {
                                    if (a_created_at.getSeconds() - b_created_at.getSeconds() === 0) {
                                        return a_created_at.getMilliseconds() - b_created_at.getMilliseconds()
                                    }
                                    return a_created_at.getSeconds() - b_created_at.getSeconds()
                                }
                                return a_created_at.getMinutes() - b_created_at.getMinutes()
                            }
                            return a_created_at.getHours() - b_created_at.getHours()
                        }
                        return a_created_at.getDate() - b_created_at.getDate()
                    }
                    return a_created_at.getFullYear() - b_created_at.getFullYear()
                }
                return a_created_at.getFullYear() - b_created_at.getFullYear()
            }
        },
        {
            title: 'Edited At',
            dataIndex: 'edited_at',
            key: 'edited_at',
            sorter: (a, b) => {
                if (!a.edited_at && !b.edited_at) {
                    return 0
                } else if (!a.edited_at) {
                    return -1
                } else if (!b.edited_at) {
                    return 1
                }
                const a_edited_at = new Date(a.edited_at)
                const b_edited_at = new Date(b.edited_at)
                if (a_edited_at.getFullYear() - b_edited_at.getFullYear() === 0) {
                    if (a_edited_at.getMonth() - b_edited_at.getFullYear() === 0) {
                        if (a_edited_at.getDate() - b_edited_at.getDate() === 0) {
                            if (a_edited_at.getHours() - b_edited_at.getHours() === 0) {
                                if (a_edited_at.getMinutes() - b_edited_at.getMinutes() === 0) {
                                    if (a_edited_at.getSeconds() - b_edited_at.getSeconds() === 0) {
                                        return a_edited_at.getMilliseconds() - b_edited_at.getMilliseconds()
                                    }
                                    return a_edited_at.getSeconds() - b_edited_at.getSeconds()
                                }
                                return a_edited_at.getMinutes() - b_edited_at.getMinutes()
                            }
                            return a_edited_at.getHours() - b_edited_at.getHours()
                        }
                        return a_edited_at.getDate() - b_edited_at.getDate()
                    }
                    return a_edited_at.getFullYear() - b_edited_at.getFullYear()
                }
                return a_edited_at.getFullYear() - b_edited_at.getFullYear()
            }
        }
    ]
    const data: SubmissionCommentTableRow[] = []

    submission.submission_comments.map((submission_comment) => {
        data.push({
            key: `submission-${submission.id}-comment-${submission_comment.id}-table_entry`,
            name: submission_comment.author_name,
            comment: submission_comment.comment,
            created_at: submission_comment.created_at.toDateString(),
            edited_at: submission_comment.edited_at?.toDateString()
        })
    })

    return <Table<SubmissionCommentTableRow> columns={submission_comment_columns} dataSource={data} pagination={false} />
}

export default SubmissionCommentTable