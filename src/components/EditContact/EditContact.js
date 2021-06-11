import React, { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/actions";

const EditContact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [pager, setPager] = useState("");
  const forEdit = useSelector((state) => state.editing);
  console.log(forEdit);
  const editContactHandler = useCallback(() => {
    const editingContact = {
      id: forEdit.id,
      name: name,
      lastname: lastname,
      age: age,
      pager: pager,
    };
    dispatch(editContact(editingContact));
    console.log(editingContact);
  }, [age, dispatch, forEdit.id, lastname, name, pager]);

  return (
    <div className="editContact">
      <form>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          defaultValue={forEdit.name}
        />
        <input
          type="text"
          onChange={(event) => setLastname(event.target.value)}
          placeholder={forEdit.lastname}
        />
        <input
          type="text"
          onChange={(event) => setAge(event.target.value)}
          placeholder={forEdit.age}
        />
        <input
          type="text"
          onChange={(event) => setPager(event.target.value)}
          placeholder={forEdit.pager}
        />

        <Button className="btn-dark " onClick={editContactHandler}>
          EDIT CONTACT
        </Button>
      </form>
    </div>
  );
};

export default EditContact;
