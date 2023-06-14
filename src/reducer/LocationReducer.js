/* eslint-disable import/no-anonymous-default-export */

const intailstate = {
    allLocations: [],
};

export default (state = intailstate, action) => {
  let newLocations=""
    switch (action.type) {
        case "allLocations":
            console.log("allLocations")
      console.log(action.payload)
     return { ...state, allLocations: action.payload };
     case "DeleteLocation":
      console.log(action.payload);
       newLocations = state.allLocations.filter(
        (el) => el._id != action.payload
      );
      return { ...state, allLocations: newLocations };
      case "updateLocation":
      const updated = JSON.stringify(action.payload.body);
      const convert = JSON.parse(updated);
      const updatedLocations = state.allLocations.map((el) =>
        el._id !== convert._id ? el : convert
      );
      return { ...state, allLocations: updatedLocations };
      break;
      case "deleteLocation":
      console.log(action.payload);
      // console.log("hiiiiiii"+newEmpDetails)
       newLocations = state.allLocations.filter(
        (el) => el._id != action.payload
      );
      return { ...state, allLocations: newLocations };
      break;

     case "error":
      return state;

    default:
      return state;
  }
  // return state;

};