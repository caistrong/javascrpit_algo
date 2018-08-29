//旅行商推销问题-回溯算法

//有Bug 不能得到正确的结果 第55行是有逻辑问题的

function swap(arr,i,j){
    var tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

//Test Case
var citys=[0,1,2,3]
//我们的城市 0 1 2 3 

var distance2d = [[0 ,30,6 ,4 ],
                  [30,0 ,5 ,10],
                  [6 ,5 ,0 ,20],
                  [4 ,10,20,0 ]]
//城市间的距离
//    | 1| 2| 3| 4|
//   1| 0 30  6  4 
//   2|30  0  5 10 
//   3| 6  5  0 20 
//   4| 4 10 20  0 



function tsp (citysArr,distance2dArr,cityStartIndex){
    //参数检测
    if(!(citysArr && citysArr instanceof Array && distance2dArr instanceof Array)) return
    if(!cityStartIndex instanceof Number) return
    

    var citysCount = citys.length

    var minCost = 10000
    var bestPath = new Array()

    var curPath = new Array()
    var curCost = 0
    
    curPath.push.apply(curPath,[...citysArr,citysArr[cityStartIndex]])
    
    DSFbackTracking(1)

    console.log("minCost "+minCost)

    function DSFbackTracking(level){
        var deepestLevel = citysCount
        //到达最底层了，符合这个条件就是找到了一条通路（能回到起点）
        if(level==deepestLevel && distance2dArr[level-1][cityStartIndex]>0){
            //回到起点
            curCost += distance2dArr[level-1][cityStartIndex]
            console.log(curPath)
            console.log(curCost)
            if(curCost<minCost){
                bestPath = curPath
                minCost = curCost
            }
            return
        }
        else{
            for(let i=level;i<citysCount;i++ ){
                //这里的level-1最初指向起点，i则是遍历除起点外的其他剩下的城市
                //前一个判断条件是他们之间存在通路，后一个条件是剪枝函数
                //每一次DSFbackTracking的目的在于确定该level应该去哪个城市，i是候选
                if(distance2dArr[level-1][i]>0 && curCost < minCost){
                    swap(curPath,level,i)
                    curCost += distance2dArr[level-1][i]
                    //往深一层去找
                    DSFbackTracking(level+1)
                    //如果回溯回来
                    swap(curPath,level,i)
                    curCost -= distance2dArr[level-1][i]
        
                }
            }
        }
        
    }

}

tsp(citys,distance2d,0)