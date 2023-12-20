const express =require('express');
const app=express();

require('dotenv').config();

const githubData={
    "login": "AnuragTheCoder",
    "id": 129210052,
    "node_id": "U_kgDOB7OWxA",
    "avatar_url": "https://avatars.githubusercontent.com/u/129210052?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AnuragTheCoder",
    "html_url": "https://github.com/AnuragTheCoder",
    "followers_url": "https://api.github.com/users/AnuragTheCoder/followers",
    "following_url": "https://api.github.com/users/AnuragTheCoder/following{/other_user}",
    "gists_url": "https://api.github.com/users/AnuragTheCoder/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AnuragTheCoder/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AnuragTheCoder/subscriptions",
    "organizations_url": "https://api.github.com/users/AnuragTheCoder/orgs",
    "repos_url": "https://api.github.com/users/AnuragTheCoder/repos",
    "events_url": "https://api.github.com/users/AnuragTheCoder/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AnuragTheCoder/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-03-28T17:07:09Z",
    "updated_at": "2023-12-15T12:18:33Z"
}

app.get('/',(req,res)=>{
    res.send("At Home")
})

app.get('/about',(req,res)=>{
    res.send("At About")
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})


app.get('/youtube',(req,res)=>{
    res.send("<h1>Chai aur backend</h1>")
})

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`listenig on port ${port}`);
})