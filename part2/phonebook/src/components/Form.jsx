const Form = (props) => {
    const {nameInput, numberInput, onNameChanged, onNumberChanged, addName} = props;

    return (
        <form onSubmit={(e) => addName(e)}>
            <div>
                Name: <input value={nameInput} onChange={(e) => onNameChanged(e)}/>
            </div>
            <div>
                Number: <input value={numberInput} onChange={(e) => onNumberChanged(e)}/>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default Form