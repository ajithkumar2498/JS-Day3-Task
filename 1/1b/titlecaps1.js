// title caps using anonymous

(function(sentence1){
    let str1=sentence1.split(" ");
    
    for(let i=0; i<str1.length;i++){
        str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1)
    }
    console.log (str1.join(" "))
})("i am a fullstack developer");
