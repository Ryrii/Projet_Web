import * as pageFill from "./homeFill.js"
import * as Server from "./server.js"
import * as Lists from "./lists.js"
import * as Tasks from "./tasks.js"
import * as TaskDetails from "./taskDetails.js"

// Server.suppTask("Projet tutoré","Projet tutoré task1")

//INITIALISER LA PAGE D'ACCUEIL
const lists = Server.lists
Lists.init(lists)
// Tasks.init(lists)
Tasks.init(lists)


//AFFICHER DETAIL TACHE
const modifyTask = document.querySelector(".modifyTaskAndgriser");
const taskDetails = document.querySelectorAll(".taskDetails");

taskDetails.forEach((task) => {
    // task.onclick = () => {ouvrir(modifyTask);}
    task.addEventListener("click",() => {
        ouvrir(modifyTask)
        TaskDetails.init('dataTask')
    })
});
    

const ouvrir= (elem) => {
    elem.style.display = 'flex';
}

//FERMER DETAIL TACHE
const closeTasks = document.querySelectorAll(".closeTask");

const fermer= (elem) => {
    elem.style.display = 'none';
}

closeTasks.forEach((closeTask) => {
    closeTask.onclick = () => {fermer(modifyTask);}
});

//BARRER TACHE CHECKED
const taskCheckboxs = document.querySelectorAll(".taskCheckbox");

export const barrerText = (check,elemParent,elemBarrer) => {
    const taskText = check.closest(elemParent).querySelector(elemBarrer);
    lineText(check,taskText);
    check.onclick = () => {lineText(check,taskText);}
}


const lineText= (check,text) => {
    if (check.checked === true){
        text.style.textDecoration = "line-through";
    }
    else{
        text.style.textDecoration = "none";;
    }
}
taskCheckboxs.forEach((taskCheckbox) => {
    barrerText(taskCheckbox,".task","h3")
});

//INITIALISER TACHE DETAILS
	
try {
    const response = await fetch("http://localhost:3000/list", {
        method: "GET",
        headers:{"Content-Type": "application/json"}
      })
    const data = await response.json()
    console.log(data)
    	

  } catch (err) {
    console.error(err)
  }

// let response = await fetch("http://localhost:3000");

// if (response.ok) { // if HTTP-status is 200-299
//   // obtenir le corps de réponse (la méthode expliquée ci-dessous)
//   let json = await response.json();
// } else {
//   alert("HTTP-Error: " + response.status);
// }