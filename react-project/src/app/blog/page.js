import BlogCompo from "@/components/Blog/BlogCompo";


export const metadata = {
    title: "Blog",
    description: "This is the blog page",
}

const page = () => {
    return (
        <>
            <BlogCompo />
        </>
    );
};

export default page;