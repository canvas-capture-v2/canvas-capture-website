import {Typography} from "antd";
const {Link, Text} = Typography

type JumpLinksProps = {
    descriptionLink: string
    lowLink: string
    medianLink: string
    highLink: string
}

const JumpLinks = (props: JumpLinksProps) => {
    const {descriptionLink, lowLink, medianLink, highLink} = props

    return (
        <div>
            <span>
                <Text strong={true}>Jump to: </Text>
                <Link href={descriptionLink}>Description</Link>
                <Text> | </Text>
                <Link href={lowLink}>Low</Link>
                <Text> | </Text>
                <Link href={medianLink}>Median</Link>
                <Text> | </Text>
                <Link href={highLink}>High</Link>
            </span>
        </div>
    )
}

export default JumpLinks