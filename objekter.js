/* Opgave 1 */

let movie = {
    title: "The Prestige",
    director: "Christopher Nolan",
    playtimemin: 130,
    year: 2006
};

console.log(movie.title);
console.log(movie["director"]);
console.log(movie.playtimemin);
console.log(movie["year"]);


/* Opgave 2 */

let movie = {
    title: "The Prestige",
    director: "Christoper Nolan",
    playtimemin: 130,
    year: 2006,
    available: true,
    genres: ["Drama", "Mystery", "Sci-Fi"],
    starringcast: {
        actors: [{
                name: "Christian Bale",
                origin: "United Kingdom"
            },
            {
                name: "Hugh Jackman",
                origin: "Australia"
            },
            {
                name: "Scarlett Johansson",
                origin: "United States & Denmark"
            }
        ],
    }
};

// Looping through the genres array
for (let i = 0; i < movie.genres.length; i++) {
    console.log(movie.genres[i]);
}

// Accessing values from the nested object
console.log(movie.starringcast.actors);