/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
promise.catch((error)=> {
  reject(error)
})
let som = promise.then((result) =>{return transformer(result)})
resolve(som)
reject(som)
})
}


/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(function (res){
      return new Promise((resolve,reject)=>{
        if (!isNaN(res)) {
          resolve(res*res)
        } else {
          reject (`Cannot convert '${res}' to a number!`)
        }
        // if (isNaN(res) || isNaN(parseInt(res)) || typeof res === 'string') {
        //   reject(res)
        // }
        // if (typeof(res) === "number" ){
        //  resolve(res*res)
        // } 
        // if (typeof(parseInt(res)) === "number"){
        //   let newRes=parseInt(res)
        //   resolve(newRes*newRes)
        // }
        // if( !(typeof(res) === "number")){
        //   reject(res)
        // }
        // if(res.valueOf() === false) {
        //   reject(res)
        // }
        // if (typeof(res) === "number" && !isNaN(res) ){
        // resolve(res*res)
        // } 
        // if (parseInt(res) === NaN){
        //     reject(res)
        // }
        // let newRes=parseInt(res)
        // resolve(newRes*newRes)
    })
})
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(resl=> {
     return new Promise((resolve, reject)=> {
       if (typeof (resl) === "string"){
         resolve(0)
        }else if (typeof (resl)=== "number") {
      resolve(0)
}})
})}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then((successCb)=> {
    return new Promise((resolve,reject)=>{
      reject (successCb)})
  }, (failureCb)=>{
    return new Promise((resolve,reject)=>{
      resolve (failureCb)})
  })



  //   console.log(successCb)
  //   console.log(failureCb)
  //  return new Promise((resolve,reject)=>{
  //    if (successCb === undefined){
  //     resolve(failureCb) 
  //   }else{
  //     reject(successCb)
  //     }  
       
  //    }
  //  );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};