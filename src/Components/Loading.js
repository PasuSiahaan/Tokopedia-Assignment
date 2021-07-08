import logo from '../Asset/half-circle.gif'

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const loadingImage = css`
    text-align:center ;
`

const Loading = () => {
    return (
        <div css={loadingImage}>
            <img src={logo} alt="loading ..."/>
        </div>
    )
}

export default Loading;