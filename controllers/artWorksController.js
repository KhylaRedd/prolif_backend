const express = require('express');
const artWorks = express.Router();
const { updateArtinformation,
    inputArt, deleteArtWork, getOneArtWork, getAllArtWorks} = require('../queries/artwork');

    artWorks.get("/", async (req, res) => {
        const allArt = await getAllArtWorks();
        console.log(allArt)
    
        if(allArt[0]){
            res.status(200).json(allArt)
        }else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    
    });   

    artWorks.get('/:id', async (req, res)=>{
        const { id } = req.params;
        const oneArt = await getOneArtWork(id);
        if(oneArt.id){
            res.status(200).json(oneArt);
        }else{
            res.status(404).json({error: "Art Work Undiscovered"});
        }
    });

    artWorks.post("/", async (req ,res) => {
        const newArt = await inputArt(req.body);
    
        res.status(201).json(newArt);
    });

    artWorks.delete("/:id", async (req, res) => {
        const { id } = req.params
        const deletedArtWork = await deleteArtWork(id);
        
        if(deletedArtWork.id) {
            res.status(200).json({ message: "What is gone, may not be forgotten" })
        } else {
            res.status(404).json( {error: "Art Still Present" })
        }
    });

    artWorks.put('/:id', async (req,res)=>{
        const newInfo = req.body;
        const { id } = req.params;
        const updateArtInfo = await updateArtinformation(id, newInfo);
        if(updateArtInfo.id){
            res.status(200).json(updateArtInfo);
          
        }else{
            res.status(404).json({ error: "We don't yet see the vision" });
        }
    });

module.exports = artWorks;