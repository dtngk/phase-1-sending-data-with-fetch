// Add your code here
function submitData(tname, email){
 return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: tname,
      email: email,
    }),
  })
  .then(function(reponse){
    return reponse.json();
  })
  .then(function (object){
    const text = document.createElement("p");
    text.innerHTML = object.id;
    document.querySelector('body').appendChild(text);
   console.log(object);
  })
  .catch(function (error){
    const text = document.createElement("p");
    text.innerHTML = error;
    document.querySelector('body').appendChild(text);
  });
}
