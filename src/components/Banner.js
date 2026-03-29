import React, { useState, useEffect } from "react";
import { movies } from "../utils/movies";

function Banner() {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    // Pick a random movie as the featured banner
    const random = movies[Math.floor(Math.random() * movies.length)];
    setFeatured(random);
  }, []);

  if (!featured) return null;

  return (
    <div style={{ position: "relative", height: "480px", overflow: "hidden" }}>
      {/* Background poster */}
      <img
        src={featured.poster_path.replace("/w500/", "/original/")}
        alt={featured.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.5)",
        }}
      />

      {/* Bottom fade overlay */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "220px",
        background: "linear-gradient(transparent, #000)",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute",
        bottom: "60px",
        left: "40px",
        maxWidth: "500px",
      }}>
        <span style={{
          background: "#e50914",
          color: "white",
          fontSize: "11px",
          fontWeight: "800",
          padding: "3px 10px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          display: "inline-block",
          marginBottom: "10px",
        }}>
          Featured
        </span>

        <h1 style={{
          color: "white",
          fontSize: "42px",
          fontWeight: "900",
          margin: "0 0 10px",
          lineHeight: "1.1",
          textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
        }}>
          {featured.title}
        </h1>

        <p style={{
          color: "#ddd",
          fontSize: "15px",
          lineHeight: "1.6",
          marginBottom: "20px",
        }}>
          {featured.description}
        </p>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={() => {
              const el = document.getElementById("banner-video");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              background: "white",
              color: "black",
              border: "none",
              padding: "10px 26px",
              borderRadius: "5px",
              fontWeight: "800",
              fontSize: "15px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            ▶ Play
          </button>

          <button style={{
            background: "rgba(255,255,255,0.15)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.4)",
            padding: "10px 26px",
            borderRadius: "5px",
            fontWeight: "700",
            fontSize: "15px",
            cursor: "pointer",
            backdropFilter: "blur(4px)",
          }}>
            ⓘ More Info
          </button>
        </div>
      </div>

      {/* Genre badge top-right */}
      <div style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        background: "rgba(0,0,0,0.6)",
        border: "1px solid #555",
        color: "#ccc",
        fontSize: "12px",
        padding: "4px 12px",
        borderRadius: "20px",
      }}>
        {featured.genre}
      </div>
    </div>
  );
}

export default Banner;