let store: any = [];

export const dataMissions = (state:any = [], action: any) => {
    switch (action.type) {
        case "GET_MISSIONS_FETCH": store = [...state, ...action.dataMissions];
            return [...state, ...action.dataMissions];
        case "DRAGONS_FILTER":
            const newStateFilterRocket = store;
            return newStateFilterRocket.filter((obj: any) => obj.rocket === action.dragonsFilter);
        case "LAUNCHPADS_FILTER":
            const newStateFilterLaunchpads = store;
            return newStateFilterLaunchpads.filter((obj: any) => obj.launchpad === action.launchpadsFilter);
        default:
            return state;
    }
}
