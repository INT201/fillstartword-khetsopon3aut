const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word===null|| word===undefined){
  return undefined
  }else{
  if(word.includes(startWord)){//ถ้าwordมีstarrwordอยู่ข้างใน
  return word
  } else{
    return startWord+word
  }
}
}
module.exports = fillStartWord
console.log(fillStartWord('hi','mo'))
