const getPosts = async () => {
  const response = await fetch(`http://localhost:8080/post`);
  const posts = await response.json();
  console.log(posts);
};

const Posts = getPosts();

export default Posts;
