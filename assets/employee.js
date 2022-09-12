class Employee{
    
    constructor(name,email){
        this._name = name;
        this._email = email;
        this.id =  this.getId()
        this.role = 'Employee'
    
    }

   getId () {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    get name(){
        return this._name

    }

    set name(name){
        this._name = name
    }

    get email(){
        return this._email
    }

    set email(email){
        this._email = email
    }

    get role(){
        return this._role
    }

    set role(role){
        this._role = role
    }
}
module.exports = Employee