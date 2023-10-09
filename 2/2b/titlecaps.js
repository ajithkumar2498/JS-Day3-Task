let titlecaps=(sentence)=>{
    let str=sentence.split(" ");
    
    for(let i=0; i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
    }
    return (str.join(" "));
}
console.log(titlecaps("i am a fullstack developer"))