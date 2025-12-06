import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function HomePage() {
    const [dropdown, setDropDown] = useState(false);
    const toggledropDown = () => dropdown === false ? "" : " "
    useEffect(() => { toggledropDown() }, [])
    return (
        <>
            <div className="flex justify-center items-center bg-gray-200 h-screen">
                <div className="p-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="rounded-2xl bg-linear-to-r from-purple-100 via-gray-100 to-purple-50 px-6 py-8 sm:py-14">
                            <div className="max-w-3xl mx-auto text-center text-slate-900">
                                <h2 className="text-3xl md:text-4xl font-semibold mb-4">Fetch Api tutorial</h2>
                                <div className="flex flex-col items-center text-lg text-slate-600 ">
                                    <p >
                                        The app fetches and update content from an external API and displays it across different pages. Each item in the dropdown menu leads to its own page, and React Router manages the navigation. This keeps the app efficient, fast, and always synced with the latest available data.
                                    </p> <br />
                                    <p>In this Project, I learnt how to fetch HTTP api, use useEffect hook, use filter to search for item that matches the data, use the local storage to save and get items.</p>
                                </div>
                                <div className="dropdowncontainer relative w-max mx-auto">
                                    <button type="button"
                                        onClick={() => setDropDown(!dropdown)}
                                        className="px-7 py-3 rounded-md cursor-pointer text-purple-700 hover:text-white active:text-white active:bg-purple-700 text-base tracking-wider font-medium border border-purple-700 outline-0 bg-transparent hover:bg-purple-700 transition-all duration-300 mt-8">
                                        See More  &rarr;
                                    </button>

                                    {/* toggle dropdown */}
                                    {dropdown && (
                                        <ul className="absolute shadow-lg bg-white py-2 z-1000 min-w-full w-max rounded-md max-h-96 overflow-auto">
                                            <li className=" py-2.5 pl-5 pr-16 hover:bg-blue-50 text-slate-600 text-sm font-medium cursor-pointer"><Link to='/users'>Users</Link></li>
                                            <li className=" py-2.5 pl-5 pr-16 hover:bg-blue-50 text-slate-600 text-sm font-medium cursor-pointer"><Link to='/posts'>Posts</Link></li>
                                            <li className=" py-2.5 pl-5 pr-16 hover:bg-blue-50 text-slate-600 text-sm font-medium cursor-pointer"><Link to='/photos'>Photos</Link></li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default HomePage