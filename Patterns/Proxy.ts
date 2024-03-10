

class DataBaseAccess{
  open(){  console.log('Добро пожаловать!');}
  close(){console.log('Закрыть');}
};
class SecuritySystem{
  helloPage: DataBaseAccess;
  constructor(helloPage:DataBaseAccess){
    this.helloPage=helloPage;
  }
  open(password: string){
  if (this.authenticate(password)){
	this.helloPage.open();
  }else{
	console.log('Доступ запрещен!');
  }
}
authenticate(password: string){
	return password==='Parolka';
}
close(){
	this.helloPage.close();
}
};
const door = new SecuritySystem(new DataBaseAccess());
door.open('Hrenlala');
door.open('Parolka');
door.close();