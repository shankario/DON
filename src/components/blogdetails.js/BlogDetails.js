import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "../../blog/useFetch";
import { Button } from "react-bootstrap";


const BlogDetails = () =>{
    const {id} = useParams()
    const {data: blog} = useFetch('http://localhost:4001/blogs/' +id);

    return (
        <div className="details">
            <h4>Blog details {id}</h4>
             {blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>Done by:{blog.author}</p>
                    <div>{blog.body}</div>
                    <Button className="mt-3" variant="danger">delete</Button>
                </article>

             )}

            

        </div>
    );
}
export default BlogDetails;