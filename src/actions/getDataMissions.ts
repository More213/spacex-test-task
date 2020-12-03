import {Imission} from "../interfaces/interfaceMissions";

export const missionsFetchData = (missions: Imission[]) => {
    return {
        type: "GET_MISSIONS_FETCH",
        missions
    }
};
export const cardsFetchError = () => {
    return {
        type: "ERROR_FETCH",
    }
};

export function getDataMissions() {
    return (dispatch: any) => {
        fetch("https://api.spacexdata.com/v4/launches/")
          .then(response => response.json())
          .then(respons => dispatch(missionsFetchData(respons)))
          .catch(() => dispatch(cardsFetchError()))
    }
}
