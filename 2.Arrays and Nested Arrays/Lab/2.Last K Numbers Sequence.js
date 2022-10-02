function numberSequece(num1, num2){

    let array = [1];

    for(i = 1; i < num1; i++){
        let element = array.slice(-num2);

        let sum = 0;
        element.forEach(element => sum += element)

        array.push(sum);
    }

    console.log(array);

}

numberSequece(6,3); 