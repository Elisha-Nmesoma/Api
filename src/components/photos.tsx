import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Loading from "./Loading"

function Photos() {
    const [photos, setPhotos] = useState<any[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function getPhotos() {
        setLoading(true)
        try {
            const res = await axios('https://jsonplaceholder.typicode.com/posts')
            setPhotos(res.data)
            setLoading(false)
        } catch (error) {
        console.error("failed to fetch data", error)

            setLoading(false)
        }
    }
        getPhotos()
    }, [])
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="bg-gray-100 sm:p-8 p-6">
                    <p className="absolute top-2 left-2 rounded-full bg-white px-2 w-fit text-lg"><Link to='/'> &larr; </Link></p>
                    <div className="max-w-7xl mx-auto mt-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {photos.map(photo => (
                                <div
                                    key={photo.id}
                                    className="shadow-sm bg-white p-1.5 rounded-md overflow-hidden cursor-pointer relative hover:shadow-md">
                                    <a href={photo.url} className="block">
                                        <div className="bg-gray-200 aspect-square">
                                            <img src={photo.thumbnailUrl} className="w-full h-full object-cover object-top" />
                                        </div>
                                        <div className="p-3 pb-1.5 text-center">
                                            <h6 className="text-slate-900 text-sm font-bold truncate">{photo.title}</h6>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Photos