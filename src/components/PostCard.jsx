import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'


//new responsive

// function PostCard({ $id, title, featuredImage, originalPrice, sellingPrice, location }) {
//   return (
//     <Link to={`/post/${$id}`}>
//       <div className="w-full bg-gray-100 rounded-xl p-4 shadow-lg hover:shadow-slate-700 h-full">
//         <div className="w-full justify-center mb-4">
//           <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="rounded-xl w-full h-40 object-cover" />
//         </div>
//         <h2 className="text-xl font-bold">{title}</h2>
//         <div className="m-3 p-2 flex flex-wrap">
//           <label><pre className="font-bold">Original Price: </pre></label> 
//           <h2 className="text-orange-500 font-extrabold">{originalPrice}.Rs</h2>
//           <label><pre className="font-bold">Selling Price: </pre></label> 
//           <h2 className="text-green-600 font-extrabold mr-3">{sellingPrice}.Rs</h2>
//           <label><pre className="font-bold">Location/City: </pre></label> 
//           <h2 className="text-gray-800 font-extrabold">{location}</h2>
//         </div>
//       </div>
//     </Link>
//   );
// }


//new
function PostCard({ $id, title, featuredImage, originalPrice, sellingPrice, location }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 shadow-lg transition duration-300 ease-in-out transform hover:bg-gray-200 hover:shadow-xl">
        <div className="w-full h-40 mb-4 relative">
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="rounded-xl w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="flex flex-wrap items-center">
          <div className="mr-4 mb-2">
            <label className="font-bold">Original Price:</label>
            <h2 className="text-orange-500 font-extrabold ml-1">{originalPrice || 0}.Rs</h2>
          </div>
          <div className="mr-4 mb-2">
            <label className="font-bold">Selling Price:</label>
            <h2 className="text-green-600 font-extrabold ml-1">{sellingPrice || 0}.Rs</h2>
          </div>
          <div className="mb-2">
            <label className="font-bold">Location/City:</label>
            <h2 className="text-gray-800 font-extrabold ml-1">{location || "Unknown"}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}


export default PostCard