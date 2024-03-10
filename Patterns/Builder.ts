class PlaneBuilder{

    public seats: number;
    public turbine: number;
    public exits: number;
 constructor() {
   this.seats = 1;
   this.turbine = 2;
   this.exits = 1;
 }

 setSeats(amount:number) {
   this.seats = amount;
   return this;
 }

 setTurbines(amount:number) {
   this.turbine = amount;
   return this;
 }

 setExits(amount:number) {
   this.exits = amount;
   return this;
 }



 build() {
   return new Building(this);
 }

}

class Building {

 public plane: PlaneBuilder;

 constructor(props:PlaneBuilder) {

   this.plane=props;
 }


}

const AeroBus = new PlaneBuilder()
 .setSeats(500) // Устанавливаем 500  мест
 .setTurbines(2) // Устанавливаем 2 турбины
 .setExits(6) // устанавливаем 6 выходов


const Boing = new PlaneBuilder()
 .setSeats(600) 
 .setTurbines(4) 
 .setExits(4) 


console.log(AeroBus); // 
console.log(Boing); // 