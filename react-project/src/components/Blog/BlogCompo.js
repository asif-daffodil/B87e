"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogCompo = () => {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setData(res.data);
            })
    }, [data]);

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl mb-3">This is blog page</h2>
            <button className="border-4 border-blue-600 rounded-md px-3 py-1 font-bold text-blue-600 mb-3 hover:bg-blue-600 hover:text-white" >Click Me</button>
            {data.map((item) => {
                return (
                    <BlogCard key={item.id} item={item} />
                );
            }
            )}
        </div>
    );
};

export default BlogCompo;