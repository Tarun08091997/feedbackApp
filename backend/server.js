const app = require("./app");

const { connectDatabase } = require("./src/database/connect");
const userRouter = require('./src/router/userRouter');
const suggestionRouter = require('./src/router/suggestionRouter')
const superAdminRouter = require("./src/router/superAdminRouter");
const { isLogedIn } = require("./src/util/auth");

// connect Database
connectDatabase();


// routers
app.get('/checkLogin',isLogedIn)
app.use('/user',userRouter);
app.use('/suggestion',suggestionRouter);
app.use("/superAdmin",superAdminRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Our Server is ruuning on http://localhost:${process.env.PORT}`)
});