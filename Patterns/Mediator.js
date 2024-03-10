var ForumMediator = /** @class */ (function () {
    function ForumMediator() {
        this.users = [];
    }
    ForumMediator.prototype.userPost = function (user, post) {
        var name = user.getName();
        console.log(" ".concat(name, ":  ").concat(post));
        this.addToUsersList(name);
    };
    ForumMediator.prototype.addToUsersList = function (name) {
        this.users.push(name);
    };
    ForumMediator.prototype.getUserList = function () {
        return this.users;
    };
    return ForumMediator;
}());
;
var User = /** @class */ (function () {
    function User(name, forum) {
        this.name = name;
        this.forum = forum;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.makePost = function (post) {
        this.forum.userPost(this, post);
    };
    return User;
}());
;
var mediator = new ForumMediator();
var Pupkin = new User('Pupkin', mediator);
var Tutkin = new User('Tutkin', mediator);
Pupkin.makePost('Я мастер решения задач!');
Tutkin.makePost('Жжешь!');
