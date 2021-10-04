import React from 'react';
import ReactDOM from 'react-dom';
import Transaction from "../pages/Transaction";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

it('renders correctly Transaction', ()=>{
    const  div =document.createElement('h5');
    ReactDOM.render(<Transaction/>, div);
    ReactDOM.unmountComponentAtNode(div)
    expect(div).toMatchSnapshot();

})

it('renders a message', ()=>{
    const {getByText,unmount} = render(<Transaction/>)
    expect(getByText('Welcome to Transaction')).toBeInTheDocument()

    unmount()
})
