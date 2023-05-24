/* eslint-disable import/no-anonymous-default-export */
const intailstate = {
    allLawyers: [],
};

export default (state = intailstate, action) => {
    switch (action.type) {
        case "allLawyers":
            console.log("allLawyers")
      console.log(action.payload)
     return { ...state, allLawyers: action.payload };
     case "DeleteLawyer":
      console.log(action.payload);
      const newLawyers = state.allLawyers.filter(
        (el) => el._id != action.payload
      );
      return { ...state, allLawyers: newLawyers };

     case "error":
      return state;

    default:
      return state;
  }
  // return state;

};