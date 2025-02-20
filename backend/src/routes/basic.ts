import express, { Request, Response } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import sendOtp from '../controllers/sendOtp';
import signUp from '../controllers/signUp';
import signIn from '../controllers/signIn';
import sendOtpReset from '../controllers/sendOtpReset';
import forgotPassword from '../controllers/forgotPassword';
import postContent from '../controllers/postContent';
import getContent from '../controllers/getContent';
import deleteContent from '../controllers/deleteContent';

const router = express.Router();


// @ts-ignore
router.post('/send-otp',sendOtp);


// @ts-ignore
router.post('/signup',signUp);


// @ts-ignore
router.post('/signin',signIn);


// @ts-ignore
router.post('/send-otp-reset',sendOtpReset);


// @ts-ignore
router.post('/forgot-password',forgotPassword);


// @ts-ignore
router.post('/content',authMiddleware,postContent);


// @ts-ignore
router.get('/content',authMiddleware,getContent);


// @ts-ignore
router.delete('/content',authMiddleware,deleteContent);


export default router;