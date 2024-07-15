let array=[1,2,3,4,5,6,7,8,9]
let n=array.length
let even=0
let odd=0

for(let i=0; i<n; i++){
    if(array[i]%2==0)
        even+=array[i]
    else
        odd+=array[i]
}

console.log("Sum of even numbers: ", even)

console.log("Sum of odd numbers: ", odd)
if (even>odd){
    console.log("even is greater")
}

else{
    console.log("odd is greater")
}