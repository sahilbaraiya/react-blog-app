import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import appwriteService from '../appwrite/config'

function Location() {
    const [searchTerm,setSearchTerm]=useState('')
    const [searchResults,setSearchResults]=useState([]);

  const searchHandle=(e)=>{
    setSearchTerm(e.target.value);
  }

  //getting data
  const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

  useEffect(()=>{
    //filter it
    const results = posts.filter((post)=>(post.location.toLowerCase().includes(searchTerm.toLowerCase())));

    setSearchResults(results);
  },[searchTerm])

  return (
    <>
        <div>
            <input
                value={searchTerm}
                type='text'
                placeholder='search here'
                onChange={searchHandle}
            />

            <ul>
              {
                searchResults.map((index,post)=>(
                  <li key={index}>{post}</li>
                ))
              }
            </ul>
        </div>
    </>
  )
}

export default Location