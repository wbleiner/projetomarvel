import './Home.css'
import React, { useEffect, useState } from 'react'
import api from '../Services/api'
import Card from './../Components/Card';
import { Link } from 'react-router-dom';



const Home = props => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        api("http://gateway.marvel.com/v1/public/characters")
            .then(data => {
                setCharacters(data.data.data.results);
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="Home">
            {characters.map(character => {

                return (
                    <div key={character.id}>
                       <Link to = {`/character/${character.id}`}> <Card id={character.id} name={character?.name ?? ""} image={`${character?.thumbnail?.path ?? ""}/portrait_uncanny.${character?.thumbnail?.extension ?? ""}`} /></Link>
                    </div>
                )
            })}
        </div>
    )
}
export default Home

