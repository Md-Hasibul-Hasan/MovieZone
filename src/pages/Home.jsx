// import React, { useState } from "react";
// import { movies } from "../data/data";

// const Home = () => {
//   const [mv, setMv] = useState(movies);
//   const [active, setActive] = useState("All");

//   const categories = [
//     "All",
//     "Action",
//     "Thriller",
//     "Animation",
//     "Drama",
//     "Horror",
//     "Sci-Fi",
//   ];

//   const handleFilter = (category) => {
//     setActive(category);

//     if (category === "All") {
//       setMv(movies);
//     } else {
//       const filtered = movies.filter(
//         (item) => item.category === category
//       );
//       setMv(filtered);
//     }
//   };

//   return (
//     <div className="bg-gray-950 min-h-screen text-white">

//       {/* Navbar */}
//       <div className="bg-black p-4 flex justify-between items-center shadow-lg">
//         <h1 className="text-2xl font-bold text-red-600">MovieFlix</h1>
//         <p className="text-gray-400 hidden md:block">2024 Latest Movies</p>
//       </div>

//       {/* Hero Section */}
//       <div
//         className="h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
//         style={{
//           backgroundImage: `url(${movies[0].backdrop_path})`,
//         }}
//       >
//         <div className="bg-black/70 p-8 rounded-xl">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             {movies[0].title}
//           </h2>
//           <p className="text-gray-300 mb-4">
//             Release Date: {movies[0].release_date}
//           </p>
//           <button className="px-6 py-2 bg-red-600 rounded-full hover:bg-red-700 transition">
//             Watch Now
//           </button>
//         </div>
//       </div>

//       <div className="p-6">

//         {/* Category Buttons */}
//         <div className="flex flex-wrap gap-3 mb-8 justify-center">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleFilter(cat)}
//               className={`px-4 py-2 rounded-full font-semibold transition ${
//                 active === cat
//                   ? "bg-red-600 text-white"
//                   : "bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Movie Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {mv.map((item) => (
//             <div
//               key={item.id}
//               className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
//             >
//               <img
//                 src={item.poster_path}
//                 alt={item.title}
//                 className="w-full h-80 object-cover"
//               />

//               <div className="p-4">
//                 <h2 className="text-lg font-bold">{item.title}</h2>
//                 <p className="text-sm text-gray-400">
//                   {item.release_date}
//                 </p>

//                 <span className="inline-block mt-2 px-3 py-1 text-xs bg-red-600 rounded-full">
//                   {item.category}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Home;









import React, { useState, useEffect } from "react";
import { movies } from "../data/data";

const Home = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 8;

  const categories = [
    "All",
    "Action",
    "Thriller",
    "Animation",
    "Drama",
    "Horror",
    "Sci-Fi",
  ];

  // 🔥 Central Filtering Logic
  useEffect(() => {
    let temp = movies;

    if (active !== "All") {
      temp = temp.filter(
        (item) => item.category === active
      );
    }

    if (search !== "") {
      temp = temp.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredMovies(temp);
    setCurrentPage(1); // reset page on filter/search change
  }, [active, search]);

  /* 📄 PAGINATION */
  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(
    filteredMovies.length / moviesPerPage
  );

  return (
    <div className="bg-gray-950 min-h-screen text-white">

      {/* Navbar */}
      <div className="bg-black p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold text-red-600">MovieFlix</h1>
        <p className="text-gray-400 hidden md:block">2024 Latest Movies</p>
      </div>

      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${movies[0].backdrop_path})`,
        }}
      >
        <div className="bg-black/70 p-8 rounded-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {movies[0].title}
          </h2>
          <p className="text-gray-300 mb-4">
            Release Date: {movies[0].release_date}
          </p>
          <button className="px-6 py-2 bg-red-600 rounded-full hover:bg-red-700 transition">
            Watch Now
          </button>
        </div>
      </div>

      <div className="p-6">

        {/* 🔎 Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                active === cat
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentMovies.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={item.poster_path}
                alt={item.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-sm text-gray-400">
                  {item.release_date}
                </p>
                <span className="inline-block mt-2 px-3 py-1 text-xs bg-red-600 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-3">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-red-600"
                  : "bg-gray-800 hover:bg-red-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;