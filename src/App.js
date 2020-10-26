import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import InfoBox from './InfoBox';

function App() {
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

  return (
    <div className="app">
      <Header country={country} countries={countries} setCountry={setCountry} setCountryStats={setCountryStats} />
      <div className="app__stats">

        <InfoBox title='Coronavirus Cases' newCases />
        <InfoBox title='Recovered' />
        <InfoBox title='Deaths' />
      </div>
    </div>
  );
}

export default App;
