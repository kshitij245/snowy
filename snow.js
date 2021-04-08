class snow{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0.4,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("snow4.webp")
		
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var snowPos=this.body.position;	
		push()
		translate(snowPos.x, snowPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.r*1, this.r*1)
		pop()
 }
}