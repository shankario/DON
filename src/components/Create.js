// function Create(){
//     return <h1>Hello</h1>
// }

// export default Create
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const Create = () => {
    const [data,setData]=useState({
        title:"",
        author:"",
        body:"",
})
    const handlechange=(e)=>{
        const {name,value}=e.target;
        setData((prev)=>{
            return {...prev,[name]:value}
        }

        )

    }
    const handlesubmit = (e)=>{
        e.preventDefault()

        axios.post(' http://localhost:4001/blogs', data)
        .then(res =>{
            alert("new blog added");
        })
        .catch(err=> console.log(err.message))
    }
    return (
        <div>
            <h5 className="text-danger mb-3">add new blog</h5>
            <Form onSubmit={handlesubmit}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" name="title" onChange={handlechange} placeholder="enter the title"/>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Author</Form.Label>
                  <Form.Control type="text" name="author" onChange={handlechange} placeholder="enter the title"/>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Body</Form.Label>
                  <Form.Control as="textarea" name="body" onChange={handlechange} rows={3} placeholder="enter content of blog..."/>
                </Form.Group>
                <Button variant="primary" className="mt-3" type="submit">save blog</Button>

                
            </Form>
        </div>
    );
}
export default Create;