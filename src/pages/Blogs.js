import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Tippy from "@tippyjs/react";

import GoBackBtn from "../components/GoBackBtn";

const Container = styled.div`
  padding: 10px;
  border: 2px solid #7e6e13;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const StyledBtn = styled.button`
  padding: 8px;
  color: white;
  background-color: #f2921d;
  cursor: pointer;
  border: none;
`;

const Blogs = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  let fetchPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Blogs</h1>
      <GoBackBtn></GoBackBtn>
      <div>
        {posts.map((onePost) => {
          return (
            <Container key={onePost.id}>
              <h3>{onePost.id}</h3>
              <h3>{onePost.title}</h3>
              <Link to={`/Blogs/${onePost.id}`}>
                <Tippy content="Shows details of this post" placement="right">
                  <StyledBtn>View Details</StyledBtn>
                </Tippy>
              </Link>
            </Container>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
