const express=require('express');
const router=express.Router();
const SearchController=require('../controllers/searchlist.controller');
const sessionChecker=require('../middleware/sessionChecker');


router.get('/' ,SearchController.getSearchResult);

router.post('/',SearchController.postSearchRequest);

module.exports=router;