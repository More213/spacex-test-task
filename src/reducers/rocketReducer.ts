export const dataDragons = (state:any= [], action: any) => {
  switch (action.type) {
    case "CARDS_FETCH":
      return [...state, ...action.dataDragons];
    default:
      return state;
  }
}
