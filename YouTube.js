//step 1 get the data type
//step 2 mimic the structure

function load(){
    let response = fetch ("")
}
const forv = document.getElementById("forVideos")

async function findVideos(){
    forv.innerHTML = null    
    let q = document.getElementById("search").value
    let res = await fetch (`https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyDCfzsVeA8Eu6Jjx2FYikdgaj3ejw1n8qc&maxResults=20`)

    let data = await res.json() 

    let { items} = data;
    
    items = items.filter((el) => {
        return el.id.videoId != undefined
    })
    items.forEach(({ id : {videoId} })=> {
        let div = document.createElement("div")
        div.style.marginTop = "20px"
        div.innerHTML = `<iframe width="280" height="175" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        forv.append(div)
    })
}
async function showVideos(){
    let response = await fetch ('https://youtube.googleapis.com/youtube/v3/videos?part=statistics&chart=mostPopular&viewCount=212120&maxResults=20&regionCode=In&key=AIzaSyDCfzsVeA8Eu6Jjx2FYikdgaj3ejw1n8qc')
    
    let data = await response.json();

    let { items } = data;

    items.forEach(id => {
        let div = document.createElement("div")
        div.style.marginTop = "20px"
        div.innerHTML = `<iframe width="280" height="175" src="https://www.youtube.com/embed/${id.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        forv.append(div)
    })
}

showVideos()