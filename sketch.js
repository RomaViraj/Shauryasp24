
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	paper= new Paper(200,100,50)

	ground = new  Ground(400,700,width,40);
	
	//Create the Bodies Here.
	dustbin1 = new Dustbin(580,620)
	dustbin2 = new Dustbin(599,700)
	dustbin3 = new Dustbin(619,700)
	dustbin4 = new Dustbin(639,700)
	dustbin5 = new Dustbin(659,700)
	dustbin6 = new Dustbin(679,700)
	dustbin7 = new Dustbin(699,700)
	dustbin8 = new Dustbin(719,700)
	dustbin9 = new Dustbin(739,700)
	dustbin10 = new Dustbin(759,700)
	dustbin11= new Dustbin(779,700)
	dustbin12= new Dustbin(799,620)


	
	
	Engine.run(engine);

}

	
  

	


function draw(){
    background("black");
    Engine.update(engine);
    
text(mouseX+","+mouseY,mouseX,mouseY)
paper.display();



  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbin4.display();
  dustbin5.display();
  dustbin6.display();
  dustbin7.display();
  dustbin8.display();
  dustbin9.display();
  dustbin10.display();
  dustbin11.display();
  dustbin12.display();
  ground.display();




}
function keyPressed (){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-85})
}


}


