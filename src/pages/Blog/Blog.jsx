import "./blog.css";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
// import Blogyazilari from "../../Components/Blogyazilari/Blogyazilari";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPosts } from "../../Slice/Blogslice";

const Blog = () => {
  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => state.blogs.items);
  const loading = useSelector((state) => state.blogs.loading);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          blogPosts.map((post) => (
            <div className="blog-page">
              <div className="left-side-blog side-blog-items">
                <div className="card-blog-img">
                  to={`/Blog/${post.id}`} key={post.id}
                  <Link>
                    <img src={post.image} />
                  </Link>
                </div>
                <div className="card-blog-body">
                  <h1>{post.topic}</h1>
                  <span>
                    <Link>
                      Daha çox <GoArrowRight />
                    </Link>
                  </span>
                </div>
              </div>
              <div className="right-side-blog side-blog-items">
                <div className="right-card-blog">
                  <div className="right-image">
                    <img src={post.image} />
                  </div>
                  <div className="right-card-body">
                    <h1>{post.topic}</h1>
                    <Link>
                      Daha çox <GoArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="right-card-blog">
                  <div className="right-image">
                    <img src={post.image} />
                  </div>

                  <div className="right-card-body">
                    <h1>{post.topic}</h1>
                    <Link>
                      Daha çox <GoArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="right-card-blog">
                  <div className="right-image">
                    <img src={post.image} />
                  </div>
                  <div className="right-card-body">
                    <h1>{post.topic}</h1>
                    <Link>
                      Daha çox <GoArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* <Blogyazilari /> */}
    </div>
  );
};

export default Blog;
