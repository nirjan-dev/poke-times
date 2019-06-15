const initState = {
  posts: [
    {
      id: "1",
      title: "post num 1",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum, soluta magnam nihil aut officiis alias neque labore placeat ad asperiores itaque animi facere, veniam tempore quisquam sit eum aperiam."
    },
    {
      id: "2",
      title: "post num 2",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum, soluta magnam nihil aut officiis alias neque labore placeat ad asperiores itaque animi facere, veniam tempore quisquam sit eum aperiam."
    },
    {
      id: "3",
      title: "post num 3",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum, soluta magnam nihil aut officiis alias neque labore placeat ad asperiores itaque animi facere, veniam tempore quisquam sit eum aperiam."
    }
  ]
};
const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
