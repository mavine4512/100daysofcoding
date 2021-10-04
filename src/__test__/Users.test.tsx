import React from 'react';
import Users from "../pages/Users";
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import store from "../App/store";

it('renders correctly users', () => {
    const tree = renderer.create(<Provider store={store}>
        <Users /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});



