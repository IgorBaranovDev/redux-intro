import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  natioonalID: "",
  createAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, natioonalID) {
        return {
          payload: {
            fullName,
            natioonalID,
            createAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.natioonalID = action.payload.natioonalID;
        state.createAt = action.payload.createAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         natioonalID: action.payload.natioonalID,
//         createAt: action.payload.createAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, natioonalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName,
//       natioonalID,
//       createAt: new Date().toISOString(),
//     },
//   };
// }

// export function updateName(fullName) {
//   return {
//     type: "customer/updateName",
//     payload: fullName,
//   };
// }
