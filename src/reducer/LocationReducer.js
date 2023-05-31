/* eslint-disable import/no-anonymous-default-export */

const intailstate = {
    allLocations: [],
};

export default (state = intailstate, action) => {
    switch (action.type) {
        case "allLocations":
            console.log("allLocations")
      console.log(action.payload)
     return { ...state, allLocations: action.payload };
     case "DeleteLocation":
      console.log(action.payload);
      const newLocations = state.allLocations.filter(
        (el) => el._id != action.payload
      );
      return { ...state, allLocations: newLocations };

     case "error":
      return state;

    default:
      return state;
  }
  // return state;

};