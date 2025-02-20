import express, { Request, Response } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import shareContent from '../controllers/share';
import getSharedLink from '../controllers/getSharedLink';

const router = express.Router();


// @ts-ignore
router.post('/share',authMiddleware,shareContent);

router.get('/:shareLink',getSharedLink);


export default router;