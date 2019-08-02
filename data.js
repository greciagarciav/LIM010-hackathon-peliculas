const mostFamous = ['tt0267804', 'tt0756683', 'tt0103639', 'tt0910970', 'tt0451279', 'tt0119654', 'tt0107290', 'tt0286716', 'tt0145487', 'tt0083658'];
const mostAwarded = ['tt0371746', 'tt3890160', 'tt0120804', 'tt0418279', 'tt0116629', 'tt0120591', 'tt0803096', 'tt1840309', 'tt1477834', 'tt0974015'];
const blockbuster = ['tt2737304', 'tt0088763', 'tt8709288', 'tt0480249', 'tt4154916', 'tt3256226', 'tt1276104', 'tt3315342', 'tt0903624', 'tt0090605'];
const moreRealistic = ['tt1355644', 'tt0120903', 'tt1631867', 'tt0076759', 'tt0106062', 'tt1270797', 'tt0848228', 'tt0499549', 'tt5815594', 'tt3006802'];


let containerMovies = document.getElementById('container-movies');
let arrMostFamous = [];
let arrMostAwarded = [];
let arrBlockbuster = [];
let arrMoreRealistic = [];

let arrMoviesTemp = [];

window.scifi = {
    getSciFiData: (arrMovies) => {
        containerMovies.innerHTML = '';
        arrMovies.map((idMovie) => {
            fetch('http://www.omdbapi.com/?i=' + idMovie + ' &apikey=715025ae')
                .then(response => response.json())
                .then(movies => {
                    arrMoviesTemp.push(movies);
                    containerMovies.innerHTML += ` <div class="card" style="width:400px">
                                                   <img class="card-img-top img-fluid" alt="Card image" style="width:100%" src='${movies.Poster}'>
                                               <div class="card-body">
                                                   <h3 id="title-movie">${movies.Title}</h3>
                                               </div>
                                               </ >`;
                });
        })
        return arrMoviesTemp;
    }


    
}
const DataCifi = (arrMovies, title ) => {
    arrMovies = arrMoviesTemp;  
    return arrMovies.filter((element) => {
      return element.Title.indexOf(title);
    });
  };
  console.log( DataCifi(arrMostFamous, "WALL-E"));