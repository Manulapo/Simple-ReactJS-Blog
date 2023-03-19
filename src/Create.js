import { useState } from "react";
//direct redirect hook
import { useHistory } from "react-router-dom";

const Create = () => {
    // title
    const [title, setTitle] = useState('')
    // body
    const [body, setBody] = useState('')
    // author
    const [author, setAuthor] = useState('mario')

    // creating history object that redirect the user
    const history = useHistory();

    //handle form submit
    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title,body,author}

        console.log(blog);

        //handling PendingSate #1
        setIsPending(true);

        //post request to JSON Server
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new Blog Added')
            //handling PendingSate #2
            setIsPending(false);
            //redirect to the homepage
            // history.go(-1) // prev page
            history.push('/')
        })

    }

    const [isPending, setIsPending] = useState(false);


    
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form 
            onSubmit={handleSubmit}
            action="">
                <label htmlFor="">blog title:</label>
                <input 
                type="text" 
                required 
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">blog body:</label>
                <textarea 
                required
                value = { body }
                onChange = {(e) => setBody(e.target.value)}
                >
                </textarea>
                <label htmlFor="">Blog Author</label>
                <select
                value={ author }
                onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
                {/* --------------------- */}
                <br />
                <br />
                <h2>Blog Preview</h2>
                <h3>{ title }</h3>
                <br />
                <p>{ body }</p>
                <p style={{fontSize: 0.7 + 'em'}}>-{ author }</p>
            </form>
        </div>
    );
}
 
export default Create;