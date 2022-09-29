const Employee = require('./employee')

class Manager extends Employee {
    constructor(name,email) {
        super(name,email,officeNumber);
        this.role ='Manager';
        this._officeNumber = officeNumber

    }
   get officeNumber(){
    return this.officeNumber
   }

   set officeNumber(num){
    this._officeNumber = num
   }
}

module.exports = Manager
