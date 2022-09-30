const inquierer = require('inquirer')

const Manager = require('./assets/manager')
const Engineer = require('./assets/engineer')
const Intern = require('./assets/intern')

const team = [];

async function getData(){
    const prompt = inquierer.createPromptModule()
    

   function managerSubMenu(roll){
        
    const managerPrompt = prompt(
        [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name?'
            },

            {
                type: 'input',
                name: 'email',
                message: 'what is you email'
            },

            {
                type: 'number',
                name: 'officeNumber',
                message: 'What is your office number.'
            }
            
        ]
        
    ).then(data=>{
        data.roll = roll
        team.push(data);
        console.log(team);
        getData()
    })
   }

   function engineerSubMenu(roll){
    const egineerPrompt = prompt(
        [
            {
                type: 'input',
                name: 'name',
                message:'What is the name'
            },

            {
                type: 'input',
                name: 'email',
                message: 'what is you email'
            },

            {
                type: 'input',
                name: 'gitHub',
                message: 'What is your github account.'
            }
            
        ]
    ).then(data=>{
        data.roll = roll
        team.push(data);
        console.log(team);
        getData()
    })
   }

   function internSubMenu(roll){
    const internPrompt = prompt(
        [
            {
                type: 'input',
                name: 'name',
                message:'What is the name'
            },

            {
                type: 'input',
                name: 'email',
                message: 'what is you email'
            },

            {
                type: 'input',
                name: 'school',
                message: 'What school did you attend.'
            }
            
        ]
    ).then(data=>{
        data.roll = roll
        team.push(data);
        console.log(team);
        getData()
    })
   }

   

   

   

    const teamData = prompt(
    [
        {
        type: 'rawlist',
        message: 'Team member',
        name:'teamMember',
        choices: ['Manager','Intern','Engineer','Quit']
        }

    ]
    )
    let results =  await teamData
    
    switch(results.teamMember){
        case 'Manager':
            managerSubMenu(results.teamMember);
            break;
        case 'Intern':
            internSubMenu(results.teamMember);
            break;
            
        case 'Engineer':
            engineerSubMenu(results.teamMember);
            break;

        case 'Quit':
            assignClasses()
            break;
        default:
            console.log('error');
            break;
    }
   
    // assignClasses(teamData)
    
}




function assignClasses(f){
    const teamMembers = []

    for(let member of team){
        switch(member.roll){
            case 'Manager':
               
                teamMembers.push(new Manager(member.name,member.email,member.officeNumber));
                break;

            case 'Intern':
            
            teamMembers.push(new Intern(member.name,member.email,member.school));
            break;

            case 'Engineer':
               
                teamMembers.push(new Engineer(member.name,member.email,member.gitHub));
                break;
                
        }
    }
    console.log(teamMembers[0])
    return teamMembers
}




getData()

