"use client"
import axios from "axios"
import { useState } from "react"

interface User {
    email: string,
    password: string
}
export default function SignupComponent() {
    const [data, setData] = useState<User>({
        email: "",
        password: ""
    })

    async function signupHandler() {
        alert("form submitted")
        await axios.post("http://localhost:3000/api/user", data)
        setData({
            email: "",
            password: ""
        })
    }

    return <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <div className="flex flex-col  gap-2.5 shadow-md border border-gray-500 p-10 rounded-2xl">
            <span className="text-gray-700 text-center font-medium">Sign up page</span>

            <input
                value={data.email}
                onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                className="border-gray-700 border rounded-md p-2 w-80"
                type="text"
                name=""
                placeholder="Enter your email" />

            <input
                value={data.password}
                onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))}
                className="border-gray-700 border rounded-md p-2 w-80"
                type="text"
                placeholder="Enter your password" />
            <button
                onClick={signupHandler}
                className="p-2 bg-black text-white rounded-md"
                type="submit">
                Signup
            </button>
        </div>
    </div>
}