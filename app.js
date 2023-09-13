const express = require('express');
const app = express();

const PORT = 3000;

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/src'));
app.set('views', __dirname + '/src/views');
app.engine('html', require('ejs').renderFile);  
app.set('view engine', 'html');


app.get('/', (req, res) => {
    res.render('index.html')
});

app.get('/about', (req, res) => {
    res.render('about.html')
});

app.get('/works', (req, res) => {
    res.render('works.html')
});

app.listen(PORT, ()=>{
    console.log('Runing the app!')
})
