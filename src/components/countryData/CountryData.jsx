const CountryData = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  return (
    <div>
      <h4>Country Data</h4>
      <p>
        <small>Country: {country.name.common}</small>
      </p>
    </div>
  );
};

export default CountryData;
