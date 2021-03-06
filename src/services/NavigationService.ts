import { NavigationActions } from 'react-navigation'

let navigator: any

function setTopLevelNavigator(navigatorRef: any) {
  navigator = navigatorRef
}

function navigate(routeName: any, params: any = {}) {
  navigator.dispatch(getNavigationAction(routeName, params))
}

function getNavigationAction(routeName: any, params: any = {}) {
  return NavigationActions.navigate({
    routeName,
    params,
  })
}

// add other navigation functions that you need and export them

export default {
  navigate,
  getNavigationAction,
  setTopLevelNavigator,
}
