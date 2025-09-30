import { NextRequest } from "next/server"


export function GET() {
    return Response.json({
        username: "Suraj Rajbhar",
        email: "suraj.rajbhar.tech@gmail.com",
        address: "Appapada kurar"
    })
}

export async function POST(req: NextRequest) {
const data =  await req.json()
    console.log(data)

    return Response.json({
        message:"You are logged in"
    })
}