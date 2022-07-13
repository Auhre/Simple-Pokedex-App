import PokemonButton from "./PokemonButton"
function HomePage(props){
    const pokemonColumn = props.list.map(data => {
        return <PokemonButton key={data.id}
                data={data.pokemonName}/>
      })
    return(
        <>
            <div className="mt-12 flex-col w-11/12 mx-auto bg-slate-200 rounded-xl h-auto p-1 py-10">
                {pokemonColumn}
            </div>
        </>
    )
}
export default HomePage