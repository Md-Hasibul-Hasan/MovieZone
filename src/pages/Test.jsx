import React from 'react';
import { movies } from '../data/data';
import { useState } from 'react';


const Test = () => {
    const [mv,setmv] = useState(movies);
    const [action, setaction] = useState("Action");
    const categories = [
        "All",
        "Action",
        "Thriller",
        "Animation",
        "Drama",
        "Horror",
        "Sci-Fi",
    ];

    const handler = (cat)=>{
        setaction(cat);
        if(cat==="All") setmv(movies);
        else{
            const fil = movies.filter((item)=>(
                item.category===cat
            ))
            setmv(fil);
        }
    }

    return (
        <div>
            <div>
                {categories.map((item)=>(
                    <button
                    className={` px-4 py-2 rounded-md ${action===item ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
                    onClick={() => handler(item)}
                    >
                    {item}
                    </button>
                ))}
            </div>
            <div>
                {mv.map((item)=>(
                    <div>{item.title}</div>
                ))}
            </div>
        </div>
    );
};

export default Test;