/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

import { MoveCSS } from "./PokemonMoveEmotion";

const PokemonMove = (props) => {
    return(
        <div css={MoveCSS}>
            {props.move}
        </div>
    )
}
export default PokemonMove;