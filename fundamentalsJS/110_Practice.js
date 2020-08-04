const DATA = [
  "Nahuel,Guzmán,1.92,10-Feb-1986,Goalkeeper,1,Tigres (MEX)",
  "Franco,Armani,1.89,16-Oct-1986,Goalkeeper,12,River Plate (ARG)",
  "Wilfredo,Caballero,1.86,28-Sep-1981,Goalkeeper,23,Chelsea (ING)",
  "Gabriel,Mercado,1.80,17-Mar-1987,Fullback,2,Sevilla FC (ESP)",
  "Nicolas,Tagliafico,1.71,31-Ago-1992,Fullback,3,Ajax (HOL)",
  "Cristian,Ansaldi,1.78,20-Sep-1986,Fullback,4,Torino (ITA)",
  "Federico,Fazio,1.95,17-Mar-1987,Fullback,6,Roma (ITA)",
  "Marcos,Acuña,1.72,28-Oct-1991,Fullback,8,Sporting de Lisboa (POR)",
  "Marcos,Rojo,1.84,20-Mar-1990,Fullback,16,Manchester United (ING)",
  "Nicolas,Otamendi,1.71,12-Feb-1988,Fullback,17,Manchester City (ING)",
  "Eduardo,Salvio,1.72,13-Jul-1990,Fullback,18,Benfica (POR)",
  "Lucas,Biglia,1.78,30-Ene-1986,Midfielder,5,Milan (ITA)",
  "Ever,Banega,1.74,29-Jun-1988,Midfielder,7,Sevilla FC (ESP)",
  "Angel,Di Maria,1.80,14-Feb-1988,Midfielder,11,PSG (FRA)",
  "Maximiliano,Meza,1.80,15-Ene-1992Midfielder,13,Independiente (ARG)",
  "Javier,Mascherano,1.71,08-Jun-1984,Midfielder,14,Hebei China Fortune (CHN)",
  "Enzo,Pérez,1.77,21-Feb-1986,Midfielder,15,River Plate (ARG)",
  "Giovani,Lo Celso,1.77,09-Apr-1996,Midfielder,20,PSG (FRA)",
  "Cristian,Pavón,1.67,21-Ene-1996,Midfielder,22,Boca Juniors (ARG)",
  "Gonzalo,Higuain,1.84,10-Dic-1987,Striker,9,Juventus (ITA)",
  "Lionel,Messi,1.69,24-Jun-1987,Striker,10,FC Barcelona (ESP)",
  "Sergio Agüero,1.70,02-Jun-1988,Striker,19,Manchester City (ING)",
  "Paulo,Dybala,1.77,15-Nov-1993,Striker,21,Juventus (ITA)",
];

class Player {
  constructor(fname = "", lname = "", height = 0, birth = "mm-dd-yyyy") {
    this.fname = fname;
    this.lname = lname;
    this.hegiht = height;
    this.birth = birth;
  }
}

class SoccerPlayer extends Player {
  constructor(
    fname,
    lname,
    height,
    birth,
    position = "",
    tshirtNumber = 0,
    club = ""
  ) {
    super(fname, lname, height, birth);
    this.position = position;
    this.tshirtNumber = tshirtNumber;
    this.club = club;
  }
}

class Team {
  constructor(players) {
    this.team = [];
    //this.positions = ["Goalkeeper", "Fullback", "Midfielder", "Striker"];
    this.positions = ["GOALKEEPER", "FULLBACK", "MIDFIELDER", "STRIKER"];
    this.createTeam(players);
  }
  createTeam(players) {
    for (const player of players) {
      let [
        fname,
        lname,
        height,
        birth,
        position,
        tshirtNumber,
        club,
      ] = player.split(",");

      let newSoccerPlayer = new SoccerPlayer(
        fname,
        lname,
        height,
        birth,
        position,
        tshirtNumber,
        club
      );
      this.team.push(newSoccerPlayer);
    }
    this.message("Built team!");
  }
  message(msg) {
    console.log(msg);
  }

  filterByPosition(position) {
    const errorMsg =
      "Possible positions are Goalkeeper, Fullback, Midfielder or Striker.";
    let positionUpperCase = position.toUpperCase();
    if (!this.positions.includes(positionUpperCase)) {
      return errorMsg;
    } else {
      return this.team.filter(
        ({ position }) => position.toUpperCase() == positionUpperCase
      );
    }
  }
}

let team = new Team(DATA);
//console.log(team.filterByPosition('Goalkeeper'))
//console.log(team.filterByPosition('Fullback'))
//console.log(team.filterByPosition('Midfielder'))
//console.log(team.filterByPosition("Striker"));
//console.log(team.filterByPosition("StrikerA"));