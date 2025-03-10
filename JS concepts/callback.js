function doHomework(subject, callback) {
    console.log(`I am doing my ${subject} homework.`);
    callback(); // Calling the callback function
}

function finishedHomework() {
    console.log("I finished my homework!");
}
function notDoneYet(){
    console.log("home work is not finished");
}

// Calling the function with a callback
doHomework("math", notDoneYet);


// 2:
function ghotok(patri,name) {
    patri(name)
}

const patri = function (name) {
    console.log("okay patri 1 paici ",name)
}

const patr2 = function (name) {
    console.log("okay patri 2 paici ",name)
}

const patr3 = function (name) {
    console.log("okay patri 3 paici ",name)
}

ghotok(patri, "hero alom")

ghotok(patr2,"Masud")

ghotok(patr3,"raka")
