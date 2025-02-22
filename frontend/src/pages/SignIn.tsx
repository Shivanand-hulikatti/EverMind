import Form from "@/components/form"


export default function SignIn() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Form 
            title = "Login"
            description = "Enter your email and password to login"
            // name = {true}
            button = "Login"
            link = "/signup"
        />
      </div>
    </div>
  )
}