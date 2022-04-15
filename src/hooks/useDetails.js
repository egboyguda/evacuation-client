import React, { useState, useContext } from "react";
import { Context as ApiContext } from "../context/apiContext";
import { Alert } from "react-native";
export default () => {
  const [open, setOpen] = useState(false);
  const { state } = useContext(ApiContext);
  const [evacuees, setEvacuees] = useState([]);

  const filter = (val) => {
    //onsole.log(val);
    //const filtered = state.evacuees.filter((evacuee) => evacuee.id === id);
    //setEvacuees(filtered[0]);
  };

  return [open, setOpen, evacuees, setEvacuees];
};
