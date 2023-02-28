import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GoBackBtn from "../components/GoBackBtn";

function Article() {
  const [post, setPost] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  let fetchPost = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div>
        <GoBackBtn onClick={() => navigate(-1)}>Go back</GoBackBtn>
      </div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
}

export default Article;
