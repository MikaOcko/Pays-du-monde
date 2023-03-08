import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [selectedRadio, setSelectedRadio] = useState("");

    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        // Axios transforme le fichier JSON en un objet directement exploitable (une étape en moins qu'avec le fetch)
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className="countries">
            <ul className="radio-container">
                <input
                    type="range"
                    min="1" max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />

                {radios.map((continent) => (
                    <li>
                        <input
                            type="radio" id={continent}
                            name="continentRadio"
                            checked={continent === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.id)}
                        />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>

            {selectedRadio && (<button onClick={() => setSelectedRadio("")}> Annuler la recherche</button >)
            }
            {/* si selectedRadio est alors le bouton "Annuler la recherche" apparaît */}

            <ul>
                {
                    data
                        .filter((country) => country.continents[0].includes(selectedRadio))
                        .sort((a, b) => b.population - a.population) //tri décroissant des pays par la population
                        .slice(0, rangeValue)
                        .map((country, index) => (
                            <Card key={index} country={country} />
                        ))
                }
                {/* <li key={index}>{country.translations.fra.common}</li> */}
                {/* Attribution d'une clé unique pour chaque item de la liste : "country.name.common" cela fonctionne, ou "index" pour éviter de chercher */}
            </ul>
        </div >
    );
};

export default Countries;