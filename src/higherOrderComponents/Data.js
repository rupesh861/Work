import React from 'react';
import HOC from './HOC';

function userDetails ({data,loading,error}){
    console.log("user",data);
    if(loading) return <p>loading...</p>
    if(error) return <p>{error.message}</p>

    return(
        <div>
            <h4>Users</h4>
            {data.map(user=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </div>
    )
}
 function PostDetails  ({data,loading,error}){
    console.log("post",data);
    if(loading) return <p>loading...</p>
    if(error) return <p>{error.message}</p>

    return(
        <div>
            <h4>Posts</h4>
            {data.map(post=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </div>
    )
}

export const UsersListwithData = HOC(userDetails,'https://jsonplaceholder.typicode.com/users');
export const PostListwithData = HOC(PostDetails,'https://jsonplaceholder.typicode.com/posts');