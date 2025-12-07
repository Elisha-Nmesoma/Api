import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import Search from "./search"
import Loading from "./Loading"
import type { User } from "./types/userType"


function Users() {

    
    const [users, setUsers] = useState<User[]>([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    async function fetchUser() {
        try {
            setLoading(true)
            const res = await axios('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
            //set the post to local storage
            localStorage.setItem("users", JSON.stringify(res.data))
            setLoading(false)
        } catch (error) {
            const storedUsers = localStorage.getItem("users")
            storedUsers && setUsers(JSON.parse(storedUsers))

            setLoading(false)
        }
    }
    useEffect(() => { fetchUser() }, [])



    //filter the users by either email username, name and address
    const findUsers = users.filter((item) => {
        const searchWith = `${item.name} ${item.username} ${item.address} ${item.email}`
        return search.toLowerCase()=== '' ? true : searchWith.toLowerCase().includes(search)
    })
    
    return (
        <>
            {loading ?
                (
                 <Loading />
                ) : (
                    <div className="px-4 py-8 bg-linear-to-t from-green-50 to-purple-50">
                        <p className="fixed top-2 left-2 rounded-full bg-white px-2 w-fit"><Link to='/'> &larr; </Link></p>
                        <Search search={search} setSearch={setSearch} />
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 max-sm:gap-12 max-md:justify-center mt-16">
                            {findUsers.map(person => (
                                <div key={person.id} className="flex items-center">
                                    <div className="ml-6">
                                        <h2>Personal Details</h2>
                                        <p>Username: {person.username}</p>
                                        <h4 className="text-slate-900 text-base">Name: {person.name}</h4>
                                        <p>Email: <a className=" cursor-pointer text-blue-600 font-medium mt-1" href={`mailto:${person.email}`}> {person.email}</a></p>
                                        <p>Address: {person.address.suite}, {person.address.street} {person.address.city}</p>
                                        <p>Tel: {person.phone}</p>
                                        <p>Website:  <a href={person.website}>{person.website}</a> </p>
                                        <p>Company Name: {person.company.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
        </>
    )
}
export default Users
