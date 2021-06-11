import React, {useCallback} from 'react';
import {Button} from "react-bootstrap";
import {GridCloseIcon} from "@material-ui/data-grid";
import {useDispatch} from "react-redux";
import {delContact, editingId} from "../redux/actions";

const TableRow = ({row}) => {
    const dispatch = useDispatch()

    const deleteHandler = useCallback(() =>{
        dispatch(delContact(row.id))
    },[dispatch, row.id])
    const editIdHandler = useCallback(() =>{
        dispatch(editingId(row))
    },[dispatch, row])
    return (
        <>
            <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.lastname}</td>
                <td>{row.age}</td>
                <td>{row.pager}</td>
                <td><GridCloseIcon className='delete' onClick={deleteHandler}/></td>
                <td><Button className='btn-dark' onClick={editIdHandler}  >edit</Button></td>
            </tr>

        </>
    );
};

export default TableRow;