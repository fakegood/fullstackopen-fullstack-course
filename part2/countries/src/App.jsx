import {useEffect, useMemo, useState} from "react";
import countryService from "./services/CountryService";
import Search from "./components/Search";

const App = () => {

    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState(null);

    const searchPattern = (country) => {
        if (search === '') {
            return false;
        }

        return !!(country.name.common.toLowerCase().includes(search.toLowerCase()) ||
            country.name.official.toLowerCase().includes(search.toLowerCase()));
    }

    const filteredCountries = useMemo(() => {
        if (!countries || countries.length === 0) return [];

        return countries.filter(searchPattern)
    }, [search]);


    useEffect(() => {
        countryService.getAll().then(res => {
            setCountries(res)
        })
    }, [])

    if (countries === null)
        return <div>Loading...</div>;

    return (
        <div>
            Find: <input onChange={e => setSearch(e.target.value)} placeholder="Enter Country"/>
            <Search result={filteredCountries}/>
        </div>
    )
}

export default App