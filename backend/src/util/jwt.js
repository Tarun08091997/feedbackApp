exports.sendCookie = async (user , res)=>{
    const token = await user.createToken();
    
    // Create cookie here
    
    
    res.status(200).cookie(
        'token',
        token,
        {
            maxAge: process.env.COOKIE_AGE * 24 * 60 * 60 * 1000,
            httpOnly:true
        }
    ).json({
        success : true,
        message:"Logged In"
    })

}