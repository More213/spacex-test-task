const defaultState: any = {
  dragonId: 'all',
  launchpadId: 'all',
}
export const filterValue = (state:any = defaultState, action: any) => {
  switch (action.type) {
    case "DRAGONS_FILTER":
        return {...state, dragonId: action.dragonId};
    case "LAUNCHPADS_FILTER":
      return {...state, launchpadId: action.launchpadId};
    default:
      return state;
  }
}
