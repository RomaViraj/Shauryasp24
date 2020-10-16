class Dustbin {
constructor(x,y,width,height,angle){
this.angle=angle
this.x=x
this.y=y
this.width=20
this.height=200
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
Matter.Body.setAngle(this.body,-1*this.angle)//-1*this.angle
World.add(world, this.body);

}
display(){
    var pos =this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    fill ("red")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    
    pop()
}









}





    


































