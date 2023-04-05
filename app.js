// let cl = console.log;
// let rating = "";
// const movieContainer = document.getElementById("movieContainer");
// let imgPath = `http://image.tmdb.org/t/p/w1280/`
// let cardResult = '';
// results.forEach((obj) => {
//     cl(obj)
//     cardResult += `
//     <div class="col-md-3 mb-4">
//     <div class="card">
//     <figure class="movieCard">
//     <img src="https://image.tmdb.org/t/p/w1280${obj.poster_path}" alt="">
//     <figcaption>
//     <div class="name">
//     <div class="row">
//     <div class="col-sm-9">
//         ${obj.title}
//         </div>
//     <div class="col-sm-3">
//     <span class="rating1">${obj.vote_average}</span>
//     </div>
//     </div>
//     </div>
//     <div class="overview p-2">
//     <h2>Overview</h2>
//     <p>
//         ${obj.overview}
//     </p>
//     </div>
//     </figcaption>
//     </figure>
//     </div>
//     </div>
//     `
    
// })


// movieContainer.innerHTML = cardResult;



// function colors(rating){
//     if(rating >= 8){
//         return "green"
//     }else if(rating >= 6){
//         return "yellow"
//     }else if( rating >= 4){
//         return "orange"
//     }else{
//         return "red"
//     }
// }




const imgPath = 'https://image.tmdb.org/t/p/w1280'

let movieContainer = document.getElementById("movieContainer");

function htmlBody(arr){
    let final = '';
    arr.forEach(ele => {
        final += `<div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <figure class="posters">
                                <img src= "${imgPath}${ele.poster_path}" class="img-fluid" alt="${ele.title}">
                                <figcaption>
                                    <p class="title">${ele.title}</p>
                                </figcaption>
                                <span class="${colors(ele.vote_average)}">${ele.vote_average}</span>
                                <div class="overview text-center">
                                    <h4>Overview</h4>
                                    <p class="">${ele.overview}</p>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>`
    });
    
    movieContainer.innerHTML = final;
}
htmlBody(results);

function onEnter(e){
    if(e.key === "Enter"){
        let name = e.target.value.toLowerCase().trim();
        let tempResult = results.filter(movie => movie.title.toLowerCase().trim().includes(name));
        htmlBody(tempResult);
    }else{
        htmlBody(results);
    }
}



function colors(rating){
    if(rating >= 8){
        return "green"
    }else if(rating >= 6){
        return "yellow"
    }else if( rating >= 4){
        return "orange"
    }else{
        return "red"
    }
}

//  events

seacrhInput.addEventListener("keyup", onEnter);