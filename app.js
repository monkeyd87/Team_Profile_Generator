const inquierer = require('inquirer')

const Manager = require('./assets/manager')

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
    
    if(results.teamMember !== 'Quit'){

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
            default:
                console.log('error');
                break;
        }
    }else{
        return
    }

       
   
    
}



getData()
