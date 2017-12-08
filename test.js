
function creat2dArray(rows,columns){
    let resultArr=new Array(rows)
    for(let i=0;i<rows;i++){
        resultArr[i]=new Array(columns)
    }
    return resultArr
}

var test2 

function addValue(v){
    test2 =creat2dArray(3,3)
    
    test2[1][1]=v

    return test2
}

console.log(addValue(4))