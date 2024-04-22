// import React from "react";
// import "./blogcards.css";
// import { CiSearch } from "react-icons/ci";
// import { FiFilter } from "react-icons/fi";
// import { Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCategories } from "../../Slice/Blogslice";

// const Blogyazilari = () => {
//   const dispatch = useDispatch();
//   const productlist = useSelector((state) => state.uzvler.items);

//   const loading = useSelector((state) => state.uzvler.loading);

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   return (
//     <div className="blog-cards">
//       <div className="search-top">
//         <Container>
//           <div className="search">
//             <div>
//               <h4 class="title">🚀 Bloq yazıları</h4>
//               <p>
//                 İstənilən mövzuda yazıçıların hekayələrini, düşüncələrini və
//                 təcrübələrini kəşf edin.
//               </p>
//             </div>
//             <div>
//               <div className="search-side">
//                 <input
//                   type="text"
//                   id="search"
//                   name="search"
//                   placeholder="Axtarish..."
//                 />
//                 <button>
//                   <CiSearch />
//                 </button>
//               </div>
//             </div>
//             <iv>
//               <div className="filter-side">
//                 <button>
//                   Filtr <FiFilter />
//                 </button>
//               </div>
//             </iv>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Blogyazilari;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./blogcards.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { fetchBlogPosts } from "../../Slice/Blogslice"; // This would be your action to fetch blog posts

// const Blogyazilari = () => {
//   const dispatch = useDispatch();
//   const blogPosts = useSelector((state) => state.blogs.items); // Access the blog posts from the Redux store
//   const loading = useSelector((state) => state.blogs.loading); // Access the loading state

//   useEffect(() => {
//     dispatch(fetchBlogPosts()); // Dispatch the action to fetch blog posts
//   }, [dispatch]);

//   return (
//     <div className="blog-cards">
//       {/* ...existing code... */}
//       <div className="container">
//         {loading ? (
//           <div>Loading...</div> // Replace this with your actual loading spinner or placeholder
//         ) : (
//           blogPosts.map((post) => (
//             <div className="card" key={post.id}>
//               <div className="card-img">
//                 <img src={post.image} alt={post.title} />
//               </div>
//               <div className="card-body">
//                 <h1>{post.title}</h1>
//                 <p>{post.excerpt}</p>
//                 {/* ...other post details... */}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blogyazilari;
