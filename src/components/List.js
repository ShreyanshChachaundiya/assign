import React from "react";
import Card from "./Card";
import "./List.css";

const List = ({ data, onClick }) => {
  return (
    <div>
      <ul>
        <li className="list">
          {data.map((user) => (
            <button>
              <Card
                key={user.id}
                id={user.id}
                image={user.image}
                title={user.title}
                descr={user.descr}
                onClick={onClick}
              />
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default List;
