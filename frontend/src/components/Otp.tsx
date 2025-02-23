import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const pastedNumbers = pastedData.replace(/[^\d]/g, "").slice(0, 6);

    const newOtp = [...otp];
    pastedNumbers.split("").forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    const nextEmptyIndex = newOtp.findIndex(val => !val);
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="w-full mx-auto border border-zinc-800 p-6 rounded-md space-y-4">
          <div className="text-2xl font-bold">Verify Your Email</div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="otp" className="text-sm font-semibold">
                Enter the OTP sent to your email
              </label>
              <div className="flex justify-between space-x-2 mt-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    // @ts-ignore
                    ref={el => (inputRefs.current[index] = el)}
                    className="w-10 h-10 md:w-12 md:h-12 text-center text-lg border border-zinc-800 rounded-md focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 outline-none"
                    onChange={e => handleChange(e, index)}
                    onKeyDown={e => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                  />
                ))}
              </div>
            </div>
            <Button 
              className="w-full"
              onClick={() => console.log("Final OTP:", otp.join(""))}
            >
              Verify OTP
            </Button>
            <div className="text-sm text-center text-zinc-500">
              <span>Didn't receive the OTP? </span>
              <button className="underline underline-offset-4 cursor-pointer hover:text-zinc-100">Resend OTP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp