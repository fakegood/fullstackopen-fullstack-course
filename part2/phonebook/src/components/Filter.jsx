const Filter = (props) => {
    const {keyword, onChanged} = props;
    return (
        <div>
            Search:
            <input value={keyword} onChange={onChanged}/>
        </div>
    )
}

export default Filter;