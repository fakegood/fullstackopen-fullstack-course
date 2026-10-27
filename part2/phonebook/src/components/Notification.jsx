const Notification = (props) => {
    const {message, type} = props;
    if (message === null || message === '') {
        return null
    }

    const finalType = 'notification '.concat(type);

    return (
        <div className={finalType}>
            {message}
        </div>
    )
}

export default Notification