const express = require('express');
const artists = express.Router();
const {getAllArtists, updateArtistInformation, deleteIcon, createICON, getOneArtist} = require('../queries/artist.js');

artists.get("/", async (req, res) => {
    const allArtists = await getAllArtists();
    console.log(allArtists);

    if(allArtists[0]){
        res.status(200).json(allArtists)
    }else {
        res.status(500).json({ error: "Internal Server Error" });
    }

});

artists.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const oneArtist = await getOneArtist(id);
    if(oneArtist.id){
        res.status(200).json(oneArtist);
    }else{
        res.status(404).json({error: "Artist Unfound"});
    }
});

artists.post("/", async (req ,res) => {
    const newArtist = await createICON(req.body);

    res.status(201).json(newArtist);
});

artists.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedIcon = await deleteIcon(id)
    
    if(deletedIcon.id) {
        res.status(200).json({ message: "Artist unbound" })
    } else {
        res.status(404).json( {error: "Artist Still Present" })
    }
});

artists.put('/:id', async (req,res)=>{
    const newInfo = req.body;
    const { id } = req.params;
    const updateArtistInfo = await updateArtistInformation(id, newInfo);
    console.log(updateArtistInfo)
    if(updateArtistInfo.id){
        res.status(200).json(updateArtistInfo);
      
    }else{
        res.status(404).json({ error: "Icon Can Not Be Found" });
    }
});

module.exports = artists;