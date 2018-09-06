export const createSelector = (...funcs: any[]) => {
  return (state: any) => {
    return funcs.reduce((previousState: any, fn: any) => {
      return fn(previousState)
    }, state)
  }
}
