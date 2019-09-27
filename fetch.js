
//Where it is fetching the data from
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
//The element in the HTML document in which the data is being put into 
const main = document.getElementById("main");

//
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  const names = people.map(person => person.name).join("\n");
  main.innerHTML = listNames(people);
});
//Organizes the list into a readable format
function listNames(people) {
    const names = people.map(person => `<li>${person.name}</li>`).join("\n");
    return`<ul>${names}</ul>`
}
 


