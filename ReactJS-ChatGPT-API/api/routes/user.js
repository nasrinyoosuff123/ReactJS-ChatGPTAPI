const { User } = require("../model/User");
const convertToBulletPoints = require("../utils/paragraphToBulletPoint");
const topdf = require("../utils/toPDF");
const express = require("express");
const router = new express.Router();

router.post("/signup", async (req, res) => {
    let user = await User.findOne({email: req.body.email});
    if(user) return res.status(400).send("User already registerd!");
    
    try{
        req.body.education = convertToBulletPoints(req.body.education)

        user = new User(req.body)
        
        await user.save()

        const pdfUrl = await topdf(req.body.education)
        
        res.send(pdfUrl)
    }catch (err){
        res.status(400).send(err.message)
    }
})

module.exports = router;