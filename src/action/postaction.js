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

const getSusbendedLawyers = () => async (dispatch) => {
  try {
    await api
      .getSusbendedLawyer()
      .then((el) =>
        el
          .json()
          .then((el) => dispatch({ type: "allLawyers", payload: el.data }))
      );
  } catch (error) {
    console.log(error.message);
  }
};

const getNotVerifiedLawyer = () => async (dispatch) => {
  try {
    await api
      .getNotVerifiedLawyer()
      .then((el) =>
        el
          .json()
          .then((el) => dispatch({ type: "allLawyers", payload: el.data }))
      );
  } catch (error) {
    console.log(error.message);
  }
};

const acceptLawyer = (id) => async (dispatch) => {
  try {
    await api
      .AcceptLawyer(id)
      .then((el) => el.json().then((el) => console.log(el,"acceptLawyer")));
    dispatch({ type: "DeleteLawyer", payload: id });
  } catch (error) {
    console.log("err",error);
  }
};

const rejectLawyer = (id) => async (dispatch) => {
  try {
    await api
      .RejectLawyer(id)
      .then((el) => el.json().then((el) => console.log(el)));
    dispatch({ type: "DeleteLawyer", payload: id });
  } catch (error) {
    console.log("err",error);
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

const susbendLawyer = (id) => async (dispatch) => {
  try {
    await api
      .susbendeLawyer(id)
      .then((el) => el.json().then((el) => console.log(el)));
    // dispatch({ type: "DeleteLawyer", payload: id });
  } catch (error) {
    console.log("err",error);
  }
};
const unSusbendLawyer = (id) => async (dispatch) => {
  try {
    await api
      .unSusbendeLawyer(id)
      .then((el) => el.json().then((el) => console.log(el)));
    dispatch({ type: "DeleteLawyer", payload: id });
  } catch (error) {
    console.log("err",error);
  }
};


//////////// Citizen ///////////////////////

const getAllCitizen = () => async (dispatch) => {
  try {
    await api
      .getCitizen()
      .then((el) =>
        el.json().then((el) => dispatch({ type: "allCitizen", payload: el }))
      );
  } catch (error) {
    console.log(error.message);
  }
};


//////////// Locations ///////////////////////

const getLocaions = (serchkey) => async (dispatch) => {
  try {
    await api
      .getLocation(serchkey)
      .then((el) =>
        el.json().then((el) => dispatch({ type: "allLocations", payload: el.body }))
      );
  } catch (error) {
    console.log(error.message);
  }
};


const getAllLocaions = () => async (dispatch) => {
  try {
    await api
      .getAllLocation()
      .then((el) =>
        el.json().then((el) => dispatch({ type: "allLocations", payload: el.body }))
       
      );
  } catch (error) {
    console.log(error.message);
  }
};
const updateLocation = (id, body) => async (dispatch) => {
  console.log(body,"bbbbbbbb")
  try {
    await api.updateLocation(id, body).then((el) => {
      el.json().then((ell) => {
        // dispatch({ type: "updateLocation", payload: ell });
        console.log(ell)
      });
    });
  } catch (error) {}
};

const deleteLocation = (id) => async (dispatch) => {
  try {
    await api
      .deleteLocation(id)
      .then((el) => el.json().then((el) => console.log(el)));
    dispatch({ type: "deleteLocation", payload: id });
  } catch (error) {
    console.log("err");
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
  getAllCitizen,
  getLocaions,
  getAllLocaions,
  getSusbendedLawyers,
  getNotVerifiedLawyer,
  acceptLawyer,
  rejectLawyer,
  susbendLawyer,
  unSusbendLawyer,
  updateLocation,
  deleteLocation
};
