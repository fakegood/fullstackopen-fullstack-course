const CountryDetail = (props) => {
    const {country} = props;
    
    return (
        <div>
            <h1>{country.name.official}</h1>
            <div>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>
            </div>
            <h2>Languages</h2>
            <ul>
                {Object.entries(country.languages).map(([key, value]) => <li key={key}>{value}</li>)}
            </ul>
            <h2>Flag</h2>
            <div>
                <img src={country.flags.png} alt={country.flags.alt}/>
            </div>
        </div>
    )
}

export default CountryDetail;