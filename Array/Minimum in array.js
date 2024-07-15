let num=[3,5,7,4,89,44,100]
let min=num[0];

let n=num.length;

for(let i=1;i<n;i++){

    if(num[i]<min){
        
        min=num[i];
    }
}

console.log("Minimum number in the array: ",min);