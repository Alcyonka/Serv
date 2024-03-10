var DataBaseAccess = /** @class */ (function () {
    function DataBaseAccess() {
    }
    DataBaseAccess.prototype.open = function () { console.log('Добро пожаловать!'); };
    DataBaseAccess.prototype.close = function () { console.log('Закрыть'); };
    return DataBaseAccess;
}());
;
var SecuritySystem = /** @class */ (function () {
    function SecuritySystem(helloPage) {
        this.helloPage = helloPage;
    }
    SecuritySystem.prototype.open = function (password) {
        if (this.authenticate(password)) {
            this.helloPage.open();
        }
        else {
            console.log('Доступ запрещен!');
        }
    };
    SecuritySystem.prototype.authenticate = function (password) {
        return password === 'Parolka';
    };
    SecuritySystem.prototype.close = function () {
        this.helloPage.close();
    };
    return SecuritySystem;
}());
;
var door = new SecuritySystem(new DataBaseAccess());
door.open('Hrenlala');
door.open('Parolka');
door.close();
