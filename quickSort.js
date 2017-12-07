//quickSort in JavaScript By Cai xiao cong
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function swap(arr,leftIndex,rightIndex) {
    var tmp = arr[leftIndex]
    arr[leftIndex]=arr[rightIndex]
    arr[rightIndex]=tmp
}


//partition(arr,start,end)函数的作用是将arr中的数组分成两份小的在左大的在右，并返回pivot
function partition(arr,startIndex,endIndex){
    var pivotIndex = Math.floor((startIndex+endIndex)/2)
    
    var i = startIndex,
        j = endIndex;
    
    // 当i++到等于j或者 j--到等于i时停止while循环
    while(i<=j){
        //每次循环都先判断i下标所在的值是不是小于pivotIndex下标所在的值
        //如果一直是则一直循环直到把i移动到一个大于pivot的位置
        //然后判断j是不是大于pivotIndex下标所在的值，如果也一直是则把j向左直到找到一个小于pivot的位置
        while(arr[i]<arr[pivotIndex]){
            i++
        }
        while(arr[j]>arr[pivotIndex]){
            j--
        }
        //执行这个代码块时i,j满足 arr[i]>arr[pivot]以及arr[j]<<arr[pivot]
        if(i<=j){
            swap(arr,i,j)
            i++
            j--
        }
    }
    return i;
    //返回pivot
    //循环结束后一次partition就完成了
    //效果是把一个数组分成两部分，中间是pivot左边是小于pivot的part，右边是大于pivot的part
}

//quickSort的作用在于。将arr的start和end之间排好序
function quickSort(arr ,start,end){
    if(!arr instanceof Array) return

    var startIndex = typeof start == "number"? start:0,//这个逗号忘了加导致了很多问题
        endIndex = typeof end == "number"? end:arr.length-1
    
    var pivotIndex = partition(arr,startIndex,endIndex)
    if(arr.length>1){
        if(startIndex < pivotIndex-1){
            quickSort(arr,startIndex,pivotIndex-1)
        }
        if(pivotIndex < endIndex){
            quickSort(arr,pivotIndex,endIndex)
        }
    }
    //递归出口
    return arr
}


console.log(quickSort(a))
