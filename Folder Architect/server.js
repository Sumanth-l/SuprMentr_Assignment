const express=require('express')
const app=express();
const products=require('./routes/productRoutes')




app.use(express.json())

app.use('/api',products)





app.listen(5000,()=>{
    console.log("server is listening on the port 5000")
})