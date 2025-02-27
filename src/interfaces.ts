/* interfaces */

interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = {
  name: "Omar",
  avatar: "omar.png",
};

/*------------------------------------------------------------------------------- */

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "my first post",
  body: "this is the body of my first post",
  tags: ["gaming", "tech"],
  create_at: new Date(),
  author: authorOne,
};

/* as function argument types */
function createPost(post: Post): void {
  console.log(`created post ${post.title} by ${post.author.name}`);
}

//needs to have all the properties of the Post interface
createPost(newPost);

/* with arrays */

let posts: Post[] = [];

posts.push(newPost);
