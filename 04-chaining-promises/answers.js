/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then(value=>{
       resolve (asyncTransformer(value))
      }).catch(err=>{
        reject(err)
      });
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then(value=>{
   return new Promise((resolve ,reject)=>{
   resolve (slowAsyncProcess(value))
   }) 
  });
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
  return function getUserByIdWithOrganization(userId){
    return new Promise ((resolve, reject)=> { 
      getUserById(userId).then(val=>{ 
        if ( val === undefined){
          resolve (undefined)
        }
          getOrganizationById(val.organizationId).then(value =>{
            val.organization = value
            resolve (val)
          }) 
        })
  });
}}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};