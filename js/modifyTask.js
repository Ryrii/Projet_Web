import {barrerText} from './home.js';
import {suppElem} from './home.js';

const stepCheckboxs = document.querySelectorAll(".stepCheckbox");
const stepDeletes = document.querySelectorAll(".stepDelete");

//barrer Text
stepCheckboxs.forEach((stepCheckbox) => {
    barrerText(stepCheckbox,".step",".stepInput")
});

//supprimer elem
stepDeletes.forEach((stepSupprimer) => {
    stepSupprimer.onclick = () => {suppElem(stepSupprimer,".step");}
});

//-------------------------------------

import * as Server from "./server.js"
const task1 = Server.task1
const stepArray = Server.task1.steps

const init = () => {
    const steps = document.querySelector(".steps")

	const stepArray2 = stepArray.map((step) => createNewStep(step))

    steps.append(...stepArray2)

}

//ajouter étape
const addStepButton = document.querySelector(".addStepButton")
addStepButton.addEventListener("click",()=>{
    const steps = document.querySelector(".steps")
    const addStepInput = document.getElementById("addStepInput")
    const newStep = createNewStep(addStepInput.value);
    steps.append(newStep)
})



const createNewStep = (step) => {
const newStep = document.createElement("li");
newStep.classList.add('modifyTaskElem', 'step');

const check = document.createElement("div");
check.classList.add('check');

    const stepCheckbox = document.createElement("input");
    stepCheckbox.classList.add('stepCheckbox');
    stepCheckbox.setAttribute("type", "checkbox");
    check.append(stepCheckbox);

const stepInput = document.createElement("input");
stepInput.classList.add('stepInput')
stepInput.setAttribute('type','text')
stepInput.setAttribute('name','step')
stepInput.setAttribute('readonly','readonly')
stepInput.value = step


const stepDelete = document.createElement("div");
stepDelete.classList.add('stepDelete');
stepDelete.insertAdjacentHTML("beforeend", `
<img class="stepDeleteLogo" src="../logos/supprimer.svg" alt="">
`);

newStep.append(check,stepInput,stepDelete);

barrerText(stepCheckbox,".step",".stepInput")
stepDelete.onclick = () => {suppElem(stepDelete,".step");}

return newStep
}


init()