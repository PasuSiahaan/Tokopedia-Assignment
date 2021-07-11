import { render,screen } from "@testing-library/react";
import React from 'react'

import Loading from './Loading'

test('check if prop in Loading Component have half-circle.gif',() =>{
    render(<Loading/>)
    const loadingImage = screen.getByAltText('loading ...')
    expect(loadingImage.src).toContain('test-file-stub');
})