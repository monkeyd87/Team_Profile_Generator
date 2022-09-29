const Employee = require('./employee')


class Intern extends Employee {
    constructor(name,email,school) {
        super(name,email);
        this.role ='Intern';
        this._school = school

    }
   get school(){
    return this._school
   }

   set school(school){
    this._school = school
   }
}

module.exports = Intern

