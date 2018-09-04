// 剑指Offer 面试题4 二维数组中的查找

// 其实就是双重循环直接遍历二维数组，只不过内层循环用includes而已
const findOf2dArray = (nestedArray, target) => {
    for(let arr of nestedArray) {
        if(arr.includes(target)){
            return true
        }
    }
    return false
}

// 先flatten数组，将二维数组变为一维
// 一维数组中直接用includes查询
const findOf2dArray2 = (nestedArray, target) => {
    let flattenArr = nestedArray.reduce((acc, cur) =>{
        return acc.concat(cur)
    })
    console.log(flattenArr)
    return flattenArr.includes(target)
}

let arr = [[1,2,3],[4,7,8],[9,0]]
console.log(findOf2dArray2(arr, 6))