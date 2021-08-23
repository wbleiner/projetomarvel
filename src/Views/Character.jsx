import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../Services/api'
import './Character.css'

const Character = props => {
    const { id } = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        api(`http://gateway.marvel.com/v1/public/characters/${id}`)
            .then(data => {
                setCharacter(data.data.data.results[0]);
            })
            .catch(err => console.log(err))
    }, [id])
    console.log(character);
    return (
        <div className ="Character">
            <div className="Profile">
                <img className="ImageProfile" src={`${character?.thumbnail?.path ?? ""}/standard_fantastic.${character?.thumbnail?.extension ?? ""}`} alt={character.name} />
                <h1 className="NameProfile">{character.name}</h1>
            </div>
            <div className="Description">
                <h1>Description</h1>
                <p>{character.description}</p>
            </div>
        </div>
    )
}

export default Character
