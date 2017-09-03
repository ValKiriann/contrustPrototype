export class RatingUserForSource {
  idUser: number;
  idSource: number;
  rate: number;

  constructor(idUser: number, idSource: number, rate: number) {
    this.idUser = idUser;
    this.idSource = idSource;
    this.rate = rate;
  }
}
