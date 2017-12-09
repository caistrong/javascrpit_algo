//quickSort in JavaScript By Cai xiao cong
var a = [10, 20, 30, 40, 100, 1, 2, 3, 9];

function swap(arr, leftIndex, rightIndex) {
    if (arr[leftIndex] == arr[rightIndex]) return
    var tmp = arr[leftIndex]
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = tmp
}


//partition(arr,start,end)函数的作用是将arr中的数组分成两份小的在左大的在右，并返回pivot
function partition(arr, startIndex, endIndex) {
    var pivot = arr[endIndex]
    //如果pivotIndex不是最后一个，需要先把pivot换到末尾
    //以下的partition操作需要依赖这个前提条件

    //partitionIndex是最后存放pivot的地方，先初始化为start
    var partitionIndex = startIndex

    //遍历函数，partitionIndex总是在大于pivot的地方停留等待i遍历到一个小于pivot的地方与其交换
    //之后partitionIndex继续往前直到下一个大于pivot的地方
    for (let i = startIndex; i < endIndex; i++) {
        if (arr[i] < pivot) {
            swap(arr, partitionIndex, i)
            partitionIndex++
        }
    }
    //将partitionIndex和pivot所在的endIndex兑换
    //可以保证partitionIndex前面的都小于pivot,后面都大于pivot
    swap(arr, partitionIndex, endIndex)
    return partitionIndex
}



//quickSort的作用在于。将arr的start和end之间排好序
function quickSort(arr, start, end) {
    if (!arr instanceof Array) return

    //递归出口(如果只剩一个元素则不用排序了)
    if(end-start<2) return 
     
    var startIndex = typeof start == "number" ? start : 0,//这个逗号忘了加导致了很多问题
        endIndex = typeof end == "number" ? end : arr.length - 1,
        pivotIndex = partition(arr, startIndex, endIndex)

    arguments.callee(arr, startIndex, pivotIndex - 1)
    arguments.callee(arr, pivotIndex + 1, endIndex)
    
    return arr
 }

console.log(quickSort(a))
