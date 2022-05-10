import React from "react";
import Resource from "./Resource";
import s from "../Articles/article.module.scss";

const Resources = ({ resources }) => {
  return (
    <div className={s.container}>
      {resources.map((resource) => (
        <Resource key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default Resources;
