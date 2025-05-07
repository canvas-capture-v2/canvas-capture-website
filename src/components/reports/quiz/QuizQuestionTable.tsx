import {Table, TableColumnsType} from "antd";
import {QuizSubmissionQuestion} from "./QuizTypes.ts";

type QuizQuestionTableProps = {
    quiz_submission_questions: QuizSubmissionQuestion[]
}

interface QuizQuestionTableRow {

}

const QuizQuestionTable = (props: QuizQuestionTableProps) => {
    const {quiz_submission_questions} = props

    const quiz_quiz_columns: TableColumnsType<QuizQuestionTableRow> = []
    const data: QuizQuestionTableRow[] = []

    quiz_submission_questions.map(() => {
        data.push({

        })
    })

    const summary = (data: readonly QuizQuestionTableRow[]) => {
        data.map((quiz_submission_question) => {
            quiz_submission_question
        })

        return (
            <Table.Summary.Row>
                <Table.Summary.Cell index={0}></Table.Summary.Cell>
            </Table.Summary.Row>
        )
    }

    return <Table<QuizQuestionTableRow> columns={quiz_quiz_columns} dataSource={data} summary={summary} pagination={false} />
}

export default QuizQuestionTable