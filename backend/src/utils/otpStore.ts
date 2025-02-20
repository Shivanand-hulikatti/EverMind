const otpStore: Record<string, { otp: string; expiry: number }> = {};

const generateOTP = ()=> Math.floor(100000+Math.random()*900000).toString();

export {otpStore,generateOTP};