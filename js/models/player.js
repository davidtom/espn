function createPlayer() {
  let playerCount = 0;

  return class Player {
    constructor(name, hometown, birthyear, team) {
      this.id = ++playerCount;
      this.name = name;
      this.hometown = hometown;
      this.birthyear = birthyear;
      this.teamId = team.id;
      this.points = Math.random();
      store.players.push(this);
    }

    static get all() {
      return store.players
    }

    static find(id){
      return store.players.filter(player => {
        return player.id === id
      })[0]
    }

    get team(){
      return store.teams.filter(team=>{
        return team.id === this.teamId
      })[0]
    }
  }
}


let Player = createPlayer()

new Player('Nate Robinson', 'NYC', 1977, knicks)
new Player('Jim Brady', 'NYC', 1977, knicks)
new Player('Odin', 'NYC', 1977, knicks)
