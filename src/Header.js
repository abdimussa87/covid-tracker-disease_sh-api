import React, { useEffect, useState } from 'react'
import './Header.css'
import { FormControl, Select, MenuItem } from '@material-ui/core';
function Header() {
    // * for getting list of country names with their iso codes
    const [countries, setCountries] = useState([]);
    // *useful for showing selected value on select input
    const [country, setCountry] = useState('worldwide');
    // *used for putting a country statistics when clicked from the select input
    const [countryStats, setCountryStats] = useState();
    useEffect(() => {
        const getCountries = async () => {
            const response = await fetch('https://disease.sh/v3/covid-19/countries');
            const data = await response.json();
            const countriesFromApi = data.map(country => (
                {
                    id: country.countryInfo._id,
                    name: country.country,
                    value: country.countryInfo.iso2
                }
            ));

            setCountries(countriesFromApi);
        }
        getCountries();
    }, [])

    const handleOnCountryChange = async (event) => {
        const countryCode = event.target.value;
        // *useful for showing selected value on select input
        setCountry(countryCode);
        const url = countryCode === 'worldwide' ? 'disease.sh/v3/covid-19/all' : `disease.sh/v3/covid-19/countries/${countryCode}`;
        const response = await fetch(url);
        const data = await response.json();
        setCountryStats(data);
    }
    return (
        <div className='header'>
            <h3>COVID-19 TRACKER</h3>
            <FormControl>
                <Select variant='outlined' value={country} onChange={handleOnCountryChange}>

                    <MenuItem value='worldwide'>Worldwide</MenuItem>
                    {countries.map(country => <MenuItem value={country.value}>{country.name}</MenuItem>
                    )}

                </Select>
            </FormControl>

        </div>
    )
}

export default Header
