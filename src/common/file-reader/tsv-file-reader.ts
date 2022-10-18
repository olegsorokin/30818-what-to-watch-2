import { readFileSync } from 'fs';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public fileName: string) {
  }

  public read(): void {
    this.rawData = readFileSync(this.fileName, { encoding: 'utf-8' });
  }

  public toArray() {
    if (!this.rawData) {
      return [];
    }

    console.log(this.rawData.split('\n'));

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([
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
      ]) => ({
        name,
        description,
        publicationDate: Number.parseInt(publicationDate, 10),
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
      }));
  }
}
