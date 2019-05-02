
class Population{
  constructor(){
    this.bubbles = [];
    this.popsize = 100;
    this.matingpool = [];
  
    for(var i = 0; i < this.popsize; i++){
      this.bubbles[i] = new Bubble();
    }
  }
  

  evaluate(){
    var maxfit = 0;
    for(var i = 0; i < this.popsize; i++){
      this.bubbles[i].calcFitness();
      if(this.bubbles[i].fitness > maxfit){
        maxfit = this.bubbles[i].fitness;
      }
    }


    for(var i = 0; i < this.popsize; i++){
      this.bubbles[i].fitness /= maxfit; // makes sure everything is between 0 and 1
    }

    this.matingpool = [];
    //adds the number of participants to the matingpool based off
    //of their fitness value
    for(var i = 0; i < this.popsize; i++){
      var n = this.bubbles[i].fitness * 100;//recall fitness between 0 and 1, this line gets the fitness value and multiplies it by 100
      for(var j = 0; j < n; j++){
        this.matingpool.push(this.bubbles[i]);// adds a certain number of participants to the matingpool and this number is determined from the multiplication of the fitness times 100
      }
    }
  }

  selection(){
    var newBubbles = [];
    for(var i = 0; i < this.bubbles.length; i++){
      var parentA = random(this.matingpool).dna;
      var parentB = random(this.matingpool).dna;
      var child = parentA.crossover(parentB);
      child.mutation();
      newBubbles[i] = new Bubble(child);
    }
    this.bubbles = newBubbles;
  }

  run(){
    for(var i = 0; i < this.popsize; i++){
      this.bubbles[i].update();
      this.bubbles[i].show();
    }
  }
}
