import { Link } from "react-router-dom/cjs/react-router-dom";
const Bloglist = ({blogs,title}) => {
    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="preview" key={blog.id}>
                   <Link to={`/BlogDetails/${blog.id}`}>
                    <h3>{blog.title}</h3>
                    <p>done by: {blog.author}</p>
                   </Link>
                </div>
            ))}
        </div>
    );

}
export default Bloglist;