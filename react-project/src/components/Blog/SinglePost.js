"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const SinglePost = ({postId}) => {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => {
                setData(res.data);
                document.title = res.data.title;
            });
    }, [postId]);

    return (
        <div>
            <h2 className="text-2xl mb-3">This is blog page</h2>
            <Link href="/blog" className="border-4 border-blue-600 block w-max rounded-md px-3 py-1 font-bold text-blue-600 mb-3 hover:bg-blue-600 hover:text-white" >Back</Link>
            <div className="border-2 border-gray-400 rounded-md p-3 mb-3">
                <h3 className="text-xl font-bold">{data.title}</h3>
                <p>{data.body}</p>
            </div>
        </div>
    );
};

export default SinglePost;