function PokemonStats(props){
    return(
        <>
            <p className="md-center-text text-xl font-medium tracking-tighter text-blue-800">{props.statName.charAt(0).toUpperCase()+props.statName.slice(1)}: {props.statScale}</p>
        </>
    )
}
export default PokemonStats