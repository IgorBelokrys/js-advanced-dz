'use strict';

const FootballPlayer = function (name, club, number) {
  this.name = name;
  this.club = club;
  this.number = number;
};

FootballPlayer.prototype.info = function () {
  return `Этот футболист играет в футбольном клубе ${this.club}`;
};

const Ronaldo = new FootballPlayer('Ronaldo', 'Real', 7);
Ronaldo.info();
console.log(Ronaldo);
