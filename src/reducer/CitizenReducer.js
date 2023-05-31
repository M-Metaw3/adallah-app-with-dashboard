/* eslint-disable import/no-anonymous-default-export */

const intailstate = {
    allCitizen: [],
};

export default (state = intailstate, action) => {
    switch (action.type) {
        case "allCitizen":
            console.log("allCitizen")
      console.log(action.payload)
     return { ...state, allCitizen: action.payload };
     case "DeleteCitizen":
      console.log(action.payload);
      const newCitizen = state.allCitizen.filter(
        (el) => el._id != action.payload
      );
      return { ...state, allCitizen: newCitizen };

     case "error":
      return state;

    default:
      return state;
  }
  // return state;

};