
import { render,screen } from "@testing-library/react";
import React from "react";

import Error from './Error'


test('check if prop in Error Component work',() =>{
    render(<Error error='error testing' />);
    const errorText = screen.getByText('error testing')
    expect(errorText).not.toBeNull();
})