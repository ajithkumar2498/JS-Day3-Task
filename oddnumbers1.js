var array=[1,5,9,8,7,5]
var odd= function(){
    for(let i=0; i<array.length; i++){
        if(array[i]%2==1){
            return(array[i]);
        }
    }
}
odd()