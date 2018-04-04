function bubbleSort(arr) {
    if (!(arr instanceof Array)) throw new Error("input not a array")
    for (let i = 0, leni = arr.length ; i<leni ; i++) {
        for(let j = 0, lenj = leni - i ; j<lenj ; j++) {
            if(arr[j+1]<arr[j]){
                // 1.
                // var temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp 

                // 2.
                swap_right(j,j+1,arr)
                // 3. 错误的做法
                // swap_wrong(arr[j+1],arr[j])
            }
        }
    }
    return arr
}
// 不传入数组arr的地址值，就没办法去修改数组，以下的swap是错误的
// function swap_wrong(a,b) {
//     var temp = a
//     a = b
//     b = temp
// }

function swap_right(a,b,arr) {
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}
console.log(bubbleSort([1,54,2,2,-7,32,100]))
console.log(bubbleSort([]))
console.log(bubbleSort("error input"))