function pieceOfPie(array, startFlavor , endFlavor){

    
    let startIndex = array.indexOf(startFlavor);
    let endIndex = array.indexOf(endFlavor);

    console.log(array.slice(startIndex,endIndex + 1))

}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);