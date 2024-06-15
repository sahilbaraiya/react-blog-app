import React, { useEffect,useState } from 'react'
import appwriteService from '../appwrite/config'
import { PostCard ,Container} from '../components'
import authService from '../appwrite/auth'


function MyProduct() { 
    

    //new 
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        authService.getCurrentUser().then((res)=>{ 
            console.log("response of currentUser is ",res);
            if(res){
                console.log("currentUser's res.$id is ",res.$id);
                    if(res.$id){
                        setUserId(res.$id);
                    }
                console.log("userId is",userId);
            }
    })

    }, []);

    useEffect(() => {
        // Fetch posts only if userId is available
        if (userId) {
            appwriteService.getMyPost(userId).then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                    console.log("posts.document is ",posts.documents);
                    
                }
            });
        }else{
            console.log("userId of user is not available");
        }
    }, [userId]);

 
    
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            
                {posts.map((post) => (
                    
                    <div key={post.$id} className='p-2'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )

};
    
export default MyProduct;