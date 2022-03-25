import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('The car service 111');
});


app.listen(PORT, () => {
    console.log('The express server is running! Port: ', PORT);
})