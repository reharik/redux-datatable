// export const INCREMENT_DATE = 'redux-dataview/column/INCREMENT_DATE';
import uuid from 'uuid';

const rowData= [
  {
    firstName:'Raif', lastName:'Harik', email:'f@u.com', id:uuid.v4()
  },
  {
    firstName:'Robbie', lastName:'Fuentes', email:'robbie@fuenties.com', id:uuid.v4()
  }
];




export default (state = rowData, action = null) => {
  return state;
};


// export function incrementDate(viewType) {
//   return {
//     type: INCREMENT_DATE,
//     viewType
//   };
// }

