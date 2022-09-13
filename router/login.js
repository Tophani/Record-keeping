const router = require('express').Router()

router.get('/',(req,res)=>{
    res.render('adminlogin',{msg:''})
})

router.post('/',(req,res)=>{
    const collect =req.body;
    if (collect.email!=null && collect.pass!=null) {
        if ((collect.email).length>=1 && (collect.pass).length>=1 ) {
            if (collect.email==process.env.email && collect.pass==process.env.password) {
                res.redirect('/adminview')
            } else {
                res.render('adminlogin',{msg:'Invalid logins'})
            }
        } else {
            res.render('adminlogin',{msg:'fill the form'})
        }
    } else {
    res.render('adminlogin',{msg:'fill the form'})
        
    }
})


module.exports= router