import logo from '../../Asset/half-circle.gif'

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import { loadingImage } from './LoadingEmotion'

const Loading = () => {
    return (
        <div css={loadingImage}>
            <img src={logo} alt="loading ..."/>
        </div>
    )
}

export default Loading;