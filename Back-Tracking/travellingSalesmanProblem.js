//旅行商推销问题-回溯算法

//有Bug 不能得到正确的结果 第55行是有逻辑问题的

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

var minCost = 10000
var bestPath = new Array()

function tsp (citysArr,distance2dArr,cityStartIndex){
    //参数检测
    if(!(citysArr && citysArr instanceof Array && distance2dArr instanceof Array)) return
    if(!cityStartIndex instanceof Number) return
    

    var citysCount = citys.length

    var curPath = new Array()
    var curCost = 0
    
    curPath.push(citysArr[cityStartIndex]+1)
    
    DSFbackTracking(0)

    console.log("minCost"+minCost)

    function DSFbackTracking(level){
        var deepestLevel = citysCount-1
        //到达最底层了，符合这个条件就是找到了一条通路（能回到起点）
        if(level==deepestLevel && distance2dArr[level][cityStartIndex]>0){
            //回到起点
            curCost += distance2dArr[level][cityStartIndex]
            curPath.push(citys[cityStartIndex]+1)
            console.log(curPath)
            if(curCost<minCost){
                bestPath = curPath
                minCost = curCost
            }
            return
        }
        else{
            for(let i=level;i<citysCount;i++ ){
                //distance2d > 0 意味着cityStart和遍历的到这个城市有通路
                //即是level的子树 citysArr[i]
                if(distance2dArr[level][citysArr[i]]>0){
                    curPath.push(citysArr[i]+1)
                    curCost += distance2dArr[level][citysArr[i]]
                    //往深一层去找
                    DSFbackTracking(level+1)
                    //如果回溯回来
                    curPath.pop()
                    curCost -= distance2dArr[level][citysArr[i]]
        
                }
            }
        }
        
    }

}

tsp(citys,distance2d,0)