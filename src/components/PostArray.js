import { useState } from "react";
import TodoList from "./TodoList";
import '../index.css'

function PostArray() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleClick = () => {
    const editor = {
      id: Date.now(),
      name: input,
    };
    setPosts([...posts, editor]);
    console.log(posts);
    setInput("");
  };

  const removeTask = (item) => {
    const remover = [...posts].filter((post) => post.id !== item.id);
    setPosts(remover);
  };

  const editTask = (item) => {
    const editing = [...posts].filter((post) => post.id === item.id);
    editing.forEach((edit) => {
      edit.name = input;
    });
    setPosts([...posts]);
  };
  return (
    <main>
      <div className="todo-form">
        <input type="text" value={input} onChange={handleChange} />
        <p onClick={() => handleClick()}>+</p>
      </div>
      <div>
        <TodoList posts={posts} remover={removeTask} editor={editTask} />
      </div>
    </main>
  );
}

export default PostArray;
