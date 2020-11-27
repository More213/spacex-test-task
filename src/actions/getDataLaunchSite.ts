export const launchpadsFetchData = (launchpads: any) => {
  return {
    type: "CARDS_FETCH",
    launchpads
  }
};
export const cardsFetchError = () => {
  return {
    type: "ERROR_FETCH",
  }
};

export function getDataLaunchSite() {
  return (dispatch: any) => {
    fetch("https://api.spacexdata.com/v4/launchpads")
      .then(response => response.json())
      .then(respons => dispatch(launchpadsFetchData(respons)))
      .catch(() => dispatch(cardsFetchError()))
  }
}
