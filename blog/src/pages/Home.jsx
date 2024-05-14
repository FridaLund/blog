import BlogPosts from '../components/BlogPosts'
import { PostProvider } from '../context/PostContext';

const Home = () => {
    return (
      <>
      <PostProvider>
        <BlogPosts></BlogPosts>
        </PostProvider>
      </>
    );
  };
  
  
  export default Home;
