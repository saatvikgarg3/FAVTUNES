
// artists data posted from database query in this form
// { 
    //     "artists":[
        //         {
//             "name":"Arijit"
//         },
//         {
//             "name":"KK"
//         },
//         {
//             "name":"sonu nigam"
//         }
//     ]
// }

//songs data posted from database query is in this form
// {            
//     "songs":[
//     {
//         "name": "abc",
//         "artist": "Arijit"
//     },
//     {
//         "name": "dcf",
//         "artist": "KK"
//     },
//     {
//         "name": "xyz",
//         "artist": "sonu nigam"
//     }
//     ]
// }

const router=require('express').Router();
router.post('/songs',(req,res)=>{    //i used post request here because the data is big needs to be secure as it can  be personalized
    const {songs}=req.body;            //can be received by frontend or database, here i used postman to test

    // songs.forEach((song, index) => {
    //     console.log(`Song ${index + 1}: ${song.name} - ${song.artist}`);
    //     // I can perform any other operations with each song here like i can maintain map for each singers song's count 
    // });


    if (!Array.isArray(songs)){       //to check if data is not passed in right format
        throw new Error("songs not acquired in proper format from database");
    }
    res.json(songs);     //songs with their artists is sent to frontend
})

router.post('/songartists',(req,res)=>{    //i used post request here because the data is big needs to be secure as it can  be personalized
    const {artists}=req.body;            //can be received by frontend or database, here i used postman to test
    if (!Array.isArray(artists)){       //to check if data is not passed in right format
        throw new Error("artists not acquired in proper format from database");
    }
    res.json(artists);     //songs with their artists is sent to frontend
})


module.exports=router;


//once data is acquired other operations like count the songs of particular artist can be easily performed by storing them in new array in server side or maybe in database if required