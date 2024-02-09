import axios, {isCancel, AxiosError} from 'axios';

function getComments() {
    return new Promise(async (resolve,reject) => {
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/comments/1");
            resolve(response.data);
        }catch(e){
            reject(e.message);
        }
    })
}

let getPosts = async () => {
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/posts/2");
            return response.data;
        }catch(e){
            return e.message;
        }
}

console.log(getPosts());
getComments().then((comments) => {
    console.log(comments);
})

getPosts().then((comments) => {
    console.log(comments);
})