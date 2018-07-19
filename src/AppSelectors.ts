import AppState from './AppState'
import * as DWAccountSelectors from '../common/selectors/drive-wealth-account'
import { homeSelectors } from '../home'

export const hasWDSession = (state: AppState) => !!DWAccountSelectors.getAccountId(state.driveWealthAccount)
export const getAccountId = (state: AppState) => DWAccountSelectors.getAccountId(state.driveWealthAccount)
export const getUserId = (state: AppState) => DWAccountSelectors.getUserId(state.driveWealthAccount)
export const isLiveAccount = (state: AppState) => DWAccountSelectors.isLiveAccount(state.driveWealthAccount)

export const isInPortfolio = (state: AppState, symbol: string) => {
  return homeSelectors.isInPortfolio(state.home, symbol)
}
