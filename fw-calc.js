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
    cuftSpan.innerHTML = cubicFt + " cu-ft";
    fullComp(cubicFt);
    faceComp(cubicFt);
}

//Need a function to convert our entered cu-ft to full cord...
function fullComp(cubicFt) {
    let fullCord = 0;
    let cordMeasure = 128;
    let numFull = document.getElementById('fullCordResult');
    if (cubicFt > 0) {
        fullCord = cubicFt / cordMeasure;
    }
    numFull.innerHTML = fullCord;
}

//Need a function to convert our entered cu-ft to face cord...
function faceComp(cubicFt){
    let faceCord = 0;
    let faceMeasure = 43;
    let numFace = document.getElementById('faceCordResult');
    if (cubicFt > 0) {
        faceCord = cubicFt / faceMeasure;
    }
    numFace.innerHTML = Math.round(faceCord * 100) / 100;
}