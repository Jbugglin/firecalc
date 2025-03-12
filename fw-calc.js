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
    //let cuftSpan = document.getElementById('cuFtResult');
    //cuftSpan.innerHTML = cubicFt;
    compareFullCord(cubicFt);
    compareFaceCord(cubicFt);
    numberOfCords(cubicFt);
}

//Need to make a comparative function that compares the user input to the measurement of a full/face cord.
function compareFullCord(cubicFt) {
    fullCordCuFt = 128;
    let fullCordComp = 0;
    let fullCordDisp = document.getElementById('fullCordResult');
    if (fullCordCuFt > cubicFt) {
        fullCordComp = cubicFt;
        fullCordDisp.innerHTML = fullCordComp;
    } else if (fullCordCuFt < cubicFt) {
        fullCordComp = cubicFt - fullCordCuFt;
        fullCordDisp.innerHTML = fullCordComp;
        numberOfFullCords(fullCordComp);
    } else {
        console.log('= 128 cuft');
    }
}

//Face cord 1/3 of size as normal cord, 4ft x 8ft x ~16in (l x h x w)
function compareFaceCord(cubicFt) {
    let faceCordCuFt = 43;
    let faceCordComp = 0;
    let faceCordDisp = document.getElementById('faceCordResult');
    if (faceCordCuFt > cubicFt) {
        faceCordComp = cubicFt;
        faceCordDisp.innerHTML = faceCordComp;
    } else if (faceCordCuFt < cubicFt) {
        faceCordComp = cubicFt - faceCordCuFt;
        faceCordDisp.innerHTML = faceCordComp;
        numberOfFaceCords(faceCordComp);
    } else {
        console.log('= 43 cuft');
    }
}

function numberOfFullCords(fullCordComp) {
    let fullCordNum = document.getElementById('numOfFullCord');
    let fullCord = 0;
    if (fullCordComp != 0) {  
        fullCord = fullCordComp / 128;
        fullCordNum.innerHTML = Math.round(fullCord);
    }   
}

function numberOfFaceCords(faceCordComp) {
    alert('enter face code');
}