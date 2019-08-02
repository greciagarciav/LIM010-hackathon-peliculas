const btnFamousMovies = document.getElementById("btn-famous-movies");
    btnFamousMovies.addEventListener('click', () => {
        document.getElementById('container-cards').classList.remove('hide');
        document.getElementById('container-buttons').classList.add('hide');
        arrMostFamous = '';
        arrMostFamous = scifi.getSciFiData(mostFamous);
        console.log(arrMostFamous);
    });
    const btnAwardedMovies = document.getElementById('btn-awarded-movies');
    btnAwardedMovies.addEventListener('click', () => {
        document.getElementById('container-cards').classList.remove('hide');
        document.getElementById('container-buttons').classList.add('hide');
        arrMostAwarded = '';
        arrMostAwarded = scifi.getSciFiData(mostAwarded);
        console.log(arrMostAwarded);
    });
    const btnBlockbusterMovies = document.getElementById('btn-blockbuster-movies');
    btnBlockbusterMovies.addEventListener('click', () => {
        document.getElementById('container-cards').classList.remove('hide');
        document.getElementById('container-buttons').classList.add('hide');
        arrBlockbuster = '';
        arrBlockbuster = scifi.getSciFiData(blockbuster);
        console.log(arrBlockbuster);
    });
    const btnRealisticMovies = document.getElementById('btn-realistic-movies');
    btnRealisticMovies.addEventListener('click', () => {
        document.getElementById('container-cards').classList.remove('hide');
        document.getElementById('container-buttons').classList.add('hide');
        arrMoreRealistic = '';
        arrMoreRealistic = scifi.getSciFiData(moreRealistic);
        console.log(arrMoreRealistic);
    });
    const inputbuscador = document.getElementById('input-search-movies');
    const btnbuscador = document.getElementById('button-search-movies');
    
