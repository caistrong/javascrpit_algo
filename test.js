// function f1(){
//     var r=1
//     f2()
// }

// function f2(){
//     console.log(r)
// }

// var r = 2
// f1()

var r = 2

function f1(){
    var r=1
    f2()
    function f2(){
        console.log(this.r)
    }
}

f1()

// if(false){
    
//     let rx = 5
// }

// function creat2dArray(rows,columns){
//     let resultArr=new Array(rows)
//     for(let i=0;i<rows;i++){
//         resultArr[i]=new Array(columns)
//     }
//     return resultArr
// }



// function addValue(v){
//     test2 =creat2dArray(3,3)
    
//     test2[1][1]=v

//     return test2
// }

// var valuePerWeight = new Array(3)

// valuePerWeight.forEach((item,index,array)=>{
//     array[index] = 1
// })

// console.log(valuePerWeight)