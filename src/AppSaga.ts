import { all, fork } from 'redux-saga/effects'
import { homeSaga } from './modules/home'
import { loginSaga } from './modules/login'
import { signUpSaga } from './modules/sign-up'
import bootSaga from './sagas/bootSaga'
// import { alertSaga } from '../alerts'
// import driveWealthAccountSaga from '../common/sagas/drive-wealth-account'
// import preLoadingSaga from '../common/sagas/pre-loading'
// import stockCategoriesListSaga from '../common/sagas/stock-getCategories-list'
// import { complianceReportSaga } from '../compliance-report'
// import { driveWealthLoginSaga } from '../drive-wealth-login'
// import { homeSaga } from '../home'
// import { loginSaga } from '../login'
// import { placeOrderSaga } from '../place-order'
// import { preferencesSaga } from '../preferences'
// import { searchSaga } from '../search'
// import { signUpSaga } from '../sign-up'
// import { stockDetailSaga } from '../stock-detail'
// import { orderHistorySaga } from '../stock-order-history'
// import { summarySaga } from '../summary'

function* appSaga() {
  yield all([
    fork(bootSaga),
    fork(homeSaga),
    fork(loginSaga),
    fork(signUpSaga),
    // fork(driveWealthAccountSaga),
    // fork(alertSaga),
    // fork(placeOrderSaga),
    // fork(preferencesSaga),
    // fork(stockCategoriesListSaga),
    // fork(complianceReportSaga),
    // fork(homeSaga),
    // fork(searchSaga),
    // fork(stockDetailSaga),
    // fork(orderHistorySaga),
    // fork(summarySaga),
    // fork(loginSaga),
    // fork(signUpSaga),
    // fork(driveWealthLoginSaga),
  ])
}

export default appSaga
