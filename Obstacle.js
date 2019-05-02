class Obstacle{
    constructor(rx, ry, rw, rh){
        this.rx = rx;
        this.ry = ry;
        this.rw = rw;
        this.rh = rh;
    }

    

    show(){
        fill(255);
        rect(this.rx, this.ry, this.rw, this.rh);
    }



}