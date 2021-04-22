let image = new Array();
for(let i=1; i<=9; i++){
    image[i]="img/Norris"+i+".jpg"
}
let size = image.length;

function joke() {
    let x = Math.floor(size*Math.random())+1;
    $("#randomImage").attr("display", "block");
    $("#randomImage").attr("src", image[x]);
    $.get("http://api.icndb.com/jokes/random", function (data, textStatus, jqXHR) {
        console.log(data);
        $("#joke").html(`${data.value.joke}`);
    });
}

$(document).ready(function(){
    joke();
    $("#jokeBtn").click(function (e) { 
        e.preventDefault();
        joke();
    });
});