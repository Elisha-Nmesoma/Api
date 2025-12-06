import { useEffect, useState, } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Posts() {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        try {
            setLoading(true)
            const result = await axios('https://jsonplaceholder.typicode.com/posts');
            setPosts(result.data)
            //set the posts to local storage
            localStorage.setItem('posts', JSON.stringify(result.data));
            setLoading(false)
        } catch (error) {
            //load stored post if fetch fails
            const storedPosts = localStorage.getItem('posts')
            storedPosts && setPosts(JSON.parse(storedPosts))

            setLoading(false)
        }
    }
    useEffect(() => {  fetchData() }, [])
    return (
        <>
          {loading ? (
            <Loading />
          ): (
              < div className="max-w-7xl mx-auto">
                <div className="px-8 py-12 text-center bg-gray-100 shadow-xl w-full">
                    <p className="fixed top-2 left-2 rounded-full bg-white px-2 w-fit"><Link to='/'> &larr; </Link></p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                        {posts.map(item => (
                            <div key={item.id} className="bg-gray-600 rounded-lg p-6 shadow-md">
                                <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          )}

        </>
    )
}


export default Posts