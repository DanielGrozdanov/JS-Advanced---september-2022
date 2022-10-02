function printEverNthEl (arr,step){
    // let res = [];
    // for(i = 0; i < arr.length; i+= step){
    //     res.push(arr[i]);
    // }
    
    // return res; 
    
    return arr.filter((el,index) => {
        if(index % step === 0){
            return el;
        }
    })
}
printEverNthEl(['5',
'20',
'31',
'4',
'20'],2);