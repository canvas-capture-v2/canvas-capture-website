import {Table, TableColumnsType} from "antd";
import {QuizSubmission} from "./QuizTypes.ts";

type QuizGradeTableProps = {
    quiz_submissions: QuizSubmission[]
}

interface QuizGradeTableRow {

}

const QuizGradeTable = (props: QuizGradeTableProps) => {
    const {quiz_submissions} = props

    const quiz_grade_columns: TableColumnsType<QuizGradeTableRow> = []
    const data: QuizGradeTableRow[] = []

    quiz_submissions.map(() => {
        data.push({

        })
    })

    const summary = (data: readonly QuizGradeTableRow[]) => {
        data.map((quiz_submission) => {
            quiz_submission
        })

        return (
            <Table.Summary.Row>
                <Table.Summary.Cell index={0}></Table.Summary.Cell>
            </Table.Summary.Row>
        )
    }

    return <Table<QuizGradeTableRow> columns={quiz_grade_columns} dataSource={data} summary={summary} pagination={false} />
}

export default QuizGradeTable