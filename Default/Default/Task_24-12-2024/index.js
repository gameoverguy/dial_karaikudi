let array01 = [0 , "one" , 2 , "Three" , 4];

let mainObject = {
    name: "karthick",
    title: "FSD",
    employeeNumber: 10007,
    details:{
        skills:{
            skill_01: 1,
            skill_02: 2,
            skill_03: 3,
            skill_04: 4,
            skill_05: 5,
            skill_06: 6,
            skill_07: 7,
            skill_08: 8
        }
    }
};

let {details:{skills:{skill_01,skill_02,skill_03,skill_04,skill_05,skill_06,skill_07,skill_08}}} = mainObject;

console.log(mainObject.details.skills.skill_01);
console.log(mainObject.details.skills.skill_02);
console.log(mainObject.details.skills.skill_03);
console.log(mainObject.details.skills.skill_04);
console.log(mainObject.details.skills.skill_05);
console.log(mainObject.details.skills.skill_06);
console.log(mainObject.details.skills.skill_07);
console.log(mainObject.details.skills.skill_08);


console.log(skill_01);
console.log(skill_02);
console.log(skill_03);
console.log(skill_04);
console.log(skill_05);
console.log(skill_06);
console.log(skill_07);
console.log(skill_08);