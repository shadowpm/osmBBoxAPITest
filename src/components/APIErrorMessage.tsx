interface Props {
    erorMessage?: string,
}

function APIErrorMessage({ erorMessage }: Props): JSX.Element {
    return <div className="error-text">{erorMessage}</div>
}

export default APIErrorMessage;