const db = require('../db/dbconfig')


const getAllArtists = async () => {
    try {
        const allartists = await db.any("SELECT * FROM artists");
        return allartists
    } catch (error) {
        return error
    }
}


const getOneArtist = async (id) => {
    try {
        const oneArtist = await db.one("SELECT * FROM artists WHERE id=$1", id);
        return oneArtist
    } catch (error) {
        return error
    }
}

//create a new icon

const createICON = async (artist) => {
    try {
        const newArtist = await db.one(
            "INSERT INTO artists (artistname, date_of_birth, starsign, ethnic_origin, art_sector, save_for_inspo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", 
            [
                artist.artistname, 
                artist.date_of_birth,
                artist.starsign, 
                artist.ethnic_origin, 
                artist.art_sector, 
                artist.save_for_inspo, 
            ]
        );
        return newArtist
    } catch (error) {
        return error  
    }
}


//delete an icon 

const deleteIcon = async (id) => {
    try {
        const deletedic = await db.one("DELETE FROM artists WHERE id=$1 RETURNING *", id);
        return deletedic
    } catch (error) {
        return error
    }
}

const updateArtistInformation = async (id, newInfo) => {
   
    try {
        const updatedInfo = await db.one(
            "UPDATE artists  SET artistname=$1, date_of_birth=$2, starsign=$3, ethnic_origin=$4, art_sector=$5, save_for_inspo=$6 WHERE id=$7 RETURNING *",
            [
                newInfo.artistname,
                newInfo.date_of_birth,
                newInfo.starsign,
                newInfo.ethnic_origin,
                newInfo.art_sector, 
                newInfo.save_for_inspo,
                newInfo.id
                
            ]
        );
        
        return updatedInfo;
    } catch (error) {
        return error;
    }
};

module.exports={ 
                 getAllArtists, 
                 updateArtistInformation,
                 deleteIcon,
                 createICON,
                 getOneArtist,

 }