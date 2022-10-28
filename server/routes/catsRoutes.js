const router = require('express').Router();
const users = require('../db/queries/users');
router.get('/', (req, res) => {
  const cats = ['Rosey', 'Puma', 'Mr Buttons', 'Aya'];
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({users: data});
  })
  //res.json(cats);
});
  

module.exports = router;