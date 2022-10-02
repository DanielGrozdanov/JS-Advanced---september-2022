function evenPos(numbers){
    let evenPosition = ' ';
   for(let i = 0; i < numbers.length;i+=2){
            evenPosition += numbers[i];
            evenPosition += ' ';
   }

   console.log(evenPosition);
}

evenPos(['20', '30', '40', '50', '60']);