// 剑指offer 面试题5 替换空格

let str = 'we are world'
// 将其中的空格替换为%20
// we%20are%20world

const replaceBlank = (str) => {
    return str.replace(/\s/g, '%20')
}

console.log(replaceBlank(str))