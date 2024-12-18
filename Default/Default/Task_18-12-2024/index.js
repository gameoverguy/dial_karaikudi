let student_list = document.querySelectorAll(".studentlist");
let studentinputvalue = document.getElementById("studentinput");

function addstudent(){
    let newstudent = document.createElement("li");
    newstudent.innerHTML = studentinputvalue.value;
    student_list[0].appendChild(newstudent);
}


function addInBulk(){
    let bulkstudentlist = ["senthil","varshini","sakthi"];
    for (let i = 0; i < bulkstudentlist.length; i++) {
        let bulknew = document.createElement("li");

        bulknew.innerHTML = bulkstudentlist[i];
        student_list[0].appendChild(bulknew);
        bulknew.classList.add("Newlyaddded");
    }
}


