let filterpalindrome = function(arr){
    let spl=[]
    let rev=[]
    for(let i=0;i<arr.length;i++){
        spl.push(arr[i].split(" "))
    }
    for(let i=0;i<spl.length;i++){
        rev.push(spl[i].reverse())
    }

    return rev.join(" ")
}

console.log(filterpalindrome(["hii","level","12345"]))