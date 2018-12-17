const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {
   let newPr = req.body;
   console.log('checking', req.body.github);
    queryText = `INSERT INTO "projects"("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") 
                    VALUES ($1, $2, $3, $4, $5, $6, $7 );`
    
    pool.query(queryText, [newPr.name, newPr.description, newPr.thumbnail, newPr.website, newPr.gitHub, newPr.date_completed, newPr.tag_id ] )
        .then(result => {
            res.sendStatus(200);
            console.log('testing', req.body.date_completed);
        }).catch(err => {
            console.log('error in post query:', err);
            
            res.sendStatus(500);
        })

})






module.exports = router;