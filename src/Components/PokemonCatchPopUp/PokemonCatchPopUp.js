import { Fragment, useState } from 'react'
import Modal from 'react-awesome-modal';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

// emotion css
import { catchButtonDivCSS,failPopUpDivCSS } from './PokemonCatchPopUpEmotion'

import { pushPokemonToFirebase, isNameDouble } from '../../FirebaseDatabaseSetting/Action';


const PokemonCatchPopUp = (props) => {
    const [popupCatchForm,setPopupCatchForm] = useState(false)
    const [popupCatchFailed,setPopupCatchFailed] = useState(false)
    const [pokemonName, setPokemonName] = useState("")
    const [status, setStatus] = useState("")

    function tryToCatch() {
        let a = Math.floor(Math.random()*2)
        if(a) {
            setPopupCatchForm(true)
        }
        else {
            setPopupCatchFailed(true)
        }

    }

    function handlePokemonNameChange(event) {
        setPokemonName(event.target.value)
    }

    function submitForm() {
        setStatus('')
        if(pokemonName===""){
            setStatus('please insert your pokemon name')
        }
        else if(isNameDouble(props.name, pokemonName)){
            setStatus('there is '+props.name + ' with that name in your own pokemon')
        }
        else{
            let data = {
                pokemonName:props.name,
                myPokemonName:pokemonName,
                imageUrl: props.imageUrl
            }
            pushPokemonToFirebase(data)
            setPopupCatchForm(false)
        }
    }

    return (
        <Fragment>
            <div css={catchButtonDivCSS}>
                <button onClick={tryToCatch}>Catch</button>
            </div>
            <div>
            <Modal 
                    visible={popupCatchForm}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={()=>{setPopupCatchForm(false)}}
                >
                    <div className="pokemon-form">
                        <h1 className="text-center">Success</h1>
                        <h3 className="description">Please enter your pokemon name</h3>
                        <div className="row">
                            <input type="text" name="pokemon-name" className="pokemon-input" placeholder="pokemon name" value={pokemonName} onChange={handlePokemonNameChange}></input>
                            <small className="small-text">{status}</small>
                        </div>
                        <div className="button-submit-div">
                            <button className="btn-submit" onClick={submitForm}>Submit</button>
                        </div>
                    </div>
                </Modal>
                <Modal 
                    visible={popupCatchFailed}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={()=>{setPopupCatchFailed(false)}}
                >
                    <div css={failPopUpDivCSS} onClick={()=>{setPopupCatchFailed(false)}}>
                        <div className="failed-popup">
                            <h1>Failed</h1>
                            <div >
                                <p>You failed to catch this pokemon</p>
                                <p>Please try again</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </Fragment>
    )
}

export default PokemonCatchPopUp;