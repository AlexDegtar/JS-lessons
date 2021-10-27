"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?','') ;

const personalMovieDB = {
   count: numberOfFilms,
   movie: {},
   actors: {},
   genres: [],
   private: false
};
const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('Как его оцениваете?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('Как его оцениваете?','');
      personalMovieDB.movie [a] = b;
      personalMovieDB.movie [c] = d;
      console.log (personalMovieDB);