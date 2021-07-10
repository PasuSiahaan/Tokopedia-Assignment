import { Link } from 'react-router-dom';

//import emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import { notFoundPageCSS } from './NotFoundEmotion';

const NotFound = () => (
  <div css={notFoundPageCSS}>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

export default NotFound;