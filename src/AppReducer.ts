import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import { alertReducer as alert } from '../alerts'
import AppState from './AppState'
// import { driveWealthAccountReducer, stockCategoriesListReducer } from '../common/reducers'
// import { complianceReportReducer as complianceReport } from '../compliance-report'
// import { homeReducer } from '../home'
// import nav from '../navigators/reducers/nav'
// import { placeOrderReducer as placeOrder } from '../place-order'
// import { searchReducer } from '../search'
// import { stockDetailReducer } from '../stock-detail'
// import { orderHistoryReducer as orderHistory } from '../stock-order-history'
// import { summaryReducer } from '../summary'

const appReducer = combineReducers<AppState>({
  // alert,
  // placeOrder,
  // home: homeReducer,
  // stockDetail: stockDetailReducer,
  // search: searchReducer,
  // orderHistory,
  // complianceReport,
  // summary: summaryReducer,
  // nav,
  // driveWealthAccount: driveWealthAccountReducer,
  // stockCategoriesList: stockCategoriesListReducer,
  form: formReducer,
})

export default appReducer
