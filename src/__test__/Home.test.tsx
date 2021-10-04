import React from 'react';
import ReactDOM from 'react-dom';
import Home from "../pages/Home";
import {render} from "@testing-library/react";

it('renders correctly home', ()=>{
    const  div =document.createElement('h5');
    ReactDOM.render(<Home/>, div);
    ReactDOM.unmountComponentAtNode(div)
    expect(div).toMatchSnapshot();

})

it('renders Welcome message', ()=>{
    const {getByText,unmount} = render(<Home/>)
    expect(getByText('Welcome to react test system')).toBeInTheDocument()

    unmount()
})
