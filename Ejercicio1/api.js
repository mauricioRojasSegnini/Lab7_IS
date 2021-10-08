async function fetchDogBreeds(){
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data.message);
}

function createBreedList(apiData){
    breeds=[];
    Object.keys(apiData).map(function(value){
        breeds.push({ title: value});
    })
    main(breeds);
}


function main(breeds) {
    // Cada vez que se presiona una tecla en la barra de búsqueda, se hace la búsqueda
    document.getElementById("search").addEventListener("keyup", search);
    data=[];
    for(var i=0;i<breeds.length;i++){
        data.push({ id: i, title: breeds[i].title });
    }
    // Mostramos la data en la pantalla
    displayData(data);
}
/**
* Itera un arreglo de datos y construye una lista que muestra su contenido en body: `https://dog.ceo/api/breed/${value}/images/random`
la pantalla
* cada elemento agregado se le agrega un id que es el id de cada objeto (dato)
dentro del arreglo
*/
function displayData(data) {
    let display = "";
    data.forEach((post) => {
        display += `
        <ul id="${post.id}">
        <li><strong>Dog:</strong> ${post.title}</li>
        </ul>
        `;
    });
    document.getElementById("data").innerHTML = display;
}
/**
* Function que se pasa como callback el keyup del textarea search
*/
function search() {
    let text = document.getElementById("search").value;
    data.forEach((post) => {
        if (match(post.title, text) || text == "") show(post.id);
        else hide(post.id);
    });
}
/**
* Si substring es parte de word, retorna true, si no retorna false
* @param {String} word
* @param {String} substring
*/
function match(word, substring) {
    console.log(word, substring);
    console.log(word.includes(substring));
    return word.includes(substring);
}
/**
* Oculta el elemento html que tiene el id elementId
* @param {String} elementId
*/
function hide(elementId) {
    document.getElementById(elementId).style.display = "none";
}
/**
* Muestra el elemento html que tiene el id elementId
* @param {String} elementId
*/
function show(elementId) {
    document.getElementById(elementId).style.display = "block";
}
// Punto de entrada para desencadenar lógica
fetchDogBreeds()
main();
