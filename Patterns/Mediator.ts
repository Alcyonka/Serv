class ForumMediator{
   users:string[];
  constructor(){
    this.users=[];
  }
  userPost(user:User, post:string){
    const name = user.getName();
    console.log(` ${name}:  ${post}`);
    this.addToUsersList(name);
  }
addToUsersList(name:string){
  this.users.push(name);
}
getUserList(){
  return this.users;
}
};
class User{
    name:string;
    forum:ForumMediator;
  constructor(name:string, forum:ForumMediator){
    this.name=name;
    this.forum=forum;
  }
getName(){
  return this.name;
}
makePost(post:string){
  this.forum.userPost(this, post);
}
};
const mediator=new ForumMediator();
const Pupkin = new User('Pupkin', mediator);
const Tutkin = new User('Tutkin', mediator);
Pupkin.makePost('Я мастер решения задач!');
Tutkin.makePost('Жжешь!');
