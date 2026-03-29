import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import ProfileSelect from "./pages/ProfileSelect";
import { movies } from "./utils/movies";

function App() {
  const [profile, setProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  if (!profile) {
    return <ProfileSelect onSelect={setProfile} />;
  }

  const genres = ["Action", "Drama", "Kids", "Thriller"];
  const isSearching = searchQuery.trim().length > 0;
  const matchedGenres = isSearching
    ? [...new Set(
        movies
          .filter((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((m) => m.genre)
      )]
    : genres;

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <Navbar
        profile={profile}
        onLogout={() => setProfile(null)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div style={{ paddingTop: "60px" }}>
        {!isSearching && <Banner />}

        {isSearching && matchedGenres.length === 0 && (
          <p style={{ color: "#888", padding: "40px 24px", fontSize: "15px" }}>
            No movies found for "{searchQuery}"
          </p>
        )}

        {matchedGenres.map((g) => (
          <Row
            key={g}
            title={isSearching ? g : `${g} Movies`}
            genre={g}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </div>
  );
}

export default App;