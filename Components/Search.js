"use client"
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { useEffect, useRef, useState } from "react";

const Search = ({search}) => {
    const router = useRouter();
    const initialReader = useRef(true);
    const [text, setText] = useState(search);
    const [query] = useDebounce(text,750);

    useEffect (() => {
        if (initialReader.current) {
            initialReader.current = false
            return
        }
        if (!query) {
            router.push("/pokemon");
        } else {
            router.push(`?search=${query}`);
        }
    }, [query]);
    return (
        <div className="d-flex justify-content-center container">
            <input type="text" value={text} placeholder="Search Pokemon..." onChange={(e) => setText(e.target.value)}
            className="w-75 rounded text-black p-2"/>
        </div>)
};

export default Search;


