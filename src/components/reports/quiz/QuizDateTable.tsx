import {Table, TableColumnsType} from "antd";
import {QuizSubmission} from "./QuizTypes.ts";

type QuizDateTableProps = {
    quiz_submissions: QuizSubmission[]
}

interface QuizDateTableRow {

}

const QuizDateTable = (props: QuizDateTableProps) => {
    const {quiz_submissions} = props

    const quiz_date_columns: TableColumnsType<QuizDateTableRow> = []
    const data: QuizDateTableRow[] = []

    quiz_submissions.map(() => {
        data.push({

        })
    })

    const summary = (data: readonly QuizDateTableRow[]) => {
        data.map((quiz_submission) => {
            quiz_submission
        })

        return (
            <Table.Summary.Row>
                <Table.Summary.Cell index={0}></Table.Summary.Cell>
            </Table.Summary.Row>
        )
    }

    return <Table<QuizDateTableRow> columns={quiz_date_columns} dataSource={data} summary={summary} pagination={false} />
}

export default QuizDateTable