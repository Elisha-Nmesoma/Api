//i learnt that since we are using tsx, there's a need to indicate what props the search and setSerach recives which in this case is a string.
// setSearch cannot be set to string because it is a fxn thta will set the serch to a string. setSearch("string"). whi
function Search({ search, setSearch }: {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}) {
    return (
        <div className='flex gap-4 ml-auto fixed top-4 right-[10%] w-xs'>
            <div
                className='flex max-w-xs w-full bg-gray-100 px-4 py-2.5 outline outline-transparent border border-gray-200 focus-within:border-slate-900 focus-within:bg-transparent transition-all'>
                <input
                    type='text'
                    placeholder='Search...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full text-sm bg-transparent outline-none pr-2' />

            </div>
        </div>
    )
}

export default Search