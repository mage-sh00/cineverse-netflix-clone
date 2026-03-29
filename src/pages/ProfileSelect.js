import React, { useState } from "react";

const profiles = [
  { id: 1, name: "Magee",  avatar: "https://i.pravatar.cc/150?img=1", color: "#e50914" },
  { id: 2, name: "Kids",   avatar: "https://i.pravatar.cc/150?img=2", color: "#f5a623" },
  { id: 3, name: "Guest",  avatar: "https://i.pravatar.cc/150?img=3", color: "#4a90e2" },
  { id: 4, name: "Family", avatar: "https://i.pravatar.cc/150?img=4", color: "#7ed321" },
];

function ProfileSelect({ onSelect }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Logo */}
      <h1
        style={{
          color: "#e50914",
          fontSize: "36px",
          fontWeight: "900",
          letterSpacing: "2px",
          marginBottom: "10px",
        }}
      >
        CineVerse
      </h1>

      {/* Subtitle */}
      <h2
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: "500",
          marginBottom: "40px",
        }}
      >
        Who's Watching?
      </h2>

      {/* Profile grid */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {profiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => onSelect(profile)}
            onMouseEnter={() => setHoveredId(profile.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              transform: hoveredId === profile.id ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s ease",
            }}
          >
            {/* Avatar with colored ring on hover */}
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "8px",
                padding: "3px",
                background: hoveredId === profile.id
                  ? profile.color
                  : "transparent",
                border: hoveredId === profile.id
                  ? `3px solid ${profile.color}`
                  : "3px solid transparent",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "6px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Name */}
            <p
              style={{
                color: hoveredId === profile.id ? "white" : "#aaa",
                fontSize: "15px",
                fontWeight: hoveredId === profile.id ? "700" : "400",
                marginTop: "12px",
                transition: "color 0.2s ease, font-weight 0.2s ease",
                letterSpacing: "0.5px",
              }}
            >
              {profile.name}
            </p>
          </div>
        ))}
      </div>

      {/* Manage profiles button */}
      <button
        style={{
          marginTop: "48px",
          background: "transparent",
          color: "#aaa",
          border: "1px solid #aaa",
          padding: "10px 28px",
          fontSize: "14px",
          fontWeight: "500",
          letterSpacing: "1px",
          cursor: "pointer",
          borderRadius: "4px",
          transition: "color 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "white";
          e.target.style.borderColor = "white";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#aaa";
          e.target.style.borderColor = "#aaa";
        }}
      >
        Manage Profiles
      </button>
    </div>
  );
}

export default ProfileSelect;