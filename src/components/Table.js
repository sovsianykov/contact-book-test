import React from 'react';
import {Table} from 'react-bootstrap'
import TableRow from "./TableRow";

const MainTable = ({rows}) => {
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Pager</th>
                    <th>del</th>
                    <th>edit</th>
                </tr>
                </thead>
                <tbody>
                {rows&&rows.map(row =>(<TableRow key={row.id} row={row}/>))}
                </tbody>
            </Table>

        </div>
    );
};

export default MainTable;