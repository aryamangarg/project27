class paper{
    constructor(){200,600,40,40
    var options = {
        isStatic:fasle
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode=(CENTER)
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height)
    }
    
    }