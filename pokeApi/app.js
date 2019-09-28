//<img src="..." class="card-img-top" alt="...">

//diglett

var condition = "pokemon";
var pocketmonster = "diglett"


fetch(`https://pokeapi.co/api/v2/${condition}/${pocketmonster}`)
.then( Response => Response.json() )
.then( data => {
    console.log(data)
    const {...img} = data.sprites;
    const {...moves} = data;
    //console.log(img);
    selector = document.querySelector(".card");
    pokeIMG = ` <h5 class="card-title">${pocketmonster}</h5><img src="${img.front_default}" class="card-img-top" alt="..."><div class="card-body">
   
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>`
    selector.innerHTML = pokeIMG;
});