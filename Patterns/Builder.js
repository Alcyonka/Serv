var PlaneBuilder = /** @class */ (function () {
    function PlaneBuilder() {
        this.seats = 1;
        this.turbine = 2;
        this.exits = 1;
    }
    PlaneBuilder.prototype.setSeats = function (amount) {
        this.seats = amount;
        return this;
    };
    PlaneBuilder.prototype.setTurbines = function (amount) {
        this.turbine = amount;
        return this;
    };
    PlaneBuilder.prototype.setExits = function (amount) {
        this.exits = amount;
        return this;
    };
    PlaneBuilder.prototype.build = function () {
        return new Building(this);
    };
    return PlaneBuilder;
}());
var Building = /** @class */ (function () {
    function Building(props) {
        this.plane = props;
    }
    return Building;
}());
var AeroBus = new PlaneBuilder()
    .setSeats(500) // Устанавливаем 500  мест
    .setTurbines(2) // Устанавливаем 2 турбины
    .setExits(6); // устанавливаем 6 выходов
var Boing = new PlaneBuilder()
    .setSeats(600)
    .setTurbines(4)
    .setExits(4);
console.log(AeroBus); // 
console.log(Boing); // 
