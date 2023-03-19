import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {/* se blogs è null non sputa niente, fino a che blogs è null non butta fuori nulla */}
            {blogs && <BlogList blogs={blogs} title = "all blogs"/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author.toLocaleLowerCase() == 'mario')} title = "Mario's Blogs"/>}
            {/* <button onClick={() => setName('luigi')}>changeName</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}
 
export default Home;