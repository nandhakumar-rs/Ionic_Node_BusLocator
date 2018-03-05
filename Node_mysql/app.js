const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const connect = mysql.createConnection({ 
   host:'mysql7002.site4now.net',
   user:'l9plltwp_project',
   password:'nandhu@123',
   database:'l9plltwp_projectdeal'
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    next();
  });
  

connect.connect(err=>{
    if(err){
        console.log(err)
    }else{
        console.log("MySql Connected...")
    }
});


let createTodos = `create table if not exists user(
    id int primary key auto_increment,
    email varchar(255),
    password varchar(255),
    name varchar(255),
    identityno int,
    age int,
    role varchar(255)
)`;

let drivers = `create table if not exists driverlog(
    id int primary key auto_increment,
    userid int,
    starttime varchar(255),
    busno varchar(255)
)`;
let location = `create table if not exists location(
    id int primary key auto_increment,
    latitude  FLOAT( 10, 6 ),
    longitude  FLOAT( 10, 6 ),
    userid int
)`;
connect.query(createTodos,(err,result,fields)=>{
    if(err){
        console.log(err);
    }
})
connect.query(drivers,(err,result,fields)=>{
    if(err){
        console.log(err);
    }
})
connect.query(location,(err,result,fields)=>{
    if(err){
        console.log(err);
    }
})

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',(req,res)=>{

    res.json("welcome to bus locator api ")
})
app.post('/register',(req,res)=>{
    let query = "insert into user set ?"
    data = {
        id:null,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password,10),
        name:req.body.name,
        identityno:req.body.identityno,
        age:req.body.age,
        role:req.body.role
    }
 connect.query(query,data,(err,row)=>{
     if(err){
         res.json({error:err})
     }
     res.json({"inserted":true,"userid":row.insertId})
 })
})


app.post('/addlocation',(req,res)=>{
    let query = "insert into location set ?" 

    data = {
        id:null,
        userid:req.body.userid,
        longitude:0,
        latitude:0
    }
    connect.query(query,data,(err)=>{
        if(err){
            res.json(err)
        }
        res.json({message:"location created"})
    })
})

app.post('/checkuser',(req,res)=>{
    const query = "select * from user where email = ?";
 
    connect.query(query,[req.body.email],(err,data)=>{
        if(err){
            res.json({error:err})
        }
        if(data.length == 0){
            res.json(false)
        }else{
            res.json(true)
        }
    })

})
app.post('/login',(req,res)=>{
    const query = "select * from user where email = ?";
 
    connect.query(query,[req.body.email],(err,data)=>{
        if(err){
            res.json({error:err})
         }
         if(!data){
            res.json({message:"invalid credential"})
         }
         
         if(!bcrypt.compare(req.body.password,data.password)){
             res.json({message:"check your password"})
         }
 
        let token = jwt.sign({user:data},"secret",{expiresIn:7200})
       res.json({message:"Logged in successfully",userid:data[0].id,token:token,role:data[0].role})
    })

})

app.get('/user/:id',(req,res)=>{
    
        let query ="select * from user WHERE id = ?";
      
        connect.query(query,[req.params.id],(err,data)=>{
            if(err){
                res.json({error:err})
            }
            res.json(data[0])
        })
    })
app.post('/adddriver',(req,res)=>{
    let query = "insert into driverlog set ?"
    data = {
        id:null,
        userid:req.body.userid,
        busno:null,
        starttime:null
    }
    connect.query(query,data,(err)=>{
        if(err){
            res.json(err)
        }

        res.json({message:"driving started..."})
    })
})


app.put('/startdriving',(req,res)=>{
    let query = "update driverlog set busno=?,starttime = ? where userid =  ?"
    data = 
        [
        req.body.busno,
        req.body.starttime,
        req.body.userid
        
        ]
    connect.query(query,data,(err)=>{
        if(err){
            res.json(err)
        }

        res.json({message:"driving started..."})
    })
})


app.put('/updatelocation',(req,res)=>{
    let query =  "update location set latitude = ?, longitude = ? where userid = ?"
data = 
	[req.body.latitude,
	req.body.longitude,
req.body.userid]
    connect.query(query,data,(err)=>{
        if(err){
            res.json(err)
        }
        res.json({message:"location updated"})
    })
})


app.post('/checkbus',(req,res)=>{
    let query = "select * from driverlog where busno = ?"
    connect.query(query,[req.body.busno],(err,data)=>{
        if(err){
            res.json(data)
        }
        if(data.length == 0){
            res.json({value:true})
        }else{
            res.json({value:false})
        }
    })
})

app.get('/getbusdetails/:busno',(req,res)=>{
    let query = `SELECT d.starttime, u.name, u.age, u.identityno, l.latitude, l.longitude FROM driverlog AS d INNER JOIN USER 
    AS u ON u.id = d.userid INNER JOIN location as l ON l.userid = d.userid WHERE d.busno = ?`
    connect.query(query,[req.params.busno],(err,data)=>{
        if(err){
            res.json(err)
        }
      res.json(data[0])
    })

})

app.put('/updatelog',(req,res)=>{
    let query = `update driverlog set busno = null,starttime = null where userid = ?`
    connect.query(query,[req.body.userid],(err)=>{
res.json(err)
    })
    res.json({message:"updated"})
})




// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title: title
  });
});



const port = process.env.PORT || 5000;

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});