// Nested promises
function getMovieDetails() {
    console.log('Collecting Movie Data...');
    new Promise((resolve, reject) => {
        console.log(`[Source 1] Collecting basic information...`);
        setTimeout(() => {
            console.log(`[Source 1] Movie Name: 'Avengers: Endgame', Release Date: 26 April 2019`);
            resolve(true);
        }, 2000);
    }).then(() => {
        new Promise((resolve, reject) => {
            console.log(`[Source 2] Collecting geographical information...`);
            setTimeout(() => {
                console.log(`[Source 2] Origin: 'USA'`);
                resolve(true);
            }, 2000);
        }).then(() => {
            new Promise((resolve, reject) => {
                console.log(`[Source 3] Collecting director and cast information...`);
                setTimeout(() => {
                    console.log(`[Source 1] Directors: 'Russo Brothers', Cast: Chris Evans, Robert Downy Jr., Chris Hemsworth`);
                    resolve(true);
                }, 2000);
            })        
        })
    })
}

getMovieDetails();