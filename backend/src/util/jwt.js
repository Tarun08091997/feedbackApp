exports.sendCookie = async (user , res)=>{
    const token = await user.createToken();
    
    // Create cookie here   
    res.status(200).cookie(
        'token',
        token,
        {
            expires: new Date(Date.now() + process.env.EXPIRES_IN * 24 * 60 * 60* 1000),
            // httpOnly:true,
            SameSite: 'lax'
        }
    ).json({
        success : true,
        message:{"name" : user.name , 'userID' : user.userId}
    })

}