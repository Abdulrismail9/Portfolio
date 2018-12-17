const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req,res) => {
    let queryString =  `SELECT projects.name, projects.description, projects.github, projects.thumbnail, projects.website, projects.date_completed, tags.name as tag
    FROM projects JOIN tags ON projects.tag_id = tags.id ORDER BY projects.date_completed DESC;`
    pool.query(queryString).then((result)=> {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(error);
    })
})



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

router.delete('/:id', (req,res) => {
    console.log('in delete route')
    elementId = req.params.id;
    let queryText = 'DELETE FROM "projects" WHERE "id"=$1;'
    pool.query(queryText, [elementId])
    .then((result) => {
        console.log('checking delete route', result);
    })
    .catch((error) => {
        console.log('something wrong with delete route', error);
    })
})






module.exports = router;