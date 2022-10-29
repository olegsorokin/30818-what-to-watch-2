import { Film } from '../types/film.type.js';

export const createFilm = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [
    name,
    description,
    publicationDate,
    released,
    genre,
    rating,
    previewVideoLink,
    videoLink,
    starring,
    director,
    duration,
    commentsCount,
    posterImage,
    backgroundImage,
    backgroundColor
  ] = tokens;

  return {
    name,
    description,
    publicationDate: new Date(publicationDate),
    released: Number.parseInt(released, 10),
    genre,
    rating: Number.parseInt(rating, 10),
    previewVideoLink,
    videoLink,
    starring: starring.split(';'),
    director,
    duration: Number.parseInt(duration, 10),
    commentsCount: Number.parseInt(commentsCount, 10),
    posterImage,
    backgroundImage,
    backgroundColor
  } as Film;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';
