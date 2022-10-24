function add(num) {
    let sum = num;

    function calc(num){
        sum += num
        return calc;
    }

    calc.toString = function (){
        return sum;
    }

    return calc;
}

console.log(add(1)(6)(-3).toString())