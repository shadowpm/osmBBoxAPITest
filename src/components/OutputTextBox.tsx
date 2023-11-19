interface Props {
    outputText?: string,
}

function OutputTextBox({ outputText }: Props): JSX.Element {
    return <div className="json-box">{outputText}</div>
}

export default OutputTextBox;