export const missionsFetchData = (dataMissions: any) => {
    return {
        type: "GET_MISSIONS_FETCH",
        dataMissions
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
