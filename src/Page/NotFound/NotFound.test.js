import { render,screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import NotFound from './NotFound';

describe('Not Found Component',()=>{
    beforeEach(()=>{
        render(<MemoryRouter><NotFound /></MemoryRouter>)
    })

    test('have the right heading',()=>{
        const notFoundText = screen.getByText('404 - Not Found!')
        expect(notFoundText).toBeDefined()
    })
    test('have the right link',()=>{
        const homeLink = screen.getByText('Go Home')
        expect(homeLink).toBeDefined()
        expect(homeLink.href).toContain('/')
    })
})