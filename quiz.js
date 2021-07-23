class Quiz {
    constructor(){
     
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
    
      
  
    play(){
      //write code here to hide question elements
      question.hide();
      background("yellow");
      textSize(35);
      text("Result Of Quiz",120,70);
      Contestant.getPlayerInfo();
      if(allContestants !== null){
        fill("Blue");
        textSize(20);
        text("*NOTE : Contestant who answered correct are highlighted in green color!",130,230);
        var displayPosition = 250; 
  
       for(var plr in allContestants){
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer){
         fill("Green");
        }else{
        fill("red");
        }
        displayPosition += 30;
        textSize(40);
        text(allContestants[plr].name+"; "+allContestants[plr].answer,120,displayPosition);
        }
      } 
  
  
      
      
    }
  
  }
  
