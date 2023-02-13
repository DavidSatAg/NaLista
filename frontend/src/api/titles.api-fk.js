function later(result) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(result)
        }, 1000)
    })
}

export const apijs = {
    async search_titles(searchstring) {
        console.log('passei por aqui')
        const result = {
            results: [
                {"id":"tt2364582","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMTkwODYyMjgzOV5BMl5BanBnXkFtZTgwODAzMTE5MjE@._V1_Ratio0.6757_AL_.jpg","title":"Agents of S.H.I.E.L.D.","description":"2013–2020 TV Series Clark Gregg, Ming-Na Wen"},
                {"id":"tt6313900","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMGQ1NWMwNzQtNDhjNy00NWQ4LWE3ZDktN2JiODhhZDI4ZjFlL2ltYWdlXkEyXkFqcGdeQXVyMjU0OTAwMDc@._V1_Ratio0.7568_AL_.jpg","title":"Agents of S.H.I.E.L.D.: Slingshot","description":"2016 TV Mini Series Natalia Cordova-Buckley, Yancey Arias"},
                {"id":"tt4501242","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMWYwMzY1NmYtNDBiNC00OGE5LThmYTAtZWU0MTljMzIzYmI3XkEyXkFqcGdeQXVyMDM0MzU2NA@@._V1_Ratio0.7027_AL_.jpg","title":"Agents of S.H.I.E.L.D.: Double Agent","description":"2015– TV Mini Series Stan Lee, Marcus Choi"},
                {"id":"tt0411008","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6757_AL_.jpg","title":"Lost","description":"2004–2010 TV Series Jorge Garcia, Josh Holloway"},
                {"id":"tt13320622","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMmIwYzFhODAtY2I1YS00ZDdmLTkyYWQtZjI5NDIwMDc2MjEyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6757_AL_.jpg","title":"The Lost City","description":"2022 Sandra Bullock, Channing Tatum"},
                {"id":"tt0082971","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_Ratio0.6757_AL_.jpg","title":"Indiana Jones and the Raiders of the Lost Ark","description":"1981 Harrison Ford, Karen Allen"},
                {"id":"tt5232792","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BZTY5YjQwYmEtOWJiNy00NDBmLTgxM2YtMmVkMmI0NzE1N2FjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_Ratio0.6757_AL_.jpg","title":"Lost in Space","description":"2018–2021 TV Series Toby Stephens, Molly Parker"},
                {"id":"tt0335266","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMTUxMzk0NDg1MV5BMl5BanBnXkFtZTgwNDg0NjkxMDI@._V1_Ratio0.6757_AL_.jpg","title":"Lost in Translation","description":"2003 Bill Murray, Scarlett Johansson"},
                {"id":"tt0093437","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMWEzNmUxZTMtZjY0My00OGNmLWIyNDctODM2YzZjM2YwZWEwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7027_AL_.jpg","title":"The Lost Boys","description":"1987 Jason Patric, Corey Haim"},
                {"id":"tt0116922","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BZDBmMjg0MWMtNTQ3MS00NGQ5LTg4YzQtNzA1NTk2MWQ2NzY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6757_AL_.jpg","title":"Lost Highway","description":"1997 Bill Pullman, Patricia Arquette"},
                {"id":"tt9100054","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BZTJmYTJmYTktMzU1Yy00ZTZlLTgzNjItYmY4ZDFjZGFjYjZhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6757_AL_.jpg","title":"The Lost Daughter","description":"2021 Olivia Colman, Jessie Buckley"},
                {"id":"tt0058824","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMjE2OTczMDI2M15BMl5BanBnXkFtZTcwMTA5MDgyMQ@@._V1_Ratio0.7027_AL_.jpg","title":"Lost in Space","description":"1965–1968 TV Series Guy Williams, June Lockhart"},
                {"id":"tt9663764","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BM2QyYTRkMjMtMDk5NC00OTc0LWIyYTYtNGNhMzRjMTNhNGNkXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_Ratio1.7838_AL_.jpg","title":"Aquaman and the Lost Kingdom","description":"2023 Jason Momoa, Ben Affleck"},
                {"id":"tt1429449","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMTY4NzA1MDAyMF5BMl5BanBnXkFtZTcwMzQ4MTkxNA@@._V1_Ratio0.6757_AL_.jpg","title":"Lost Girl","description":"2010–2016 TV Series Anna Silk, Kris Holden-Ried"},
                {"id":"tt3111426","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMWNkOWNlNmEtYmRhZC00ZGRjLWIwZjgtMTJiNDhhNTg2YjkzXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_Ratio0.6757_AL_.jpg","title":"Lost Girls","description":"2020 Amy Ryan, Thomasin McKenzie"},
                {"id":"tt10478054","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BNjA3YWIwZTMtNDVjNy00MzkyLWFlMjMtMjUzODEzZDY4NTUzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6757_AL_.jpg","title":"The Lost Symbol","description":"2021 TV Series Ashley Zukerman, Eddie Izzard"},
                {"id":"tt0920462","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BYjQ5NmI3NjctZjA1Mi00N2NhLWEwOTctYTkxZjY0YmQ4ZDEzXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_Ratio0.7027_AL_.jpg","title":"Lost Girls and Love Hotels","description":"2020 Alexandra Daddario, Takehiro Hira"},
                {"id":"tt1212428","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BNjAyN2QxOTItOGQ0YS00NmQxLWIxMjEtMDdkZmY0NDU5OWUzXkEyXkFqcGdeQXVyMTk1MDM0OTc@._V1_Ratio0.6757_AL_.jpg","title":"The Lost City of Z","description":"2016 Charlie Hunnam, Robert Pattinson"},
                {"id":"tt10505316","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMGQ3NTdkZWMtNjFjNy00NDhkLThiYzQtZjY2Njk1YTczNTg0XkEyXkFqcGdeQXVyNDU0NjMyNTQ@._V1_Ratio0.6757_AL_.jpg","title":"Lost Illusions","description":"2021 Benjamin Voisin, Cécile de France"},{"id":"tt0119567","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2QtNDg1ZS00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_Ratio0.6757_AL_.jpg","title":"The Lost World: Jurassic Park","description":"1997 Jeff Goldblum, Julianne Moore"},{"id":"tt0230011","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BNjM2NzNjMDAtZTAyMi00NTQzLWFlMTctNTUzMGE1ODE2NDRlXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_Ratio0.6757_AL_.jpg","title":"Atlantis: The Lost Empire","description":"2001 Michael J. Fox, Jim Varney"},{"id":"tt0245238","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BNjVhZDc5YjItNzU0OS00MGE4LTliNWYtYWFjOGEzNjkwY2ViXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_Ratio0.6757_AL_.jpg","title":"Lost and Delirious","description":"2001 Piper Perabo, Jessica Paré"},{"id":"tt4257940","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BZWY1Y2RiM2ItZmYzOS00ZDU3LWEwMzAtNTFjYmRjZTJmYWRmXkEyXkFqcGdeQXVyMzE4NTc2MjU@._V1_Ratio0.7027_AL_.jpg","title":"The Lost Husband","description":"2020 Leslie Bibb, Josh Duhamel"},{"id":"tt13421498","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BOTNiMWE2NWEtYjViMC00ZWI1LWJiMzgtNGU2ZmVkMGNkYTU2XkEyXkFqcGdeQXVyMTk5MTY4Nzg@._V1_Ratio0.6757_AL_.jpg","title":"The Lost King","description":"2022 Sally Hawkins, Shonagh Price"},{"id":"tt0457400","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BOTkzNDg2OTc1NF5BMl5BanBnXkFtZTcwNDcxODE2Mg@@._V1_Ratio0.6757_AL_.jpg","title":"Land of the Lost","description":"2009 Will Ferrell, Danny McBride"},{"id":"tt22938576","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BNjJjMzQ3OTQtMjUxMi00Y2Q3LWIxNzItMTk5NDFhMjlhZjA1XkEyXkFqcGdeQXVyNTM2NTg3Nzg@._V1_Ratio0.7027_AL_.jpg","title":"The Lost Patient","description":"2022 TV Movie Txomin Vergez, Clotilde Hesme"},{"id":"tt13271734","resultType":"Title","image":"https://m.media-amazon.com/images/M/MV5BNTA0MWJmNjUtNDdmNC00MzFlLTkwMWMtMzA2N2RkYmQwMmI2XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.6757_AL_.jpg","title":"Lost Ollie","description":"2022 TV Mini Series Jake Johnson, Gina Rodriguez"}
            ]
        }
        return later(result)
    },
    async get_title() {
        const result = {
            "id": "tt2402207",
            "title": "The Last Ship",
            "type": "TVSeries",
            "image": "https://m.media-amazon.com/images/M/MV5BMTQ5MTM5Mjc5NV5BMl5BanBnXkFtZTgwMTk2MzExOTE@._V1_Ratio0.6762_AL_.jpg",
            "imDbRating": "7.4",
            "images": {"items": {"image": "https://m.media-amazon.com/images/M/MV5BMTQ5MTM5Mjc5NV5BMl5BanBnXkFtZTgwMTk2MzExOTE@._V1_Ratio0.6762_AL_.jpg"}},
            "genres": "Action, Drama, Sci-Fi",
            "stars": "Eric Dane, Adam Baldwin, Charles Parnell",
            "plot":"The crew of a naval destroyer is forced to confront the reality of a new existence when a pandemic kills off most of the earth's population."
        }
        return later(result)
    }
}
