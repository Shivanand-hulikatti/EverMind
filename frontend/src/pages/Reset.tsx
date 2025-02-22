import Form from "@/components/form"


export default function SignIn() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Form 
            title = "Reset Password"
            description = "Enter your registered email to continue"
            // name = {true}
            button = "Send Otp"
            // link = "/signup"
        />
      </div>
    </div>
  )
}
