var population;
var lifespan = 400;
var lifeP;
var count = 0;
var target;
var maxforce = 0.2;
var generation = 1;
var genP;
var obstacle = [];


function setup() {
  createCanvas(400,300);
  population = new Population();
  obstacle[0] = new Obstacle(125, 150, 300, 10);
  obstacle[1] = new Obstacle(0, 150, 50, 10)
  lifeP = createP();
  genP = createP();
  target = createVector(width/2, 50);
}

function draw() {
  background(0);
  population.run();
  lifeP.html('Life Time: ' + count);
  genP.html('Generation: ' + generation);
  count++;
  if(count == lifespan){
    population.evaluate();
    population.selection();
    generation++;
    //population = new Population();
    count = 0;
  }

  obstacle[0].show();
  obstacle[1].show();

  fill(255, 0, 0);
  ellipse(target.x, target.y, 16, 16);
}
