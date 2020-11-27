export const dragonsFetchData = (dataDragons: any) => {
  return {
    type: "CARDS_FETCH",
    dataDragons
  }
};
export const cardsFetchError = () => {
  return {
    type: "ERROR_FETCH",
  }
};

export function getDataRocket() {
  return (dispatch: any) => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then(response => response.json())
      .then(respons => dispatch(dragonsFetchData(respons)))
      .catch(() => dispatch(cardsFetchError()))
  }
}
