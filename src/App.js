import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import "./App.css";

import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Form from "./Components/Form";
import Confirm from "./Components/Confirm";
import schema from "./Validation/Schema";

const formInitialValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  bacon: false,
  mushroom: false,
  onion: false,
  ["green-pepper"]: false,
  ["special-text"]: ""
}

const errorsInitialValues = {
  name: "",
  size: "",
  ["special-text"]: ""
}



const App = () => {
  const [form, setForm] = useState(formInitialValues);
  const [errors, setErrors] = useState(errorsInitialValues);
  const [serverRes, setServerRes] = useState("");

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(res => setErrors({...errors, [name]: ""}))
      .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const formChange = (name, value) => {
    validate(name, value);
    setForm({...form, [name]: value});
  }

  const submitForm = () => {
    const order = {
      name: form.name.trim(),
      size: form.size.trim(),
      toppings: ["pepperoni", "sausage", "bacon", "mushroom", "onion", "green-pepper"].filter(each => form[each]),
      ["special-text"]: form["special-text"].trim()
    }
    
    
    axios.post("https://reqres.in/api/orders", order)
      .then(res => setServerRes(res))
      .catch(err => console.log(err))

    setForm(formInitialValues);
  }


  return (
    <>
      <Header />
      <Switch>
        <Route path="/confirm">
          <Confirm />
        </Route>
        <Route path="/pizza">
          <Form
            form={form}
            formChange={formChange}
            submitForm={submitForm}
            errors={errors}
            serverRes={serverRes}
          />
        </Route>
        <Route  path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
