import { useState, useEffect } from "react"
//this is debounce. it takes two arg the value and the delay.the value is the function to be debounced.
//the delay is the time the search starts after typing in the input filed.
export default function useDebounce<T>(value: T, delay = 900) {
    //T keeps the type as the value. if value recives string, T is string.
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        //thsi function deloys the search
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        //clear timout after the search is performed.
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue;
}