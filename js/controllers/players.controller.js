class PlayersController{

  constructor(){}

  create(){
    $("form.add-team").on("click", function(event){
      event.preventDefault()
    })
  }

  init(){
    this.create()
  }

}
