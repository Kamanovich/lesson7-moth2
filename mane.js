class GroundTransport {
    constructor(title, price, color, model) {
        this.title = title;
        this.price = price;
        this.color = color;
        this.model = model;
    }
}
class Car extends GroundTransport {
    constructor(title, price, color, model) {
        super(title, price, color, model);
    }
}
const Hyundai = new Car('Hyundai','1.759.000','blue','solaris')
const Aurus = new Car ('Aurus','18.000.000','black','senat' )
const BMW =new Car('BMW','9.400.000','green','M3')

class AirTransport {
    constructor(color, model, speed, mass){
        this.color = color;
        this.model = model;
        this.speed = speed;
        this.mass = mass;
    }
}
class airplane extends AirTransport {
    constructor(model, color, speed, mass) {
        super(model, color, speed, mass);
    }
}
const su = new airplane('metalic','Су-39', '950','21 500')
const mig = new airplane('white','МиГ-29','2400','14 750')
const l = new airplane('green', 'Л-39','750','5 670')
console.log(su,mig,l);
