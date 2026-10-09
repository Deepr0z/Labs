
function average(a,b){
    return(a+b)/2;
}

function square(x){
    return x*x;
} 

function cube(x){
    return x*x*x;
}

function calculate(){
    let result = [];
    for (let i = 1; i <= 9; i++){
        let squareResult = square(i);
        let cubeResult = cube(i);
        let averageResult = average(squareResult,cubeResult);
        result.push(averageResult);
    }
    return result;
}
console.log(calculate())