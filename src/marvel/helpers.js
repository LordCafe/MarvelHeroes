
function GetDataMarvel( url , data  ) {
    return  fetch(url   )
  .then(response => response.json())

}



export { GetDataMarvel  };
