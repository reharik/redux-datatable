import columnReducer from './columnModule';
import rowReducer from './rowsModule';
import bulkActionReducer from './bulkactionModule'

export default { columns: columnReducer, tableData: rowReducer, bulkAction: bulkActionReducer };
