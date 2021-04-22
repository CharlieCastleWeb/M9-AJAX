/*  VARIABLES */
let image = new Array();
for(let i=1; i<=9; i++){
    image[i]="img/Norris"+i+".jpg"
}
let size = image.length;
let randomImage = document.getElementById("randomImage");
let jokeBtn = document.getElementById("jokeBtn");
let jokeText = document.getElementById("joke");

/*  FUNCION */
function joke() {
    console.log("click boton");
    let x = Math.floor(size*Math.random())+1;
    randomImage.style.display = "block";
    randomImage.src = image[x];
    fetch("http://api.icndb.com/jokes/random")
        .then(response => response.json())
        .then(data => {
            jokeText.innerHTML = data.value.joke;
        });
}

/*  CARGAR JOKE AL INICIO */
joke();

/*  CARGAR JOKE AL PULSAR BOTÓN */
jokeBtn.addEventListener("click", joke);