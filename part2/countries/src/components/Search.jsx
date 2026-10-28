import CountryList from "./CountryList.jsx";
import CountryDetail from "./CountryDetail.jsx";

const Search = (props) => {
    const {result, onShowDetail} = props;

    if(result.length > 10){
        return (
            <>
                <p>Too many results. Please be more specific.</p>
            </>
        )
    }

    if(result.length === 1){
        return (
            <>
                <CountryDetail country={result[0]} />
            </>
        )
    }

    return (
        <>
            {result.map((country, index) => <CountryList key={index} country={country} onShowDetail={onShowDetail} />)}
        </>
    )
}

export default Search