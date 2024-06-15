import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;



    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

//******** */


    //debug in appwrite database permission -- solved
    //delete confirmation message added
    const deletePost = () => {
        // console.log("entered");
        const confirmDelete = window.confirm("Are you sure you want to delete This ? ")
        
        if (confirmDelete) {
            appwriteService.deletePost(post.$id).then((status) => {
                if (status) {
                    // console.log("status is ",status);
                    appwriteService.deleteFile(post.featuredImage);
                    navigate("/");
                }
            });
        }
    };





//for good image zoom-in
//font changed
return post ? (
    <div className="py-8 font-roboto">
        <Container>
            <div className="w-full flex justify-center mb-4 relative border rounded-xl overflow-hidden shadow-lg">
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-xl max-w-full max-h-72 object-cover object-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={(e) => e.target.classList.toggle("zoomed")}
                />

                {isAuthor && ( 
                    <div className="absolute top-6 right-6 flex space-x-3">
                        <Link to={`/edit-post/${post.$id}`}>
                            <button className="px-4 py-2 text-white bg-green-500 rounded focus:outline-none focus:ring focus:ring-violet-300 hover:bg-green-600 transition duration-300">
                                Edit
                            </button>
                        </Link>
                        <button onClick={deletePost} className="px-4 py-2 text-white bg-red-500 rounded focus:outline-none focus:ring focus:ring-violet-300 hover:bg-red-600 transition duration-300">
                            Delete
                        </button>
                    </div>
                )}
            </div>
            <div className="w-full mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-4">{post.title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg">
                        <h2 className="font-semibold text-blue-800">Original Price:</h2>
                        <p className="text-lg text-blue-700">{post.originalPrice}</p>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-lg">
                        <h2 className="font-semibold text-purple-800">Selling Price:</h2>
                        <p className="text-lg text-purple-700">{post.sellingPrice}</p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg">
                        <h2 className="font-semibold text-indigo-800">Seller's Location:</h2>
                        <p className="text-lg text-indigo-700">{post.location}</p>
                    </div>
                    <div className="bg-pink-100 p-4 rounded-lg">
                        <h2 className="font-semibold text-pink-800">Contact the Owner:</h2>
                        <p className="text-lg text-pink-700">{post.Contact}</p>
                    </div>
                </div>
            </div>
            <div className="w-full mb-6 bg-gray-100 p-4 rounded-lg">
                <h2 className="font-semibold text-green-800 text-xl mb-2">Details of Product:</h2>
                <div className="text-lg text-gray-800">{parse(post.content)}</div>
            </div>
        </Container>
    </div>
) : null;





}