import * as api from "../api/api";
import React from "react";

const loginAction = (body) => async (dispatch) => {
  console.log(body);
  await api
    .Loggin(body)
    .then((element) =>
      element.json().then((data) => {
        const { body } = data;
        const { message } = data;

        console.log(body);
        if (body) {
          dispatch({ type: "loggin", payload: data });
        } else {
          console.log(message);
        }
      })
    )
    .catch((er) => console.log(er));
};

const logOut = (body) => async (dispatch) => {
  dispatch({ type: "logout", payload: "" });
};

const registeremp = (body) => async (dispatch) => {
  try {
    await api.regapi(body).then((el) => {
      el.json().then((ell) => {
        dispatch({ type: "registration", payload: ell });
      });
    });
  } catch (error) {
    alert(error);
    console.log("inodgnigsdop");
  }
};

const getAllemp = () => async (dispatch) => {
  try {
    await api
      .getemp()
      .then((el) =>
        el.json().then((el) => dispatch({ type: "allEmp", payload: el }))
      );
  } catch (error) {
    console.log(error.message);
  }
};

///////////////////////////////////////////////////////////////////////////////////////////

const apdateemploye = (id, body) => async (dispatch) => {
  try {
    await api.updateEmp(id, body).then((el) => {
      el.json().then((ell) => {
        dispatch({ type: "updatedEmp", payload: ell });
      });
    });
  } catch (error) {}
};
//////////////////////////////////////////////////////////////////////
const deleteemploye = (id) => async (dispatch) => {
  try {
    await api
      .deletedEmp(id)
      .then((el) => el.json().then((el) => console.log(el)));
    dispatch({ type: "Deleteemp", payload: id });
  } catch (error) {
    console.log("err");
  }
};
const susbenedEmployee = (id) => async (dispatch) => {
  try {
    await api
      .susbendedEmp(id)
      .then((el) => el.json().then((el) => console.log(el)));
    dispatch({ type: "SusbendEmp", payload: id });
  } catch (error) {
    console.log("err");
  }
};

const locationAction = (body) => async (dispatch) => {
  try {
    await api
      .Locations(body)
      .then((el) => el.json().then((ell) => console.log(ell)))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error.message);
  }
};

const addworkHours = async (body) => {
  try {
    await api
      .addworkhours(body)
      .then((el) => el.json().then((ell) => console.log(ell)));
  } catch (error) {
    console.log(error);
  }
};

const getworkHours = () => async (dispatch) => {
  try {
    await api.getallworkhour().then((el) => {
      el.json().then((ell) => {
        dispatch({ type: "allworks", payload: ell });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

//////////// Lawyers ///////////////////////
const getAllLawyers = () => async (dispatch) => {
  try {
    await api
      .getAllLawyers()
      .then((el) =>
        el
          .json()
          .then((el) => dispatch({ type: "allLawyers", payload: el.data }))
      );
  } catch (error) {
    console.log(error.message);
  }
};
const deleteLawyer = (id) => async (dispatch) => {
  try {
    await api
      .deleteLawyer(id)
      .then((el) => el.json().then((el) => console.log(el)));
    dispatch({ type: "DeleteLawyer", payload: id });
  } catch (error) {
    console.log("err",error);
  }
};

export default {
  registeremp,
  loginAction,
  logOut,
  getAllemp,
  apdateemploye,
  deleteemploye,
  locationAction,
  addworkHours,
  getworkHours,
  getAllLawyers,
  deleteLawyer,
  susbenedEmployee,
};
