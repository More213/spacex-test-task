export const dataMissions = (state:any = [], action: any) => {
    switch (action.type) {
        case "GET_MISSIONS_FETCH":
            return [...state, ...action.dataMissions];
        default:
            return state;
    }
}
