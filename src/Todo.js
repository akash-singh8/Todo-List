import React from "react";
import { db } from "./firebaseDB";
import trashCan from "./trashCan.png";
import edit from "./edit.png";
import "./Todo.css";

function Todo({ todo, id }) {
    function editTodo() {
        let newTodo = prompt("Edit current todo, " + todo);
        db.collection("todos").doc(id).set(
            {
                todo: newTodo,
            },
            { merge: true }
        );
    }

    return (
        <li id="list">
            <p id="todo">{todo}</p>
            <div id="todoFunctions">
                <img
                    className="btn"
                    src={trashCan}
                    alt="delete"
                    onClick={() => db.collection("todos").doc(id).delete()}
                />
                <img className="btn" src={edit} alt="edit" onClick={editTodo} />
            </div>
        </li>
    );
}

export default Todo;
