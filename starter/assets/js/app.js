

    let form = document.getElementById("task");
    form.addEventListener("submit", saveTask);
    var form2 = document.getElementById("taskEdit")
    form2.addEventListener("submit", updateTask);


    var type ;

    let btnEdit = document.getElementById("edit-btn");
    let feature = document.getElementById("flexRadioDefault1");
    let bug = document.getElementById("flexRadioDefault2");


    let todotasks = document.getElementById("to-do-tasks");
    let doingtasks = document.getElementById("in-progress-tasks");
    let donetasks = document.getElementById("done-tasks");


        function afficher() {
            todotasks.innerHTML = "";
            doingtasks.innerHTML = "";
            donetasks.innerHTML = "";

         let TodoCount=0,doneCount=0,InProgressCount=0;
         var count =0 ;
   for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].status == "To Do") {
            count++ ;
        tasks[i]["id"] = count; 
        TodoCount++;
            todotasks.innerHTML += `
            <button class="w-80 mb-1 rounded-3 no  border border-white mx-1  border-opacity-50 row p-2"  >
           
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
              <div class="d-flex">
              <i class="fas fa-trash text-danger m-2" onclick="updatedelete(${count})"  ></i>
              <i class="fas fa-pen text-green  m-2" onclick="editTask(${count})" ></i>

          </div>
          </div>
      </button>
        `
            }
            if (tasks[i].status == "In Progress") {
                count++ ;
                tasks[i]["id"] = count; 
                InProgressCount++;
            doingtasks.innerHTML += `
            <button class="w-80 mb-1  rounded-3 no  border border-white mx-1  border-opacity-50 row p-2 " >
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
                                    <div class="d-flex">
                                    <i class="fas fa-trash text-danger m-2" onclick="updatedelete(${count})"  ></i>
                                    <i class="fas fa-pen text-green  m-2" onclick="editTask(${count})" ></i>
									</div>
								</div>
							</button>`
            }
            
            if (tasks[i].status == "Done") {
                count++;
                tasks[i]["id"] = count; 
                doneCount++;
            donetasks.innerHTML += `   
        <button class="w-80 mb-1 rounded-3 no  border border-white mx-1  border-opacity-50 row p-2" >
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
          <div class="d-flex">
          <i class="fas fa-trash text-danger m-2" onclick="updatedelete(${count})"  ></i>
          <i class="fas fa-pen text-green  m-2" onclick="editTask(${count})" ></i>
      </div>
      </div>
  </button>
        `
        }
        if (tasks[i].status == "Done") {
            doingtasks.innerHTML += ``
        }
    }

    document.getElementById('to-do-tasks-count').innerHTML=`${TodoCount}`;
    document.getElementById('in-progress-tasks-count').innerHTML=`${InProgressCount}`;
    document.getElementById('done-tasks-count').innerHTML=`${doneCount}`;
    
}
afficher();
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
function createTask() {
        
    // document.getElementById("send").addEventListener("click", )
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
}

function saveTask(e) {
    // stop reload
    e.preventDefault();
    let type;
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

    tasks.push(task);
    // console.log(tasks);
    Swal.fire(
        'good job',
        'you successfully saved your task',
        'success'
      )
      $('#task').modal('hide');
    afficher();
   
    
}

function editTask(id)
 {

    $('#edit').modal('show');
    for(i=0; i<tasks.length ; i++)
    {
               if(id== tasks[i].id)
               {
                // let type ;
                if(tasks[i].type =="feature") {
                   formEdit.type.checked = true;
                } else {
                   type = "bug"
                }
                
                document.getElementById('title').value =tasks[i].title;
                document.getElementById('status').value=tasks[i].status;
                document.getElementById('priority').value=tasks[i].priority;
                document.getElementById('date').value=tasks[i].date;
                document.getElementById('description').value =tasks[i].description;
                    
               }
    }
            btnEdit.innerHTML=`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="reset">Close</button>
            <button type="submit" class="btn btn-primary" onclick="updateTask(${id})">Save edit changes</button>`;
           
            // console.log(btnEdit);
            
}

function updateTask(i) {
    // GET TASK ATTRIBUTES FROM INPUTS

console.log("hiiii");
    // Créez task object
    console.log(tasks[i]);
    let task = {
        id :i,
        title: document.getElementById('title').value,
        type: type,
        status:document.getElementById('status').value,
        priority:document.getElementById('priority').value,
        date:document.getElementById('date').value,
        description:document.getElementById('description').value
    }
    console.log(task);
    // Remplacer ancienne task par nouvelle task
    tasks[i-1]=task;
    
    // Fermer Modal form
    $('#edit').modal('hide');
    // Refresh tasks
    
    afficher();
    
    
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


