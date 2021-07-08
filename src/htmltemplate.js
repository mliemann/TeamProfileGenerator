let generatehtmlPage = teamObj => {
    console.log('team object', teamObj)

    let htmlCard = ""
    for(let i = 0; i < teamObj.length; i++){
        field
        finalPrompt
        if (teamObj[i].role === "Manager"){
            var field = "Office Number"
            var finalPrompt = teamObj[i].office
        } else if (teamObj[i].role === "Employee"){
            var field = "Employee Role"
            var finalPrompt = " Unknown"
        }else if(teamObj[i].role === "Engineer"){
            var field = "Github"
            var finalPrompt = teamObj[i].gitHub
        } else if(teamObj[i].role === "Intern"){
            var field = "School Name"
             finalPrompt = teamObj[i].school
        } 
        let finalOption = field + ":" + finalPrompt 
        

       //html 
        let {name, role, email, id} = teamObj[i]
        htmlCard+= `
         <div class="card col" style="width: 18rem;">
         <div class="card-body card-header">
             <h5 class="card-title">${name}</h5>
             <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
         </div>
         <ul class="list-group list-group-flush">
             <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
             <li class="list-group-item">Employee ID: ${id}</li>
             <li class="list-group-item"> ${finalOption}</li>
             
             
         </ul>
         </div>`
         
     }

     return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Member Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        
    
    </head>
    
    <body>
        <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">Team</span>
            </div>
        </nav>
    
        <main class="container">
            <div class="row">
    
             ${htmlCard}
    
                
            </div>
    
        </main>
    
    
    
    </body>
    
    </html>` 

      
    

}


module.exports = generatehtmlPage;


