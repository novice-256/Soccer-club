import React from "react";

export default function Event(props) {
  return (
    <div>
      <hr />
      <ul class="border border-light">
        <img
          src={props.img}
          alt=""
          className="img img-responsive img-thumbnail"
          width={"50%"}
        />
        <a href="" class="text-decoration-none">
          <li>
            <em>{props.title}</em>
          </li>
        </a>
        <p class="my-0 mx-2">{props.details}</p>
        <div class="">
          <sub class="text-secondary mx-2">Dated: 2-feb-2023</sub>
          <sub class="text-secondary mx-2">
            <span>By: </span>
            Fox News
          </sub>
        </div>
      </ul>
    </div>
  );
}
