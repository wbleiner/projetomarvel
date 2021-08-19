import React from 'react'
import { useParams } from 'react-router-dom';

const Teste = () => {
    const { id } = useParams()
    return(
        <div>
            <h2>{id}</h2>
        </div>
    )
}
export default Teste