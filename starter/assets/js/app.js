
    // Task 1
    let form = document.getElementById("task");
    form.addEventListener("submit", saveTask);
    // Task 2
    var form2 = document.getElementById("taskEdit")
    form2.addEventListener("submit", updateTask);

    let btnEdit = document.getElementById("edit-btn");//Edit task

    var type ;
    // form-check
    let feature = document.getElementById("flexRadioDefault1");
    let bug = document.getElementById("flexRadioDefault2");
    // cart : to do / InProgress / Done
    let todotasks = document.getElementById("to-do-tasks");
    let doingtasks = document.getElementById("in-progress-tasks");
    let donetasks = document.getElementById("done-tasks");

        function afficher() {
            todotasks.innerHTML = "";
            doingtasks.innerHTML = "";
            donetasks.innerHTML = "";

         let TodoCount=0,doneCount=0,InProgressCount=0;

         var count =0 ;
         let description;
   for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status == "To Do") {
        count++ ;
       
        if(tasks[i]["description"].length>=50){
            description=tasks[i]["description"].substring(0,50)
        }else{
        description=tasks[i]["description"]
        }
        tasks[i]["id"] = count; 
        TodoCount++;
            todotasks.innerHTML += `
            <button class="w-80 mb-1 rounded-3 no  border border-white mx-1  border-opacity-50 row p-2"   >
           
            <div class="col-1">
              <i class="fas fa-question-circle fa-1x text-green"></i> 
          </div>
          <div class="col-10">
              <div class="text-start fs-6 fw-bold ">${tasks[i]["title"]}</div>
              <div class="">
                  <div class="text-start  text-gray ">#${count} created in ${tasks[i]["date"]}</div>
                  <div class="text-start" title="">${description}...</div>
              </div>
              <div class="d-flex">
                  <span class="btn btn-primary btn-sm me-1 " ">${tasks[i]["priority"]}</span>
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
            else if (tasks[i].status == "In Progress") {
                count++ ;
                if(tasks[i]["description"].length>=50){
                    description=tasks[i]["description"].substring(0,50)
                }else{
                description=tasks[i]["description"]
                }
                tasks[i]["id"] = count; 
                InProgressCount++;
            doingtasks.innerHTML += `
            <button class="w-80 mb-1  rounded-3 no  border border-white mx-1  border-opacity-50 row p-2 ">
								  <div class="col-1" >
									<i class=" spinner-border spinner-border-sm text-green me-1 " role="status "></i> 
								</div>
								<div class="col-10">
									<div class="text-start fs-6 fw-bold ">${tasks[i]["title"]}</div>
									<div class="">
										<div class="text-start  text-gray ">#${count} created in ${tasks[i]["date"]}</div>
										<div class="text-start" title="">${description}...</div>
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
            else if (tasks[i].status == "Done") {
                if(tasks[i]["description"].length>=50){
                    description=tasks[i]["description"].substring(0,50)
                }else{
                description=tasks[i]["description"]
                }
                count++;
                tasks[i]["id"] = count; 
                doneCount++;
            donetasks.innerHTML += `   
        <button class="w-80 mb-1 rounded-3 no  border border-white mx-1  border-opacity-50 row p-2"  >
        <div class="col-1">
          <i class="fas fa-chevron-circle-down fa-1x text-green p-2 "></i> 
      </div>
      <div class="col-10">
          <div class="text-start fs-6 fw-bold ">${tasks[i]["title"]}</div>
          <div class="col-10">
              <div class="text-start  text-gray ">#${count} created in ${tasks[i]["date"]}</div>
              <div class="text-start" title="">${description}...</div>
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
                        Swal.fire(
                            'good job',
                            'you successfully delete your task',
                            'success'
                        )
                        afficher();
                    }
                }
            }
        function saveTask(e)
        {
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
           $('#edit').modal('show'); //SHOW
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
                    btnEdit.innerHTML=`<button     type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="reset">Close</button>
                    <button type="submit" class="btn btn-primary" onclick="updateTask(${id})">Save edit changes</button>`;
                    // console.log(btnEdit);

        }

        function updateTask(i) 
        {
            // Créez task object
            let task = {
                id :i,
                title: document.getElementById('title').value,
                type: type,
                status:document.getElementById('status').value,
                priority:document.getElementById('priority').value,
                date:document.getElementById('date').value,
                description:document.getElementById('description').value
            }
            // Remplacer ancienne task par nouvelle task
            tasks[i-1]=task;
            $('#edit').modal('hide'); 
            afficher();
        }
    
