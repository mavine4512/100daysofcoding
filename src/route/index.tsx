import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import Users from '../pages/Users';
import Transactions from '../pages/Transaction';
import useStyles from './styles';

const route = [
    {
        path: '/',
        menu: 'Home',
    },
    {
        path: '/users',
        menu: 'Users',
    },
    {
        path: '/transactions',
        menu: 'Transactions',
    },
];

function RouteApp(): JSX.Element {
    const { root, menu, nav, switchContainer } = useStyles();

    return (
        <Router>
            <div className={root}>
                <nav className={nav}>
                    <ul className={menu}>
                        {route.map((r) => (
                            <li key={r.menu}>
                                <Link to={r.path}>{r.menu}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={switchContainer}>
                    <Switch>
                        <Route path="/users" component={Users} />
                        <Route path="/transactions" component={Transactions} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default RouteApp;
