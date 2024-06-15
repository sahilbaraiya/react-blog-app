import React from 'react';
import PostCard from '../components/PostCard';

//original
// function List(props) {
//   const { data } = props;
  
//   return (
//   <>
//     <div className="grid grid-cols-3 gap-4">
//       {data.map((post) => (
//         <div key={post.$id} className="p-2 ">
//           <PostCard
//             $id={post.$id}
//             title={post.title}
//             featuredImage={post.featuredImage}
//             location={post.location}
//           />
//         </div>
//       ))}
//     </div>
//   </>
//   );

// }

//responsive
// function List(props) {
//   const { data } = props;

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {data.map((post) => (
//           <div key={post.$id} className="p-2">
//             <PostCard
//               $id={post.$id}
//               title={post.title}
//               featuredImage={post.featuredImage}
//               location={post.location}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// function List(props) {
//   const { data } = props;

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {data.map((post) => (
//           <div key={post.$id} className="p-2">
//             <div className="min-w-0">
//               <PostCard
//                 $id={post.$id}
//                 title={post.title}
//                 featuredImage={post.featuredImage}
//                 location={post.location}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }


function List(props) {
  const { data } = props;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((post) => (
          <div key={post.$id} className="p-2">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <PostCard
                  $id={post.$id}
                  title={post.title}
                  featuredImage={post.featuredImage}
                  location={post.location}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
