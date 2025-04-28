import "./Blogs.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function BlogPage() {
  const { id: paramId } = useParams();
  const [markdown, setMarkdown] = useState("");

  // Convert id to string if needed
  const id = typeof paramId === "string" ? paramId : String(paramId);

  const s3URL =
    "https://ichiro-dev-portfolio-blog-md.s3.amazonaws.com/" + id + ".md";

  useEffect(() => {
    fetch(s3URL)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [s3URL]);

  return (
    <div className="canvas">
      <div className="blog-post-frame">
        <div className="markdown">
          <ReactMarkdown children={markdown} />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
