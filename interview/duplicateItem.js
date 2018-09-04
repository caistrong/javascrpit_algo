// 剑指Offer 面试题3 数组中重复的数字

// [1,2,4,4,3,3,1,5,3]
// 先对数组排序 [1,1,2,3,3,3,4,4,5]
// 后遍历比较pre和cur，如果pre===cur，则是重复数字
const duplicateItem = (arr) => {
    let sortedArr = arr.sort()
    let duplicateItems = []
    sortedArr.sort((pre, cur)=>{
        if(pre===cur && !duplicateItems.includes(pre)) {
            duplicateItems.push(pre)
        }
    })
    return duplicateItems
}

// [1,2,4,4,3,3,1,5,3]
// 对数组进行遍历，如果temp数组没有则push进temp数组
// 如果temp数组中有了，而duplicateItems数组中没有，则push进duplicateItems数组
// 最后temp是去重后的数组，duplicateItems是重复的元素
const duplicateItem2 = (arr) => {
    let duplicateItems = []
    let temp = []
    for(let i of arr){
        if(!temp.includes(i)){
            temp.push(i)
        } else if(!duplicateItems.includes(i)) {
            duplicateItems.push(i)
        } 
    }
    return duplicateItems
}

let arr = [1,2,4,4,3,3,1,5,3];
let result = duplicateItem2(arr);
console.log(result)