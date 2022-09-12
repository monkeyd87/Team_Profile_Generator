const Employee = require('./employee')
console.log('running');

class Engineer extends Employee {
    constructor(name,email,github) {
        super(name,email);
        this.role ='Engineer';
        this._github = github


    }
   get github(){
    return `https://github.com/${this._github}`

   }
}

