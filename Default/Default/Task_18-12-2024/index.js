let list_element = document.querySelector(".studentlist");
let studentList = list_element.children;


let studentinputvalue = document.getElementById("studentinput");
let showfoundstudent = document.getElementById("showstudent");

let searchtext = document.getElementById("findvalue");
let foundStudent;


let statusText = document.getElementById("status");


function addstudent() {
    let newstudent = studentinputvalue.value.trim();

    if (newstudent != null && newstudent != "") {
        let newstudent = document.createElement("li");
        newstudent.innerHTML = studentinputvalue.value;
        //list_element.appendChild(newstudent);
        list_element.append(newstudent);
        studentinputvalue.value = "";

        ascendingAlphaSort();

        statusText.innerHTML = "New Student Added";
        statusText.removeAttribute("class");
        statusText.classList.add("labelgreen");

    }
    else {
        statusText.innerHTML = "Enter a Value";
        statusText.removeAttribute("class");
        statusText.classList.add("labelred");
        console.log("Enter a Value");
    }

}

function addInBulk() {
    let bulkstudentlist = ["senthil", "varshini", "sakthi"];

    for (let i = 0; i < bulkstudentlist.length; i++) {
        let bulknew = document.createElement("li");

        bulknew.innerHTML = bulkstudentlist[i];
        //list_element.appendChild(bulknew);
        list_element.append(bulknew);
        bulknew.classList.add("Newlyaddded");
    }

    statusText.innerHTML = "Multiple Students Added";
    statusText.removeAttribute("class");
    statusText.classList.add("labelgreen");

    ascendingAlphaSort();
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
        statusText.innerHTML = "Enter search text";
        statusText.removeAttribute("class");
        statusText.classList.add("labelred");
        console.log("Enter search text");
    }


    if (foundStudent) {
        statusText.innerHTML = "Student Found";
        statusText.removeAttribute("class");
        statusText.classList.add("labelgreen");

        let showfoundstudent = document.getElementById("showstudent");
        showfoundstudent.value = foundStudent.innerHTML;

        foundStudent.classList.add("selected");
    } else {
        statusText.innerHTML = "No student found with that name.";
        statusText.removeAttribute("class");
        statusText.classList.add("labelred");
        console.log("No student found with that name.");
    }
}

function deletestudent() {
    if (foundStudent) {

        foundStudent.remove();
        foundStudent = null;
        statusText.innerHTML = "Student deleted.";
        console.log("Student deleted.");
        statusText.removeAttribute("class");
        statusText.classList.add("labelgreen");

        showfoundstudent.value = "";
        searchtext.value = "";

    } else {
        statusText.innerHTML = "No student selected for deletion.";
        console.log("No student selected for deletion.");
        statusText.removeAttribute("class");
        statusText.classList.add("labelred");
    }
}

function ascendingAlphaSort(){

    let studentListArray = Array.from(studentList);
    let newArray = studentListArray.map(extraxtHTMLvalue);
    function extraxtHTMLvalue(value) {
    return value.innerHTML;
    }
    newArray.sort();

    if(studentList.length == newArray.length){
        for (let i = 0; i < studentList.length; i++) {
            studentList[i].innerHTML = newArray[i];  
        }
    }

}



