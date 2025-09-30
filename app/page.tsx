import axios from "axios"

async function getUserData() {
  try {
    const response = await axios.get("http://localhost:3000/api/user")
    return response.data
  } catch (error) {
    console.log("Error whiel getting user's data", error)
    return error
  }
}

export default async function Home() {
  const userDetails = await getUserData()
  return <div className="flex flex-col justify-center items-center h-screen">
    
      <span>{userDetails?.username}</span>

      <span>{userDetails?.email}</span>
  </div>
}