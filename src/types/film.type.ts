import { Genre } from './genre.type.js';

export type Film = {
  name: string;
  description: string;
  publicationDate: Date;
  released: number;
  genre: Genre;
  rating: number;
  previewVideoLink: string;
  videoLink: string;
  starring: string[];
  director: string;
  duration: number;
  commentsCount: number;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
}
