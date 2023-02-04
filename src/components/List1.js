import React from "react";
import Card1 from "./Card1";

import "./List1.css";

const List1 = (props) => {
  return (
    <div>
      <ul>
        <li className="list">
          {props.data.map((user) => (
            <button>
              <Card1
                key={user.id}
                id={user.id}
                image={user.image}
                title={user.title}
                descr={user.descr}
                onClick={props.onClick}
              />
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default List1;
