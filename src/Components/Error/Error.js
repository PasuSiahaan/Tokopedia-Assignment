/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

//css 
import { errorText } from './ErrorEmotion'; 


const Error = (props) => {
    return (
        <div>
            <h3 css={errorText}>{props.error}</h3>
        </div>
    )
}

export default Error;