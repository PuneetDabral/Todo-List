//requried element 
const inputbox = document.querySelector(".inputfield input");
const addbtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todolist");
const deleteAllbtn = document.querySelector(".footer button");

inputbox.onkeyup = ()=>{
    let userData = inputbox.value; //getting user entered value 
    if(userData.trim() !=0){ //if user values aren't only space 
        addbtn.classList.add("active"); //active add button
    }
    else{
        addbtn.classList.remove("active"); //unactive add button
    }
}
showTasks(); //calling show task function 




//if user click the add button 
 
addbtn.onclick =()=>{ //geeting local storage 
    let userData = inputbox.value;;
    let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage 

    if(getLocalStorage ==null){ //if local storage is null
        listArr =[];  //creating blank arrey
    }else{
        listArr =JSON.parse(getLocalStorage); //transforming jason string 
    }

   
    
    listArr.push(userData);//pusing or adding user data 
    localStorage.setItem("New Todo",JSON.stringify(listArr)); //transforming js object inti a json string 
    showTasks(); //calling show task function 
}
//function to add task list inside ui
function showTasks()
{
    let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage 

    if(getLocalStorage ==null){ //if local storage is null
        listArr =[];  //creating blank arrey
    }else{
        listArr =JSON.parse(getLocalStorage); //transforming jason string 
    }
    let newLiTag ='';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick = "deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
        
    });
    todoList.innerHTML = newLiTag  //adding new li tag inside ul tag
    inputbox.value =""; //once task added leave the input field blank 
}

//delete task function
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage 
    listArr =JSON.parse(getLocalStorage);
    listArr.splice(index, 1); //delete or remove the perticula index

    //after remove the li again update the local storage
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}
//delete all task button 
deleteAllbtn.onclick=() =>

{
    listArr =[];  //creating blank arrey
    //after delete all the atsk again update the local storage 
    localStorage.setItem("New Todo",JSON.stringify(listArr)); //transforming js object inti a json string 
showTasks();
}
