const router =require('express').Router();
const Galery = require('../models/Galery')

//get galery api/galery/
router.get("/galery", async (req,res) => {
    try {
        const galery = await Galery.find().populate('user','name email ');
        res.json({msg:'data Galery', galery})
    } catch (error) {
        console.log(error);

    }
});

//post add galery
router.post("/add", async (req, res) =>{
    const {user,title,prix,picture,discreption} = req.body;
    try {
        const newGalery = new Galery({user,title,prix,picture,discreption});
        const galery = await newGalery.save();
        res.json({msg :"galery added", galery})
    } catch (error) {
        console.log(error)
    }
})

// delete
router.delete("/delete/:id", async (req,res) => {
    const {id}= req.params;

    try {
        const galery = await Galery.findByIdAndDelete({_id:id})
        res.json({msg :'galery deleted', galery});
    } catch (error) {
        console.log(error);
    }

})

// edit galery
router.put('/edit/:id', async (req,res) => {
    const {id} = req.params
    const {title,prix,picture,discreption} = req.body;
    
    try {

        const editgalery = await Galery.findByIdAndUpdate({_id :id}, {$set:req.body}).populate('user','name email -_id')
        res.json({msg :'edit galery', editgalery})
    } catch (error) {
        console.log(error);

    }
})
//get profile by id 
router.get ("/:id", async (req, res) =>{
    const {id} = req.params
    try {
        const galery = await Galery.findById({_id:id}).populate('user','name email -_id')
        res.json({msg:'fetched profile', galery})
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;