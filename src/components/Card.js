import React from 'react';

const Card = ({ country }) => {

    console.log(country);

    return (
        <li className="card">
            <img src={country.flags.svg} alt={"drapeau de " + country.translations.fra.common} />
            <div className="infos">
                <h3>{country.translations.fra.common}</h3>
                <h4>{country.capital}</h4>
                <p>Pop. {country.population.toLocaleString()}</p>
                {/* toLocaleString() pour séparer les milliers */}
            </div>
        </li>
    );
};

export default Card;