function createTeam() {

  let teamCount = 0;

  return class Team {
    constructor(name, city) {
      this.id = ++teamCount;
      this.name = name;
      this.city = city;
      store.teams.push(this);
    }

    static get all(){
      return store.teams
    }

    static find(id){
      return store.teams.filter(team=>{
        return team.id === id
      })[0]
    }

    get players(){
      return store.players.filter(player=>{
        return player.teamId === this.id
      })
    }
  }
};

let Team = createTeam()

knicks = new Team("Knicks", "New york city")



// function findTeamByName(name) {
//   return store.teams.filter( (team) => {
//     return team.name === name
//   })[0]
// };
