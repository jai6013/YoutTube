async function findVideos(){
    let q = document.getElementById("search").value
    let res = await fetch (`https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyDCfzsVeA8Eu6Jjx2FYikdgaj3ejw1n8qc&maxResults=20`)

    let data = await res.json() 
    console.log(data)

    let forv = document.getElementById("forVideos")
    let { items} = data;
    
    // items = items.filter((el) => {
    //     return el.id.videoId != undefined
    // })
    items.forEach(({ id : {videoId} })=> {
        let div = document.createElement("div")
        div.style.marginTop = "20px"
        div.innerHTML = `<iframe width="280" height="175" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        forv.append(div)
    })
}