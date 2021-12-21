const express = require ("express");

const Movie = require ("../models/movie.model");

const router = express.Router();

router.post("/", async (req,res)=>{
    try{
        const movie = await Movie.create(req.body);

        return res.status(201).send(movie);

    }catch(e){
        return res.status(500).json({status: "failled", message: e.message});

    }
    

});

router.get("/", async (req,res)=>{
    try{
        const movie = await Movie.find().lean().exec();

        return res.send(movie);

    }catch(e){
        return res.status(500).json({status: "failled", message: e.message});

    }
    

});

router.get("/:id", async (req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id).lean().exec();

        return res.send(movie);

    }catch(e){
        return res.status(500).json({status: "failled", message: e.message});

    }
    

});

router.patch("/:id", async (req,res)=>{
    try{
        const movie = await Movie.findByIdAndUpdate(req.params.id,req.body, {
            new: true
        });

        return res.send(movie);

    }catch(e){
        return res.status(500).json({status: "failled", message: e.message});

    }
    

});

router.delete("/:id", async (req,res)=>{
    try{
        const movie = await Movie.findByIdAndRemove(req.params.id);

        return res.send(movie);

    }catch(e){
        return res.status(500).json({status: "failled", message: e.message});

    }
    

});


module.exports = router;




