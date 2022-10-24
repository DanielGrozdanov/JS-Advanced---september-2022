function solve(array) {
    let finalResult = [];

    let obj = {
        add: (something) => finalResult.push(something),
        remove: (something) => finalResult = finalResult.filter((e) => e != something),
        print: () => console.log(finalResult.join(',')),
    };

    for (let element of array) {
        let [command, value] = element.split(' ')
        obj[command](value);
    }
}

// function listProcessor(input) {
//     let collection = [];
  
//     let commands = {
//       add: (str) => collection.push(str),
//       remove: (str) => collection = collection.filter((e) => e != str),
//       print: () => console.log(collection.join(',')),
//     };
    
//     for (const line of input) {
//       let [command, value] = line.split(' '); 
//       commands[command](value); 
//     } 
//   }



solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])

 //     for (let element of array) {
    //         let [command, value] = element.split(' ');
    //         switch (command) {
    //             case "add":
    //                 finalResult.push(value);
    //                 break;
    //             case "remove":
    //                 finalResult = finalResult.filter((e) => e != value)
    //                 break;
    //             case "print":
    //                 console.log(finalResult.join(","))
    //                 break;
    //         }
    //     }
    // }

    // { 
//     let index = finalResult.indexOf(value); 
//     finalResult = finalResult.splice(index, 1) 
// },