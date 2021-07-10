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

export function isNameDouble (pokemonName,myPokemonName) {
    let isDouble = false
    firebaseDB.child('pokemon').once('value',snapshot => {
        let pokemonObjects = {}
        if(snapshot.val()){
            pokemonObjects = snapshot.val()
        }
        Object.keys(pokemonObjects).forEach(id => {
            if( (pokemonObjects[id].pokemonName === pokemonName) && (pokemonObjects[id].myPokemonName === myPokemonName) ) {
                isDouble = true
            }
        })
    })
    return isDouble
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