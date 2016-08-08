
export { default as tableReducers } from './modules/index';

export { default as Table } from './containers/TableContainer';


//TODO
//TODO
//TODO 1) sorting
//TODO 2) data retrieval
//TODO   a) inline sort of api middleware (takes a url)
//TODO   b) function returns a promise (takes function)
//TODO   c) function takes a dispatch and ultimately fires the proper action
//TODO
//TODO
//TODO 3) bulk select
//TODO   a) two types of checkbox, each fires seperate action (header, row)
//TODO   b) keep row selection in store
//TODO
//TODO
//TODO 4) various callbacks for actions
//TODO 5) loading graphic
//TODO 6) error handling graphic
//TODO 7) no records graphic
//TODO
