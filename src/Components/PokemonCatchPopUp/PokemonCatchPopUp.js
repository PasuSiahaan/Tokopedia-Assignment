import { Fragment, useState } from 'react'
import Modal from 'react-awesome-modal';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

// emotion css
import { catchButtonDivCSS, failPopUpDivCSS, successPopUpDivCSS, successNotificationDiv } from './PokemonCatchPopUpEmotion'

//firebase action
import { pushPokemonToFirebase, isNameDouble } from '../../FirebaseDatabaseSetting/Action';


const PokemonCatchPopUp = (props) => {
    const [popupCatchForm,setPopupCatchForm] = useState(false)
    const [popupCatchFailed,setPopupCatchFailed] = useState(false)
    const [pokemonName, setPokemonName] = useState("")
    const [status, setStatus] = useState("")
    const [successNotification,setSuccessNotification] = useState(false)

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
        if(status!==""){
            setStatus("")
        }
    }

    function submitForm() {
        setStatus("")
        setPopupCatchForm(true)
        if(pokemonName===""){
            setStatus('Please insert your pokemon name')
        }
        else if(isNameDouble(props.name, pokemonName)){
            setStatus('There is '+props.name + ' with that name in your own pokemon')
        }
        else{
            let data = {
                pokemonName:props.name,
                myPokemonName:pokemonName,
                imageUrl: props.imageUrl
            }
            pushPokemonToFirebase(data)
            setPokemonName("")
            setPopupCatchForm(false)
            setSuccessNotification(true)
        }
    }

    function handleKeyDown(event) {
        if(event.key === 'Enter'){
            if(popupCatchForm){
                submitForm()
            }
            else{
                setPopupCatchFailed(false)
                setPopupCatchForm(false)
                setSuccessNotification(false)
            }
            
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
                    <div css={successPopUpDivCSS}>
                        <h1 className="text-center">Success</h1>
                        <h3 className="description">Please enter your pokemon name</h3>
                        <div className="form">
                            <div>
                                <label>Pokemon Name: </label>
                                <input type="text" value={pokemonName} onChange={handlePokemonNameChange} onKeyDown={handleKeyDown}/>
                            </div>
                            <div>
                                <small>{status}</small>
                            </div>
                            <div className="submitDiv">
                                <button onClick={submitForm}>Submit</button>
                            </div>
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
                                You failed to catch this pokemon
                            </div>
                            <div>
                                Please try again
                            </div>
                        </div>
                    </div>
                </Modal>
                <Modal 
                    visible={successNotification}
                    width="250"
                    height="150"
                    effect="fadeInUp"
                    onClickAway={()=>{setSuccessNotification(false)}}
                >
                    <div css={successNotificationDiv} onClick={()=>{setSuccessNotification(false)}}>
                        <div className="success-add-pokemon">
                            <div >
                                You have success add your pokemon
                            </div>
                            <div>
                                Click anywhere to continue
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </Fragment>
    )
}

export default PokemonCatchPopUp;