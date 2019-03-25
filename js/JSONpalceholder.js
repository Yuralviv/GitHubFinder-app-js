// class JSONpalceholder {
//     getPosts(id) {
//         return new Promise((resolve, reject) => {
//             fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'GET'})
//                 //response = res
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .catch(err => reject(err))
//         });
//     }
//     getCommerntsByID(id){
//         return new Promise((resolve, reject) => {
//             fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'GET'})
//                 //response = res
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .catch(err => reject(err))
//         });
//     }
// }