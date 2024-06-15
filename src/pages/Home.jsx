import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import PostCard from '../components/PostCard'
import { Container } from '../components'
import { Link } from 'react-router-dom'
import List from './List'
import Search from '../components/Search'
import {  useSelector } from 'react-redux'

function Home() {
    const authStatus=useSelector(state=>state.auth.status)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    
    //*****************************for title search */
    const [searchText, setSearchText] = useState(''); 
    const handleSearch = (text) => {
        setSearchText(text);
    };
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchText.toLowerCase())
    );
    
    
        //home without login
    if (posts.length === 0) {
        return (
            
            <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Get Started
                            <span className="hidden sm:block text-4xl">create your account and start journey</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-[#457b9d] rounded-lg hover:opacity-75"
                            to="/login"
                        >
                           
                            login
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Buy and Sell Your Equipment</h1>
        </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                {/* <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div> */}
                     
                   {authStatus &&<Search onSearch={handleSearch} />}
                   
                    <List data={filteredPosts} />
                
            </Container>
        </div>
    )
}

export default Home