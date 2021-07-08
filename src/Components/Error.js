/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const errorText = css`
    text-align: center;
`

const Error = (error) => {
    return (
        <div>
            <h3 css={errorText}>{error.error}</h3>
        </div>
    )
}

export default Error;