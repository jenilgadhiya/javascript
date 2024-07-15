let num=[3,5,7,4,89,444,100]
let max=num[0];

let n=num.length;

for(let i=1;i<n;i++){

    if(num[i]>max){
        
        max=num[i];
    }
}

console.log("Minimum number in the array: ",max);