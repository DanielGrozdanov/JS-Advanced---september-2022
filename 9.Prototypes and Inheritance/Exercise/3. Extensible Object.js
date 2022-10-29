function extensibleObject() {
    
    let obj = {
        extend: function(template){
         for(let key in template){
            var element = template[key];
            if(typeof element === 'function'){
                obj.__proto__[key] = element
            }else{
                obj[key] = element;
            }
         }
         debugger
        }
    }

    return obj;
}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
