import React, { useState } from "react";

import "../index.css";

function TodoList({ posts, remover, editor }) {
  // onClick={() => editor(post)}

  return (
    <div className="todo-list">
      {posts.map((post) => (
        <div className="cart" key={post.id}>
          <p onClick={() => remover(post)}>-</p>
          <h2>{post.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
