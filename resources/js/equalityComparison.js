let variablesId = 'variables', resultId = 'result';
function doubleEquality(left, right){
    printToResult(left == right);
}
function tripleEquality(left, right){
    printToResult(left === right);
}
function oneInEquality(left, right){
    printToResult(left != right);
}
function doubleInEquality(left, right){
    printToResult(left !== right);
}
function printToResult(result){
    document.getElementById(resultId).innerHTML = result;
}