function validator(obj) {
    let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let pattern = /^[\w.]+$/g;
    let specialChars = [`<`, `>`, `\\`, `&`, `'`, `"`];
    let suportedVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!validMethod.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!obj.hasOwnProperty("uri")) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (obj.uri !== '*' && !obj.uri.match(pattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if(!obj.hasOwnProperty('version')){
         throw new Error("Invalid request header: Invalid Version");
    }

    if (!suportedVersions.includes(obj.version)){
        throw new Error("Invalid request header: Invalid Version");
    }



    if (!obj.hasOwnProperty('message')) {
        throw new Error("Invalid request header: Invalid Message")
    }

    for (let ch of obj.message) {
        if (specialChars.includes(ch)) {
            throw new Error("Invalid request header: Invalid Message")
        }
    }
    return obj;
}

console.log(validator({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
}));