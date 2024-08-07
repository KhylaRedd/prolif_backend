const db = require('../db/dbconfig');

const getAllArtWorks = async () => {
    try {
        const allartWorks = await db.any("SELECT * FROM artwork")
        return allartWorks
    } catch (error) {
        return error
    }
}

const getOneArtWork = async (id) => {
    try {
        const oneArtWork = await db.one("SELECT * FROM artwork WHERE id=$1", id)
        return oneArtWork
    } catch (error) {
        return error
    }
}

const inputArt = async (artwork) => {
    try {
        const newArtWork = await db.one(
            "INSERT INTO artwork (title, art_sector, date_created, statement, save_for_inspo, artist_id) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *", 
            [
                artwork.title, 
                artwork.art_sector,
                artwork.date_created, 
                artwork.statement, 
                artwork.save_for_inspo, 
                artwork.artist_id
                
            ]
        )
        return newArtWork
    } catch (error) {
        return error  
    }
}
const deleteArtWork = async (id) => {
    try {
        const deletedArt= await db.one("DELETE FROM artwork WHERE id=$1 RETURNING *", id)
        return deletedArt
    } catch (error) {
        return error
    }
}

const updateArtinformation = async (id, newInfo) => {
    try {
        const updatedInfo = await db.one(
            "UPDATE artwork SET title=$1, art_sector=$2, date_created=$3, statement=$4, save_for_inspo=$5, save_for_inspo=$6 WHERE id=$7 RETURNING *",
            [
                newInfo.title, 
                newInfo.art_sector,
                newInfo.date_created, 
                newInfo.statement, 
                newInfo.save_for_inspo, 
                id 
                
            ]
        );
        return updatedInfo;
    } catch (error) {
        return error;
    }
};

module.exports={
    updateArtinformation,
    inputArt,
    deleteArtWork,
    getOneArtWork,
    getAllArtWorks
}; 