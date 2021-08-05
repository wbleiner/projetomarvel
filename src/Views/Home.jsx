import './Home.css'
import React, { useEffect, useState } from 'react'
import api from '../Services/api'
import Card from './../Components/Card';



const Home = props => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        api(`http://gateway.marvel.com/v1/public/characters`)
            .then(data => {
                setCharacters(data.data.data.results);
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="Home">
            {characters.map(character => {

                return <div key= {character.id}>
                    <Card name = {character?.name??""} image = {`${character?.thumbnail?.path ?? ""}/portrait_uncanny.${character?.thumbnail?.extension ?? ""}`}/>
                </div>
            })}
        </div>
    )
}
export default Home

