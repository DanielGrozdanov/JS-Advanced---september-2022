function addAndRemoveEl(commands){
    let res = [];
    let num = 1;

    for(let comm of commands){
        switch(comm){
            case 'add':
                res.push(num);
                num++;
                break;
            case 'remove':
                res.pop(num);
                num++;
                break;
        }
    }
    if(res.length === 0){
        console.log("Empty")
    }else{
        console.log(res.join("\n"));
    }
}

addAndRemoveEl(['add', 'add', 'remove', 'add', 'add']); 