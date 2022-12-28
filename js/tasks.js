const createElem = (selector, classList,textContent) =>{
    const elem = document.createElement(selector)
    if (classList!=null) elem.classList.add(classList)
    elem.textContent = textContent
    return elem;
}

export const init = (lists) =>{
    const tasks = document.querySelector(".tasks")
    lists.forEach(list => {
        if(list.tasks!=null) {const listsTask= list.tasks.map((task) => createTask(task))
            tasks.append(...listsTask)
        }
    });
}
export const init2 = (lists) =>{
    const tasks = document.querySelector(".tasks")
    lists.forEach(list => {
        if(list.tasks!=null) {const listsTask= list.tasks.map((task) => createTask(task))
            tasks.append(...listsTask)
        }
    });
}


//TACHES
const createTask = (task) => {
    const elem = createElem('li','task')
    const check = createElem('div',"check")
        const checkbox = createElem('input',"taskCheckbox")
        checkbox.setAttribute("type", "checkbox")
        check.append(checkbox)
    
    const taskDetails = createElem('div','taskDetails')
    taskDetails.setAttribute("data-list", "checkbox")
        const taskName = createElem('h3','taskName',task.name)
        const taskElements = createElem('div','taskElements')
            const taskStep = createElem('div','taskStep',"0 sur 3")
            const taskDeadline = createElem('div','taskDeadline',"Echeance : demain")
            const taskNote = createElem('div','taskNote', 'Note')
            const separator = createElem('div',null,'●')
            const separator2 = createElem('div',null,'●')
            taskElements.append(taskStep,separator,taskDeadline,separator2,taskNote)
        taskDetails.append(taskName,taskElements)
    const bin = createElem('div','bin')
    bin.innerHTML = `<img class="taskSupprimer" src="../logos/bin.svg" alt="">`
    elem.append(check,taskDetails,bin)
 return elem
}

