import React, {useCallback, useState} from 'react';
import { Button } from "react-bootstrap";
import './style.css'
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";

const AddContact = ({id}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')
    const [pager, setPager] = useState('')

   const addContactHandler = useCallback(()=>{
       const newContact = [{
           id : id ,
           name : name,
           lastname : lastname,
           age : age,
           pager : pager
       }] ;
       dispatch(addContact(newContact))
       console.log(newContact)
   },[age, dispatch, id, lastname, name, pager])

    return (
        <div className='addContact'>
            <form>
                <input type="text" onChange={event =>setName(event.target.value) }
                       placeholder='name'/>
                <input type="text" onChange={event =>setLastname(event.target.value) }
                       placeholder='last name'/>
                <input type="text" onChange={event =>setAge(event.target.value) }
                       placeholder='age'/>
                <input type="text" onChange={event =>setPager(event.target.value) }
                       placeholder='pager'/>
                <Button className='btn-dark ' onClick={addContactHandler}>ADD CONTACT</Button>
            </form>
        </div>
    );
};

export default AddContact;