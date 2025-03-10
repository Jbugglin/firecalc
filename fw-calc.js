//Works, this assigns values from the input - depth need to be in feet.
function getValues() {
    let lengthValue = document.getElementById('stack-length').value;
    let heightValue = document.getElementById('stack-height').value;
    let depthValue = document.getElementById('stack-depth').value;
    calcCuFt(lengthValue, heightValue, depthValue);
    console.log("Function getValues: " +" L: " +lengthValue+ " H: " +heightValue+ " D: " +depthValue);
}

//Calculates the cubic feet from the user input
function calcCuFt(lengthValue, heightValue, depthValue) {
    let cubicFt = lengthValue * heightValue * depthValue;
    compareFullCord(cubicFt);
    compareFaceCord(cubicFt);
    console.log("Function calcSqFt: " +cubicFt+ "cu.ft");
}

//Need to make a comparative function that compares the user input to the measurement of a full/face cord.
function compareFullCord(cubicFt) {
    fullCordCuFt = 128;
    let cordPercentage = 0;
    let largeCord = 0;
    if (cubicFt > fullCordCuFt) {
        largeCord = ((cubicFt - fullCordCuFt) / fullCordCuFt) * 100;
        console.log(largeCord+ " % over a full cord");
    } else {
        cordPercentage = (cubicFt / fullCordCuFt) * 100;
        console.log(cordPercentage+ " % of a full cord");
    }
}

//Face cord 1/3 of size as normal cord, 4ft x 8ft x ~16in (l x h x w)
function compareFaceCord(fullCordCuFt) {
    let faceCordCuFt = 42.66;
    console.log(faceCordCuFt)
}