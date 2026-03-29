import React, { useEffect, useState } from "react";
import { movies as dummyMovies } from "../utils/movies";

function Row({ title, genre, searchQuery }) {
  const [movieList, setMovieList] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  const btnStyle = {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid #fff",
    color: "white",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    cursor: "pointer",
  };

  useEffect(() => {
    let list = dummyMovies.filter((m) => m.genre === genre);

    if (searchQuery) {
      list = list.filter((m) =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setMovieList(list);
  }, [genre, searchQuery]);

  if (movieList.length === 0) return null;

  return (
    <div style={{ margin: "32px 0 0 24px" }}>
      <h2
        style={{
          color: "white",
          fontSize: "18px",
          fontWeight: "700",
          marginBottom: "14px",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "10px",
        }}
      >
        {movieList.map((movie) => (
          <div
            key={movie.id}
            onMouseEnter={() => setHoveredId(movie.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              position: "relative",
              flexShrink: 0,
              width: hoveredId === movie.id ? "280px" : "150px",
              height: hoveredId === movie.id ? "360px" : "225px",
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              zIndex: hoveredId === movie.id ? 100 : 1,
              background: "#141414",
            }}
          >
            {hoveredId === movie.id ? (
              <video
                src={movie.video}
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "60%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src={movie.poster_path}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}

            {hoveredId === movie.id && (
              <div style={{ padding: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <button style={btnStyle}>▶</button>
                  <button style={btnStyle}>＋</button>
                  <button style={btnStyle}>👍</button>
                </div>

                <h4 style={{ color: "white", margin: "0 0 6px" }}>
                  {movie.title}
                </h4>

                <p style={{ color: "#aaa", fontSize: "12px" }}>
                  {movie.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;