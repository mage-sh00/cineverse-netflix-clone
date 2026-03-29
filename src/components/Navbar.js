import React from "react";

function Navbar({ profile, onLogout, searchQuery, setSearchQuery }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      height: "60px",
      background: "rgba(0,0,0,0.97)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      zIndex: 100,
      borderBottom: "1px solid #1a1a1a",
    }}>
      <h2 style={{ color: "#e50914", fontWeight: "900", fontSize: "22px", letterSpacing: "1px" }}>
        CineVerse
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            background: "#111",
            border: "1px solid #444",
            borderRadius: "20px",
            padding: "6px 16px",
            color: "white",
            fontSize: "13px",
            width: "200px",
            outline: "none",
          }}
        />

        {/* Profile chip */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={profile?.avatar}
            alt={profile?.name}
            style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover" }}
          />
          <span style={{ color: "#ccc", fontSize: "14px" }}>{profile?.name}</span>
        </div>

        <button
          onClick={onLogout}
          style={{
            background: "#e50914",
            color: "white",
            border: "none",
            padding: "6px 14px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          Switch
        </button>
      </div>
    </div>
  );
}

export default Navbar;