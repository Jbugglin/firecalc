//Works, this assigns values from the input - depth need to be in feet.
function getValues() {
    let lengthValue = document.getElementById('stack-length').value;
    let heightValue = document.getElementById('stack-height').value;
    let depthValue = document.getElementById('stack-depth').value;
    calcCuFt(lengthValue, heightValue, depthValue);
}

//Calculates the cubic feet from the user input
function calcCuFt(lengthValue, heightValue, depthValue) {
    let cubicFt = lengthValue * heightValue * depthValue;
    let cuftSpan = document.getElementById('cuFtResult');
    cuftSpan.innerHTML = cubicFt;
    compareFullCord(cubicFt);
    compareFaceCord(cubicFt);
    numberOfCords(cubicFt);
}

//Need to make a comparative function that compares the user input to the measurement of a full/face cord.
function compareFullCord(cubicFt) {
    fullCordCuFt = 128;
    let cordPercentage = 0;
    let fullCordDisp = document.getElementById('fullCordResult');
    if (cubicFt > fullCordCuFt) {
        cordPercentage = ((cubicFt - fullCordCuFt) / fullCordCuFt) * 100;
        fullCordDisp.innerHTML = cordPercentage;
    } else {
        cordPercentage = (cubicFt / fullCordCuFt) * 100;
        fullCordDisp.innerHTML = cordPercentage;
    }
}

//Face cord 1/3 of size as normal cord, 4ft x 8ft x ~16in (l x h x w)
function compareFaceCord(cubicFt) {
    let faceCordCuFt = 42.66;
    let faceCordPercentage = 0;
    let faceCordDisp = document.getElementById('faceCordResult');
    if (cubicFt > faceCordCuFt){
        faceCordPercentage = ((cubicFt - faceCordCuFt) / faceCordCuFt) * 100;
        faceCordDisp.innerHTML = faceCordPercentage;
    } else {
        faceCordPercentage = (cubicFt / faceCordCuFt) * 100;
        faceCordDisp.innerHTML = faceCordPercentage;
    }
}