import express from "express";
import cors from "cors";
const router = express.Router();
router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
