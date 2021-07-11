/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import { loadingImage } from './LoadingEmotion'

import logo from '../../Assets/half-circle.gif'

const Loading = () => {
    return (
        <div css={loadingImage}>
            <img src={logo} alt="loading ..."/>
        </div>
    )
}

export default Loading;