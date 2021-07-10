import firebaseDB from './Config'


export function pushPokemonToFirebase(data) {
    firebaseDB.child('pokemon').push(
        data,
        err=>{
            if(err){
                console.log(err)
            }
        }
    )

    //update pokemon count
    let pokemonCount = 0;
    firebaseDB.child('count/'+data.pokemonName).once('value',snapshot =>{
        if(snapshot.val()){
            pokemonCount = snapshot.val()
        }
        pokemonCount += 1;
        firebaseDB.child('count/'+data.pokemonName).set(
            pokemonCount
        )
    })
    
    
}

export function deleteMyPokemon(id,pokemonName) {
    firebaseDB.child('pokemon/'+id).remove()
    let pokemonCount = 0
    firebaseDB.child('count/'+pokemonName).once('value',snapshot => {
        if(snapshot.val()){
            pokemonCount = snapshot.val()
            pokemonCount -= 1
        }
        firebaseDB.child('count/'+pokemonName).set(pokemonCount)
    })
}