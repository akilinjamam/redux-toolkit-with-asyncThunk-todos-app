import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
    const {isLoading,posts, error} = useSelector(state => state.posts);
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    },[dispatch])

    return (
        <div>
            <h1>view post:</h1>
            {isLoading && <h3>Loading....</h3> }
            {error && <h3>{error}</h3> }
            {
                posts.map(data => {
                    return (
                        <article key={data.id}>
                            <h5>{data.title}</h5>
                            <p>{data.body}</p>
                        </article>
                    )
                })
            }
        </div>
    );
};

export default PostView;