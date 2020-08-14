var population;
var popsize;
var popsizedub;
var oldpopsize;
var lifespan = 500;
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
  var cnv = createCanvas(900,300);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 4;
  cnv.position(x, y);
  population = new Population();
  obstacle[0] = new Obstacle(random(200, 300), random(0, 150), 10, random(50, 200));
  obstacle[1] = new Obstacle(random(400, 500), random(0, 150), 10, random(50, 200));
  obstacle[2] = new Obstacle(random(600, 700), random(0, 150), 10, random(50, 200));
  // genP = createP();
  // lifeP = createP();
  // lifeP.id('inCode1');
  // genP.id('inCode2');
  lifeP = document.getElementById('inCode1');
  genP = document.getElementById('inCode2');
  target = createVector(width - 50, random(50, 250));
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
    lifespan = 500;
  } else {
    lifespan = lifedub;
  }

  document.getElementById('myButton2').onclick = function(){
    popsizedub = int(document.getElementById('myText2').value);
    return popsizedub;
  }
  oldpopsize = popsize;
  popsize = popsizedub;

  if(popsize == undefined){
    popsize = 100;
  } else {
    popsize = popsizedub;
  }
  if(popsize != oldpopsize){
    count = 0;
    generation = 1;
    population = new Population();
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
  genP.innerText = "Generation: " + generation;
  lifeP.innerText = "Life Time: " + count;
  // genP.html('Generation: ' + generation);
  // lifeP.html('Life Time: ' + count);
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
