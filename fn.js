var log=(param)=>console.log(param)

/////////////////ARROW FUNCTION///////////////
var number = (nam) => nam*2
console.log("the number is :", number(69))
log("xoxo")
///////////////////FOR iteration//////////////////////////

//////////loop the object in for loop///////////////////////
let studentobj={
    name:"vijay",
   age : 20,
   mentor : true
} 
//////////if we want to seperate the object we can use . and map operator////////
log(studentobj["name"])///this is map method
log(studentobj["age"])
log(studentobj["mentor"])
/////////////////////now change this object to array//////////
///////////////////////only keys////////////////
var studentkeys = Object.keys(studentobj)
log(studentkeys)
///////////////////////////only values/////////////////////////////////////////////
var studentvalues = Object.values(studentobj)
log(studentvalues)
//////////////looping with arrow function/////////////////
var merge=(val)=>{

    for(let i=0;i<studentkeys.length;i++){
        log(studentkeys[i],studentobj[studentvalues[j]])
    }
    
    for(let j=0;j<studentvalues.length;j++){
        log(studentvalues[j])
    }

}


log("..................For EACH............l....")
var studentarr = ["vijay","vipin","surya","TTF"]

studentarr.forEach((value,index) => {
   log(value,index)
   
}
)
log("...............forin................")
/////for in array////////////
for(s in studentarr){
    log(s)
}
////////for in obj/////////////////
for( obj in studentobj){

    
    log(obj,studentobj[obj])
    log(studentobj)
}

log("............forof......")

//best used for string and array
let sting = "va da machi adichu pakalam ethir nechal"
for(s of sting){
     log(s)
}
////json is nothing but [javascript object notation]
