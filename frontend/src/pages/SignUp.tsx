import Form from "@/components/form"


export default function SignUp() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Form 
            title = "Register"
            description = "Enter your details to create an account"
            name = {true}
            button = "Send Otp"
            link = "/signin"
        />
      </div>
    </div>
  )
}