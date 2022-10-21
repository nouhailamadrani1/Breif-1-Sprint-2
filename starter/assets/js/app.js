
/**
 * 
 * In this file app.js you will find all CRUD functions name.
 * 
 */
let form = document.getElementById("task")
form.addEventListener("submit", saveTask)

let feature = document.getElementById("flexRadioDefault1")
let bug = document.getElementById("flexRadioDefault2")
function createTask() {
        
    // document.getElementById("send").addEventListener("click", )
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
}

function saveTask(e) {
    // stop reload
    e.preventDefault()
    let type
    if(feature.checked) {
        type = "feature"
    } else {
        type = "bug"
    }
    let task = {
        id: tasks.length + 1,
        title: form.title.value,
        type: type,
        status:form.status.value,
        priority:form.priority.value,
        date:form.date.value,
        description:form.description.value   
    }

    tasks.push(task)
    console.log(tasks);
    afficher()
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}
let todotasks = document.getElementById("to-do-tasks");
 let doingtasks = document.getElementById("in-progress-tasks");
 let donetasks = document.getElementById("done-tasks");
 afficher()
 console.log(tasks);
 function afficher() {
   todotasks.innerHTML = "";
   doingtasks.innerHTML = "";
   donetasks.innerHTML = "";
   var count =0 ;
   for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].status == "To Do") {
 count++ ;
tasks[i]["id"] = count; 
            todotasks.innerHTML += `
            <button class="w-80 mb-1 rounded-3 no  border border-white mx-1  border-opacity-50 row p-2" onclick="updatedelete(${count})">
            <div class="col-1">
              <i class="fas fa-question-circle fa-1x text-green"></i> 
          </div>
          <div class="col-10">
              <div class="text-start fs-6 fw-bold ">${tasks[i]["title"]}</div>
              <div class="">
                  <div class="text-start  text-gray ">#${count} created in ${tasks[i]["date"]}</div>
                  <div class="text-start" title="">${tasks[i]["description"]}</div>
              </div>
              <div class="d-flex">
                  <span class="btn btn-primary btn-sm me-1 ">${tasks[i]["priority"]}</span>
                  <span class="btn1 btn-primary btn-sm text-black bg-gray-100-800">${tasks[i]["type"]}</span>
              </div>
          </div>
      </button>
        `
            }
            if (tasks[i].status == "In Progress") {
                count++ ;
                tasks[i]["id"] = count; 
            doingtasks.innerHTML += `
            <button class="w-80 mb-1  rounded-3 no  border border-white mx-1  border-opacity-50 row p-2 " onclick="updatedelete(${count})">
								  <div class="col-1" >
									<i class=" spinner-border spinner-border-sm text-green me-1 " role="status "></i> 
								</div>
								<div class="col-10">
									<div class="text-start fs-6 fw-bold ">${tasks[i]["title"]}</div>
									<div class="">
										<div class="text-start  text-gray ">#${count} created in ${tasks[i]["date"]}</div>
										<div class="text-start" title="">${tasks[i]["description"]}</div>
									</div>
									<div class="d-flex">
										<span class="btn btn-primary btn-sm me-1 ">${tasks[i]["priority"]}</span>
										<span class="btn1 btn-primary btn-sm text-black bg-gray-100-800">${tasks[i]["type"]}</span>
									</div>
								</div>
							</button>`
            }
            
            if (tasks[i].status == "Done") {
                count++;
                tasks[i]["id"] = count; 
            donetasks.innerHTML += `
                        
            
        
        <button class="w-80 mb-1 rounded-3 no  border border-white mx-1  border-opacity-50 row p-2" onclick="updatedelete(${count})">
        <div class="col-1">
          <i class="fas fa-chevron-circle-down fa-1x text-green p-2 "></i> 
      </div>
      <div class="col-10">
          <div class="text-start fs-6 fw-bold ">${tasks[i]["title"]}</div>
          <div class="col-10">
              <div class="text-start  text-gray ">#${count} created in ${tasks[i]["date"]}</div>
              <div class="text-start" title="">${tasks[i]["description"]}</div>
          </div>
          <div class="d-flex">
              <span class="btn btn-primary btn-sm me-1 ">${tasks[i]["priority"]}</span>
              <span class="btn1 btn-primary btn-sm text-black bg-gray-100-800">${tasks[i]["type"]}</span>
          </div>
      </div>
  </button>
        `
        }
        if (tasks[i].status == "Done") {
            doingtasks.innerHTML += ``
        }
    }
}
function updatedelete(id)
{
    for(i=0; i<tasks.length ; i++){
        if(id== tasks[i].id)
        {
            tasks.splice(id-1,1);
            afficher();
        }
    }
    
}
