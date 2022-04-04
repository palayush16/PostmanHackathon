import React from 'react'
import Link from 'next/link'

const CreateBlog = () => {
  return (
    <div className="create-blog-container">
        <form className="form-blog">
            <h2>Create Blog</h2>
            <input className="form-title" type="text" name="" placeholder="Blog title"/>
            
            <input className="form-author" type="text" name="" placeholder="Author"/>
            <Link href="/blog"><input type="submit" name="" value="Upload Image"/></Link>
            <textarea name="paragraph_text" className="form-body" placeholder="Blog Body"></textarea>
            <Link href="/blog"><input type="submit" name="" value="Submit"/></Link>
            
        </form>
    </div>
  )
}

export default CreateBlog