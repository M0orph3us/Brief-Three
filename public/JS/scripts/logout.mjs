export function logout() {
  function getUserConnected() {
    for (let k = 0; k < localStorage.length; k++) {
      const user = localStorage.key(k);
      const getData = localStorage.getItem(user);
      const getDataParse = JSON.parse(getData);
      if (getDataParse.isConnected === true) {
        const userConnected = user;
        return userConnected;
      }
    }
    return false;
  }

  const getData = localStorage.getItem(getUserConnected());
  const getDataParse = JSON.parse(getData);
  getDataParse.isConnected = false;

  const getDataStringify = JSON.stringify(getDataParse);
  localStorage.setItem(getUserConnected(), getDataStringify);

  const adminBoard = document.querySelector("#adminboard-link");
  adminBoard.remove();
  const imgLogout = document.querySelector("#img-logout");
  imgLogout.remove();
}
