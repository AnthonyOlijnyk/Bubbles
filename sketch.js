var population;
var lifespan = 400;
var lifeP;
var count = 0;
var target;
var maxforce = 0.2;
var generation = 1;
var genP;
var obstacle = [];
var lifedub;
var oldlifespan;


function setup() {
  var cnv = createCanvas(400,300);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 8;
  cnv.position(x, y);
  population = new Population();
  obstacle[0] = new Obstacle(random(0, 300), random(200, 230), random(100, 200), 10);
  obstacle[1] = new Obstacle(random(0, 300), random(80, 120), random(100, 200), 10);
  obstacle[2] = new Obstacle(random(0, 300), random(150, 175), random(100, 200), 10);
  lifeP = createP();
  lifeP.id('inCode');
  genP = createP();
  genP.id('inCode');
  target = createVector(width/2, 50);
}


function draw() {
  background(25);
  document.getElementById('myButton').onclick = function(){
    lifedub = int(document.getElementById('myText').value);
    return lifedub;
  }
  oldlifespan = lifespan;
  lifespan = lifedub;
  if(lifespan == undefined){
    lifespan = 400;
  } else {
    lifespan = lifedub;
  }
  if (lifespan != oldlifespan){
    count = 0;
    generation = 1;
    population = new Population();
  }
  if(count > lifespan){
    count = 0;
    generation = 1;
    population.evaluate();
    population.selection();
  }
  population.run();
  lifeP.html('Life Time: ' + count);
  genP.html('Generation: ' + generation);
  count++;
  if(count == lifespan){
    population.evaluate();
    population.selection();
    generation++;
    count = 0;
  }

  obstacle[0].show();
  obstacle[1].show();
  obstacle[2].show();

  fill(255, 0, 0);
  ellipse(target.x, target.y, 16, 16);
}
