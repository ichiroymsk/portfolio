import { useEffect } from "react";

function Blogs() {
  useEffect(() => {
    // Redirect to Hashnode blog
    window.location.href = "https://ichiro.hashnode.dev/";
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <p>Redirecting to my blog at Hashnode...</p>
    </div>
  );
}

export default Blogs;
