import { Card, CardContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import InfoBox from './InfoBox';
import Map from './Map'
import Table from './Table';
import { sortData } from './util'
function App() {
  // * for getting list of country names with their iso codes
  const [countries, setCountries] = useState([]);
  // *useful for showing selected value on select input
  const [country, setCountry] = useState('worldwide');
  // *used for putting a country statistics when clicked from the select input
  const [countryStats, setCountryStats] = useState();
  // *for the table
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all').then(response => response.json()).then(data => {
      setCountryStats(data)
    });
  }, [])


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
      const sortedData = sortData(data);
      setTableData(sortedData);
      setCountries(countriesFromApi);
    }
    getCountries();
  }, [])

  return (
    <div className="app">
      <div className="app__left">

        <Header country={country} countries={countries} setCountry={setCountry} setCountryStats={setCountryStats} />
        <div className="app__stats">

          <InfoBox title='Coronavirus Cases' newCases={countryStats?.todayCases} totalCases={countryStats?.cases} />
          <InfoBox title='Recovered' newCases={countryStats?.todayRecovered} totalCases={countryStats?.recovered} />
          <InfoBox title='Deaths' newCases={countryStats?.todayDeaths} totalCases={countryStats?.deaths} />
        </div>
        <Map />
      </div>
      {/* * contains table and chart */}
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new Cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
