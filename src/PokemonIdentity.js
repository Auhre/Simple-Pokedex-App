import PokemonTypes from "./PokemonTypes"
import PokemonAbilities from "./PokemonAbilities"
import PokemonStats from "./PokemonStats"
import { useLocation, useNavigate } from "react-router-dom"
function PokemonIdentity(){
    const location = useLocation()
    const navigate = useNavigate()
    const { name, types, abilities, sprites, stats } = location.state
    const pokemonTypes = types.map(type => {
        return <PokemonTypes 
                key={type.slot}
                typeName={type.type.name}
                />
    })
    const pokemonAbilities = abilities.map(ability => {
        return <PokemonAbilities 
                key={ability.slot}
                abilityName={ability.ability.name}
                />
    })
    const pokemonStats = stats.map(stat => {
        return <PokemonStats 
                key={stat.stat.name}
                statScale={stat.base_stat}
                statName={stat.stat.name}
                />
    })
    document.title="Pokemon Page"
    return(
        <>
            <div className="bg-black w-10/12 mx-auto p-2 mt-12 overflow-hidden rounded-xl shadow-2xl">
               <div>
                    <div className="flex md-flex-col">
                        <img src={sprites.front_default} 
                            className="w-3/12 h-80 rounded-md md-profile-blocks-res"
                            alt="sprite"/>
                        <div className="bg-white w-9/12 p-20 md-info-blocks-res rounded-md">
                            <p className="text-3xl font-bold tracking-tighter md-center-text mb-1">Name: {name.charAt(0).toUpperCase()+name.slice(1)}</p>
                            <p className="text-xl font-medium tracking-tighter md-center-text mb-1">Type: {pokemonTypes}</p>
                            <p className="text-xl font-medium tracking-tighter md-center-text mb-1">Abilities: {pokemonAbilities} </p>
                        </div>
                    </div>
               </div>
               <div className="bg-transparent w-full">
                    <div className="w-3/12 bg-white p-4 md-info-semiblock-res rounded-md">
                        <p className="text-xl font-medium tracking-tighter md-center-text">Stats:</p>
                        {pokemonStats}
                    </div>
               </div>
            </div>
            <button onClick={() => {navigate('/')}}className="mb-2 bg-black text-white p-2 px-10 rounded-md mx-10 mt-8">Back</button>
        </>
    )
}
export default PokemonIdentity