const CountryList = props => {
    const {country, onShowDetail} = props;

return (
    <div>
        <button onClick={() => onShowDetail(country)}>View</button>
        <span>{country.name.official}</span>
    </div>
)
}

export default CountryList;