var MongoClient = require('mongodb').MongoClient;
const mongodb_conn = 'mongodb://localhost:27017/';



var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.use(cors({
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}));

app.get('/', function(req,res)
{
    res.sendFile(__dirname+'dist/index.html');
});

app.post('/register', function(req,res)
{
var id= req.body;
console.log(id);
db.collection('user').insert(id);
res.end('inserted');
});


app.post('/authenticate', function (req, res) {

db.collection('user').find({"email":req.body.email}, {"password":req.body.password} ).toArray(function(err,docs){

console.log(docs);
if(docs.length!=0)
 {
        var token = jwt.sign({
            email: req.body.email
        },
            'marlabs-secret-key',
            { expiresIn: '1h' }
        );
        res.send({
            isLoggedIn: true,
            msg: 'Login success',
            token: token
        });
     } 

     else {
        res.send({
            isLoggedIn: false,
            msg: 'Login failed'
        });
    }

});

});
app.use(function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers.token;
    if (token) {
        jwt.verify(token, 'marlabs-secret-key', function (err, decoded) {
            if (!err) {
                req.decoded = decoded;
                next();
            } else {
                res.send({
                    msg: 'Invalid request',
                    isLoggedIn: false
                });
            }
        });
    } else {
        res.send({
            msg: 'Invalid request',
            isLoggedIn: false
        });
    }
});


var db = "";



app.post('/createpost',function(req,res)
{
    var id= req.body;
    console.log(id);
    db.collection('post').insert(id);
    res.send("added post");

            });

app.get('/getpost', function (req, res) {
    console.log("no error");
    db.collection('post').find().toArray(function (err, docs) {
        res.send(JSON.stringify(docs));
        console.log(docs);
    });
});


app.post('/addcomment', function(req,res)
{
    var id= req.body;
    console.log(id);
    db.collection('comments').insert(id);
    res.send("comment added");
});

app.get('/getcomments', function (req, res) {
    console.log("no error in comments");
    db.collection('comments').find({"postTitle":req.body.postTitle}).toArray(function (err, docs) {
        res.send(JSON.stringify(docs));
        console.log(docs);
    });
});

app.post('/like', function(req,res)
{
    db.collection('like').find({"email": req.body.email}).toArray(function(err, docs){
        res.send(JSON.stringify(docs));

        if(docs.length==0)
        {
            var id= {"email":req.body.email, "postTitle":req.body.postTitle};
            db.collection('like').insert(id);
        }
        console.log(docs);
    });
})

MongoClient.connect(mongodb_conn, function (err, client) {
    if (!err) {
db=client.db('ag2test');
app.listen(3000, function () {
    console.log('Server running @ localhost:3000');
});
}
});
