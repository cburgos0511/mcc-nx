import React from "react";
import s from "../Articles/article.module.scss";
import Link from "../Link";

const Resource = ({ resource }) => {
  return (
    <div className={s.article}>
	    <a
	      target={!resource.local ? '_blank' : null}
	      href={resource.link}
	      rel="noreferrer"
	      className={s.linkWrap}
	    >
	      <h1>{resource.title}</h1>
	      <p>{resource.description}</p>
	    </a>

      <div className={s.info}>
        <p className={s.author}>{resource.author}</p>
        {resource.date_published && (
          <>
            <div className={s.divider} />
            <p className={s.date}>{resource.date_published}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Resource;
