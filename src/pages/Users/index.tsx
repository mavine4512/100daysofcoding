import React,{ useEffect,  useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import useStyles from './style';
import { Users as IPeople } from '../../interface/Types/Users';
import { getUsers } from "../../features/actionCreator";
import { selectList } from "../../features/usersSlice";

const Users=():JSX.Element => {
    const { topHeaders,items,testLoading } = useStyles();
    const dispatch = useDispatch()
    const users = useSelector(selectList)

    const [loading,setLoading] = useState( true)

    useEffect(()=>{
        dispatch(getUsers())
        setLoading(false);

    },[dispatch])

    return (
        <div className="App" data-testid="table">
            <TableContainer data-testid="table" component={Paper}>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow >
                            <TableCell className={topHeaders}>Name</TableCell>
                            <TableCell className={topHeaders} align="left">Address of city</TableCell>
                            <TableCell className={topHeaders} align="left">Address street</TableCell>
                            <TableCell className={topHeaders} align="left">Email</TableCell>
                            <TableCell className={topHeaders} align="left">Phone</TableCell>
                            <TableCell className={topHeaders} align="left">Company Name</TableCell>
                            <TableCell className={topHeaders} align="left">Website</TableCell>
                            <TableCell className={topHeaders} align="left">Phrase</TableCell>
                        </TableRow>
                    </TableHead>
                    { loading ? <p className={testLoading}> Loading... </p> :
                        <TableBody  data-testid="users">

                            {users.map((user:IPeople, index:number) => {
                                return(
                                    <TableRow key={index} >
                                        <TableCell className={items} align="left">{user.name}</TableCell>
                                        <TableCell className={items} align="left">{user.address.city}</TableCell>
                                        <TableCell className={items} align="left">{user.address.street}</TableCell>
                                        <TableCell className={items} align="left">{user.email}</TableCell>
                                        <TableCell className={items} align="left">{user.phone}</TableCell>
                                        <TableCell className={items} align="left">{user.company.name}</TableCell>
                                        <TableCell className={items} align="left">{user.website}</TableCell>
                                        <TableCell className={items} align="left">{user.company.catchPhrase}</TableCell>
                                    </TableRow >

                                )})}

                        </TableBody>}
                </Table>
            </TableContainer>
        </div>
    );
}

export default Users;
