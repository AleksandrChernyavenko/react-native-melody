import { FormReducer } from 'redux-form'
// import { AlertReducer } from '../../alerts/interfaces/alert-reducer'
// import { ComplianceReportReducer } from '../../compliance-report/interfaces/compliance-report-reducer'
// import { HomeReducer } from '../../home/interfaces/home-reducer'
// import { PlaceOrderReducer } from '../../place-order/interfaces/place-order-reducer'
// import { SearchReducer } from '../../search/interfaces'
// import { StockDetailReducer } from '../../stock-detail/interfaces/stock-detail-reducer'
// import { OrderHistoryReducer } from '../../stock-order-history/interfaces/order-history-reducer'
// import { SummaryReducer } from '../../summary/interfaces/summary-reducer'
// import { DriveWealthAccountReducer } from './drive-wealth-account-reducer'
// import { StockCategoriesListReducer } from './stock-categories-list-reducer'

export default interface AppState {
  // alert: AlertReducer,
  // placeOrder: PlaceOrderReducer,
  // home: HomeReducer,
  // stockDetail: StockDetailReducer,
  // search: SearchReducer,
  // complianceReport: ComplianceReportReducer,
  // orderHistory: OrderHistoryReducer,
  // summary: SummaryReducer,
  // driveWealthAccount: DriveWealthAccountReducer,
  // stockCategoriesList: StockCategoriesListReducer,
  form: FormReducer,
}
