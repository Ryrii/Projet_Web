export const init = (lists) => {
    const root = document.querySelector(".listes")

	const listsElem = lists.map((list) => createList(list))

    root.append(...listsElem)


}

const createList = (list) => {
    const elem = document.createElement("li")

    const listName = document.createElement('p')
    listName.classList.add('listName')
    listName.textContent = list.name
    const listNbTask = document.createElement('p')
    if (list.tasks != null) {
        listNbTask.classList.add('listNbTask')
        listNbTask.textContent = list.tasks.length
    }
    elem.append(listName,listNbTask)

    return elem
}