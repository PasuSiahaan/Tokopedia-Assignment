import { useState,Fragment } from 'react';
import Modal from 'react-awesome-modal';

//import emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { myPokemonDiv, deleteConfirmPopUp } from './MyPokemonEmotion';

//firebase action
import { deleteMyPokemon } from '../../FirebaseDatabaseSetting/Action';

const MyPokemon = (props) => {
    const [isDeleteConfirm,setIsDeleteConfirm] = useState(false)
    function deletePokemon (){
        //deleteMyPokemon(props.id,props.pokemonName)
        setIsDeleteConfirm(true)
    }
    return(
        <Fragment>
            <div css={myPokemonDiv}>
                <p className="pokemon-name">{props.pokemonName}</p>
                <img src={props.imageUrl} alt={props.pokemonName}/>
                <p className="pokemon-own">Name: "<span>{props.myPokemonName}</span>"</p>
                <button onClick={deletePokemon}>Delete</button>
            </div>
            <Modal 
                visible={isDeleteConfirm}
                width="250"
                height="150"
                effect="fadeInUp"
                onClickAway={()=>{setIsDeleteConfirm(false)}}
            >
                <div css={deleteConfirmPopUp}>
                    <div>
                        <h3>Are you sure to delete this pokemon?</h3>
                    </div>
                    <div className="yes-no-button">
                        <button className="yes-button" onClick={()=> {deleteMyPokemon(props.id,props.pokemonName)}}>Yes</button>
                        <button className="no-button" onClick={()=> {setIsDeleteConfirm(false)}}>No</button>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
}

export default MyPokemon;