export const missions = (state:any = [], action: any) => {
    switch (action.type) {
        case "GET_MISSIONS_FETCH":
            return [...state, ...action.missions];
        default:
            return state;
    }
}
