// Global
var globalVar = "I am a global variable"
let globalLet = "I am also global, but scoped with let"
const globalConst = "I am a global constant"

{
    var blockVar = "I am a block scoped var"
    let blockLet = "I am a block scoped let"
    const blockConst = "I am a block scoped const"
}

console.log(globalVar)
console.log(globalLet)
console.log(globalConst)

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();
    
console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError