import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});



const jokes= [
    {
        id: 1,
        title:"A joke about a dog",
        content:"The dog said 'woof woof'",
    },
    {
        id: 2,
        title:"A joke about a cat",
        content:"The cat said 'meow meow'",
    },
    {
        id: 3,
        title:"A joke about a fish",
        content:"The fish said 'glub glub'",
    },
    {
        id: 4,
        title:"A joke about a bird",
        content:"The bird said 'tweet tweet'",
    },
    {
        id: 5,
        title:"A joke about a mouse",
        content:"The mouse said 'squeak squeak'",
    },
]

app.get("/api/jokes",(req,res)=>{
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

