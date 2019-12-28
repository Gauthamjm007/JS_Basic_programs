/**
Bubble Sort
Total Test Cases: 3


Body:

Write a Bubble Sort algorithm in JavaScript.
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]
 */

//const Bubble=(str)=>str.sort()
// console.log(Bubble([6,4,0, 3,-2,1]))

function bubbleSort(arr){

    let swapped
    do{
        swapped=false
    for(i=0;i<arr.length-1;i++){
        
            if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            swapped =true
            }
        
        }
    }while(swapped)

    return arr
    }


console.log(bubbleSort([6,4,0, 3,-2,1]))
