
class Bubble{
  constructor(dna){
    this.pos = createVector(30, height/2);
    this.vel = createVector();
    this.acc = createVector();
    this.completed = false;
    this.crashed = false;
    if(dna){
      this.dna = dna;
    } else {
      this.dna = new DNA();
    }
    this.fitness = 0;

  }
  



  applyForce(force){
    this.acc.add(force);
  }

  calcFitness(){
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    this.fitness = map(d, 0, width, width, 0) - (count / (lifespan * 7));
    if(this.completed){
      this.fitness *= 3;
    }
    if(this.crashed){
      this.fitness /= 12;
    }

  }


  update(){
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    if(d < 10){
      this.completed = true;
      this.pos = target.copy();
    }

    if(this.pos.x > obstacle[0].rx && this.pos.x < obstacle[0].rx + obstacle[0].rw && this.pos.y > obstacle[0].ry && this.pos.y < obstacle[0].ry + obstacle[0].rh){
      this.crashed = true;
    }

    if(this.pos.x > obstacle[1].rx && this.pos.x < obstacle[1].rx + obstacle[1].rw && this.pos.y > obstacle[1].ry && this.pos.y < obstacle[1].ry + obstacle[1].rh){
      this.crashed = true;
    }

    if(this.pos.x > obstacle[2].rx && this.pos.x < obstacle[2].rx + obstacle[2].rw && this.pos.y > obstacle[2].ry && this.pos.y < obstacle[2].ry + obstacle[2].rh){
      this.crashed = true;
    }

    if(this.pos.x > width || this.pos.x < 0){
      this.crashed = true;
    }

    if(this.pos.y > height || this.pos.y < 0){
      this.crashed = true;
    }

    this.applyForce(this.dna.genes[count]);
    if(!this.completed && !this.crashed){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0.1);
    this.vel.limit(4);
  }
}

  show(){
    push();
    noStroke();
    fill(0, 255, 255, 150);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    ellipse(0, 0, 5, 5);
    pop();
  }



}
