const app = require("./app");

const { connectDatabase } = require("./src/database/connect");
const userRouter = require('./src/router/userRouter');
// connect Database
connectDatabase();


// routers
app.use('/user',userRouter);

app.listen(4000,()=>{
    console.log('Our Server is ruuning on http://localhost:4000')
});