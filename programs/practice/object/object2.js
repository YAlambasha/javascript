
{
    let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}
console.log("first="+this.brand);
let bike = {
    brand: 'Harley Davidson'
}

let brand = car.getBrand.bind(bike);
console.log(brand());
}

{
    function Car() {
        this.speed = 120;
      }
      
      Car.prototype.getSpeed = () => {
        return this.speed;
      };
      
      var car = new Car();
      console.log(car.getSpeed());
}