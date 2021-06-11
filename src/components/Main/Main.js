import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";
import MainTable from "../Table";
import "./styles.css";
import { Button } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import AddContact from "../AddContact/AddContact";
import EditContact from "../EditContact/EditContact";

const Main = () => {
  const dispatch = useDispatch();
  const getDataHandler = useCallback(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const people = useSelector((state) => state.users);
  return (
    <div className="main-container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <MainTable rows={people} />
          <Button className="btn-dark" onClick={getDataHandler}>
            GET DATA
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <AddContact id={people.length + 1} />
          <EditContact />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
