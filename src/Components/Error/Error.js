/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

//css 
import { errorText } from './ErrorEmotion'; 


const Error = (error) => {
    return (
        <div>
            <h3 css={errorText}>{error.error}</h3>
        </div>
    )
}

export default Error;