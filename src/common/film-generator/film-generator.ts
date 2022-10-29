import { FilmGeneratorInterface } from './film-generator.interface.js';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../utils/random.js';

const MIN_YEAR = 2016;
const MAX_YEAR = 2022;

const MIN_RATING = 1;
const MAX_RATING = 10;

const MIN_DURATION = 10;
const MAX_DURATION = 180;

const MIN_COMMENT_COUNT = 0;
const MAX_COMMENT_COUNT = 100;

export default class FilmGenerator implements FilmGeneratorInterface {
  constructor(private readonly mockData: MockData) {
  }

  public generate(): string {
    const year = generateRandomValue(MIN_YEAR, MAX_YEAR);
    const name = getRandomItem<string>(this.mockData.name);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const publicationDate = year;
    const released = year;
    const genre = getRandomItem<string>(this.mockData.genre);
    const rating = generateRandomValue(MIN_RATING, MAX_RATING);
    const previewVideoLink = getRandomItem<string>(this.mockData.previewVideoLink);
    const videoLink = getRandomItem<string>(this.mockData.videoLink);
    const starring = getRandomItems<string>(this.mockData.starring).join(';');
    const director = getRandomItem<string>(this.mockData.director);
    const duration = generateRandomValue(MIN_DURATION, MAX_DURATION);
    const commentsCount = generateRandomValue(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT);
    const posterImage = getRandomItem<string>(this.mockData.posterImage);
    const backgroundImage = getRandomItem<string>(this.mockData.backgroundImage);
    const backgroundColor = getRandomItem<string>(this.mockData.backgroundColor);

    return [
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
      backgroundColor,
    ].join('\t');
  }
}
