let time = document.querySelector("#time");
let timeCount = 5;



function startcount(){

    setTimeout(counter, 3);

    function counter(){
        const timer01 = setInterval(countdown, 1000);

        function countdown(){
            if(timeCount > 0)
                {
                    time.textContent = timeCount;
                    timeCount--;
                }
                else
                {
                clearInterval(timer01);
                time.textContent = "Happy NewYear 2025"
                }
        }
    }
}



function task_01(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const istask_01_completed = true;

        if(istask_01_completed){
            resolve("task 01 completed");
        }else{
            reject("task 01 failed");
        }
        }, 2000);
        

    });
}

function task_02(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const istask_02_completed = false;

        if(istask_02_completed){
            resolve("task 02 completed");
        }else{
            reject("task 02 failed");
        }
        }, 2000);
        
        
    });
}

function task_03(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const istask_03_completed = true;

        if(istask_03_completed){
            resolve("task 03 completed");
        }else{
            reject("task 03 failed");
        }
        }, 2000);
        
        
    });
}


async function dotasks(){
    await task_01().then((value) => {console.log(value)}).catch((e) => console.error(e));
    await task_02().then((value) => {console.log(value)}).catch((e) => console.error(e));
    await task_03().then((value) => {console.log(value)}).catch((e) => console.error(e));
    startcount();
}
