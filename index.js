// Code your solutions in this file
const writeCards=(names,message)=>{
    let messages = [];
        for(let name in names){
            messages.push(`Thank you, ${names[name]}, for the wonderful ${message} gift!`);
        }
    return messages;
}


const countDown=(number)=>{
    while(number >= 0){
        console.log(number);
        number--;
    }
}

