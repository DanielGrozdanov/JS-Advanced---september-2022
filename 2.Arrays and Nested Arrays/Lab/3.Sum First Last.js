function sumFirstLast(array){
        let first = array.pop();
        let last = array.shift();
        let sum = Number(first) + Number(last)
        
    console.log(sum);
}

sumFirstLast(['20', '30', '40'])