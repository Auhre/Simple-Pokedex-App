import axios from "axios"
import { useNavigate } from "react-router-dom"

function PokemonButton(props) {
    const navigate = useNavigate()
    function showPokemon(pokemonName){
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`).then(
            (res) => {
                navigate(`/pokemon/${pokemonName}`, { state: { name: res.data.name, 
                                                types: res.data.types, 
                                                abilities: res.data.abilities, 
                                                sprites: res.data.sprites,
                                                stats: res.data.stats }
                                             })
                
            }
        ).catch((err) => {console.log(err)})
    }
    return(
    <>
        <button onClick={() => {showPokemon(props.data)}} className="sm-button-wide bg-black text-white p-2 rounded-md w-2/12 mx-24 my-4"> {props.data} </button>
    </>
    )
}
export default PokemonButton