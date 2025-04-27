"use client"

// navigate to blog page/id page
import { useRouter } from "next/navigation";

const BlogCard = ({ item }) => {
    const router = useRouter();

    const handleReadMore = (id) => {
        router.push(`/blog/${id}`);
    };
    
    return (
        <div key={item.id} className="border-2 border-gray-400 rounded-md p-3 mb-3">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p>{item.body}</p>
            <button className="border-2 border-blue-600 rounded-md px-3 py-1 font-bold text-blue-600 hover:bg-blue-600 hover:text-white mt-3" onClick={() => handleReadMore(item.id)}>Read More</button>
        </div>
    );
};

export default BlogCard;