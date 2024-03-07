const initialStateCustomer = {
  fullName: "",
  natioonalID: "",
  createAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        natioonalID: action.payload.natioonalID,
        createAt: action.payload.createAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

export function createCustomer(fullName, natioonalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      natioonalID,
      createAt: new Date().toISOString(),
    },
  };
}

export function updateName(fullName) {
  return {
    type: "account/updateName",
    payload: fullName,
  };
}
