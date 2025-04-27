import SinglePost from "@/components/Blog/SinglePost";


const page = async({params}) => {
    const { id } = await params
    
    return (
        <div>
            <SinglePost postId={id} />
        </div>
    );
};

export default page;