
class TeamsController{

  constructor(){}

  static populateTable(html, into){
    $(into).empty()
    $(into).append(html)
  }

  static teamTableHTML(){
    let html = ""
    Team.all.forEach(team =>{
      html += `<tr class="team-click"><td>${team.id}</td><td >${team.name}</td><td>${team.city}</td>`
    })
    return html
  }

  static renderTable(){
    TeamsController.populateTable(TeamsController.teamTableHTML(), "tbody.table-body")
  }


  create(){
    $("form#add-team").on("submit", event => {
      event.preventDefault()
      let teamName = $("#team_name").val()
      let homeCity = $("#home_city").val()
      let team = new Team(teamName, homeCity)
      $("#team_name")[0].value=""
      $("#home_city")[0].value=""
      TeamsController.renderTable()
    })
  }

  showPlayers()

  init(){
    this.create()
    TeamsController.renderTable()
  }

}

// function renderTeamsList() {
//   store.teams.forEach(function(team) {
//     $('#teams_table').append(`<tr class="clicky ${team.id}"><td>${team.id}</td><td >${team.name}</td><td>${team.city}</td>`)
//   })
// };
//
// function hideThreePlayers() {
//   $('#players_table').hide()
// };
//
// function toggleThreePlayers() {
//   $('#teams_table tr.clicky').on('click', (event) => {
//     $('#players_table').toggle();
//   });
// };
//
// function appendNewTeam(team) {
//   // $('teams_table').append(`<tr class="clicky ${team.id}"><td>${team.id}</td><td >${team.name}</td><td>${team.city}</td>`)
//
//   // let newTeamRow = Document.createElement('tr', )
//   let table = $('teams_table')
//
//   let newTeamRow = table.insertRow();
//   let cell1 = newTeamRow.insertCell(0);
//   let cell2 = newTeamRow.insertCell(1);
//   newTeamCell1.innerHTML = ``
// };
//
// $(document).ready(function(){
//   renderTeamsList();
//   hideThreePlayers();
//   toggleThreePlayers();
// });

// new team('Chickens', 'Philly')
// new team('Turkeys', 'Bahston')
// new team('Norse Gods', 'Brooklyn')
