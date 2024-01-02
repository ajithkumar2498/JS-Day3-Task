(function (ar3, ar4, n)
    {
    let j = 0;
    let i = n - 1;
    while (ar3[i] > ar4[j] && j < n && i > -1)
    {
        let temp = ar3[i];
        ar3[i] = ar4[j];
        ar4[j] = temp;
        i--; j++;
    }
    ar3.sort(function(a, b){return a - b});
    ar4.sort(function(a, b){return a - b});
    parseInt((ar3[n - 1] + ar4[0]) / 2, 10);
    if(n3==n4){ return  console.log("Median is "+ (ar3, ar4, n)); }
    
    })( [ 1, 12, 15, 26, 38 ], [ 2, 13, 17, 30, 45 ] , 5 )
     
   
    var n3 = 5;
    var n4 = 5;
    
   