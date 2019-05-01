
function Population(){
  this.rockets = [];
  this.popsize = 100;
  this.matingpool = [];

  for(var i = 0; i < this.popsize; i++){
    this.rockets[i] = new Rocket();
  }

  this.evaluate = function(){

    var maxfit = 0;
    for(var i = 0; i < this.popsize; i++){
      this.rockets[i].calcFitness();
      if(this.rockets[i].fitness > maxfit){
        maxfit = this.rockets[i].fitness;
      }
    }


    for(var i = 0; i < this.popsize; i++){
      this.rockets[i].fitness /= maxfit; // makes sure everything is between 0 and 1
    }

    this.matingpool = [];
    //adds the number of participants to the matingpool based off
    //of their fitness value
    for(var i = 0; i < this.popsize; i++){
      var n = this.rockets[i].fitness * 100;//recall fitness between 0 and 1, this line gets the fitness value and multiplies it by 100
      for(var j = 0; j < n; j++){
        this.matingpool.push(this.rockets[i]);// adds a certain number of participants to the matingpool and this number is determined from the multiplication of the fitness times 100
      }
    }
  }

  this.selection = function(){
    var newRockets = [];
    for(var i = 0; i < this.rockets.length; i++){
      var parentA = random(this.matingpool).dna;
      var parentB = random(this.matingpool).dna;
      var child = parentA.crossover(parentB);
      child.mutation();
      newRockets[i] = new Rocket(child);
    }
    this.rockets = newRockets;
  }

  this.run = function(){
    for(var i = 0; i < this.popsize; i++){
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}
