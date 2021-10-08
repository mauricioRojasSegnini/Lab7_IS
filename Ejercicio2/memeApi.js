async function start(){
    const response = await fetch("https://api.imgflip.com/get_memes")
    const data = await response.json()
    createMemeList(data.data.memes)
}
start()

function createMemeList(memeList){
    let display = "";

    memeList.forEach((post) => {
        display += `<option>${post.name}</option>`;
        //img+=`<img src="${post.url}" alt="">`;
    });
    document.getElementById("meme").innerHTML = `<select onchange="loadImage(this.value)"> ${display}</select>`;

}

async function loadImage(meme){
    const response = await fetch("https://api.imgflip.com/get_memes")
    const data = await response.json()
    console.log(data.data.memes)
    data.data.memes.forEach((post) => {
        if(post.name == meme ){
            document.getElementById("img").innerHTML = `<img src="${post.url}" alt="">`;
        }
    });
}
