let list_element = document.querySelector(".studentlist");
let studentList = list_element.children;


let studentinputvalue = document.getElementById("studentinput");
let showfoundstudent = document.getElementById("showstudent");

let searchtext = document.getElementById("findvalue");
let foundStudent;


function addstudent() {
    let newstudent = studentinputvalue.value.trim();

    if (newstudent != null && newstudent != "") {
        let newstudent = document.createElement("li");
        newstudent.innerHTML = studentinputvalue.value;
        list_element.appendChild(newstudent);
        studentinputvalue.value = "";

    }
    else {
        console.log("Enter a Value");
    }

}

function addInBulk() {
    let bulkstudentlist = ["senthil", "varshini", "sakthi"];
    for (let i = 0; i < bulkstudentlist.length; i++) {
        let bulknew = document.createElement("li");

        bulknew.innerHTML = bulkstudentlist[i];
        list_element.appendChild(bulknew);
        bulknew.classList.add("Newlyaddded");
    }
}

function findstudent() {

    if (foundStudent) {
        foundStudent.classList.remove("selected");
        foundStudent = null;
    }


    if (searchtext.value) {
        for (let i = 0; i < studentList.length; i++) {
            if (studentList[i].innerHTML.toLowerCase().includes(searchtext.value.toLowerCase())) {
                foundStudent = studentList[i];
                break;
            } else if (searchtext.value.toLowerCase().includes(studentList[i].innerHTML.toLowerCase())) {
                foundStudent = studentList[i];
                break;
            }
        }
    } else {
        console.log("Enter search text");
    }


    if (foundStudent) {

        let showfoundstudent = document.getElementById("showstudent");
        showfoundstudent.value = foundStudent.innerHTML;

        //foundStudent.style.backgroundColor = "red";
        foundStudent.classList.add("selected");

    } else {
        console.log("No student found with that name.");
    }
}

function deletestudent() {
    if (foundStudent) {

        foundStudent.remove();
        foundStudent = null;
        console.log("Student deleted.");

        showfoundstudent.value = "";
        searchtext.value = "";

    } else {
        console.log("No student selected for deletion.");
    }
}
