import React,{useEffect,useState} from 'react'
import Link from 'next/link'

const Blogpost = () => {

    const axios = require('axios');
    let [allObjects,setAllObjects] = useState([])

    

    useEffect(()=>{
        axios.get('http://localhost:5000/blogs').then((response) =>{
        console.log(response.data)
        setAllObjects(response.data);

    })
        

        


    },[])
    


  

    const BlogList = [
        {
            
            title:"Lets Talk about Homosexuality",
            author: "Ayush Sharma",
            image:"https://google.com/devsoc",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis asperiores eveniet id maiores, soluta laboriosam architecto assumenda blanditiis expedita velit explicabo unde neque est, iste fuga sit tenetur ipsam enim quae sed! Veritatis aperiam commodi sunt laboriosam magnam mollitia nulla ipsam accusantium, voluptates iusto sint provident quidem dignissimos alias molestias incidunt saepe quasi omnis. Vel, reiciendis omnis similique ad repellendus possimus illum quaerat ab deserunt ratione vitae necessitatibus odit. Ut minima consequatur omnis, tempora aliquam velit animi. Modi qui quidem ea doloribus neque repudiandae nobis harum deleniti, quisquam inventore. Impedit esse ipsum tenetur inventore quae eaque facilis, ullam voluptatibus consequatur?"

        },
        {
            
            title:"Lets Talk about Homosexuality",
            author: "Ayush Pal",
            image:"https://google.com/devsoc",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis asperiores eveniet id maiores, soluta laboriosam architecto assumenda blanditiis expedita velit explicabo unde neque est, iste fuga sit tenetur ipsam enim quae sed! Veritatis aperiam commodi sunt laboriosam magnam mollitia nulla ipsam accusantium, voluptates iusto sint provident quidem dignissimos alias molestias incidunt saepe quasi omnis. Vel, reiciendis omnis similique ad repellendus possimus illum quaerat ab deserunt ratione vitae necessitatibus odit. Ut minima consequatur omnis, tempora aliquam velit animi. Modi qui quidem ea doloribus neque repudiandae nobis harum deleniti, quisquam inventore. Impedit esse ipsum tenetur inventore quae eaque facilis, ullam voluptatibus consequatur?"

        }
       
    ];
    console.log(BlogList);
    // console.log(allObjects[0].blogTitle)
  return (
    <div className="blog-container">
        <div className="blog-container-list">
            <h2>Blogs</h2>
            <h3>Express yourself and Learn from others</h3>
            {allObjects.map((post) => (
                <div className="blog">
                    <div className="blog-image">
                        
                    </div>
                    <div className="blog-item">
                        <h4>{post.blogTitle}</h4>
                        <h5>{post.blogAuthor}</h5>
                        <p>{post.blogBody}</p>
                    </div>
                </div>
            ))}
            
        </div>
        <div className="blog-container-create">
            <h2>Share or express your prespective in a blog form</h2>
            <h3>Do you have writing ablity to create a blog</h3>
        <Link  href="/createBlog" type="button" ><h4>Create Blog</h4></Link>
        </div>
    </div>
  )
}

export default Blogpost