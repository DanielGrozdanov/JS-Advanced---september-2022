function solution(a){
    return function(b){
        return a + b;
    }
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));


