"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB[a] = b;
personalMovieDB[c] = d;

console.log(personalMovieDB);
