const inquierer = require('inquirer')

const fs = require('fs')

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
            makeHtml(assignClasses())
            // assignClasses()
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

function makeHtml(data){
    const compiledTeam = []
    let icon
    for(let d of data){
        switch(d.role){
            case 'Manager':
                icon = '⭐️';
                break;
            case 'Intern':
                icon = '🎓';
                break;
            case 'Engineer':
                icon = '⚙️';
                break;
            default:
                icon = '🛑'
        }
       compiledTeam.push(`
        <div class="card">
            <div class="row bg-success">
                <h3 class="text-light">${d.role}+${icon}</h3>
            </div>
            <div class="row ">
                <h4>${d.name?d.name:'name'}</h2>
            </div>
            <div class="row">
               <a href="mailto:${d.email}">${d.email}</a>
                <strong>${d.officeNumber? d.officeNumber:d.school? d.school: d.github? `<a href=${d.github}>${d.github}</a>`: 'error'}</strong>
            </div>
            <div class='row bg-warning'>
                <p class='text-danger'>${d.id}</p>
            </div>
        </div> \n`)
    }
   
    const employee =compiledTeam.join('\n')

    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">

    </head>
    <body>
        <div class="container-fluid">
            <div class="row bg-danger p-2 ">
                <h1 class="text-light text-center">My Team</h1>
            </div>
            <div class="row main d-flex">
                ${employee}

            </div>
        </div>
        
    </body>
    </html>`
        fs.writeFile('team.html',html,(err)=>console.log(err))
}


getData()

