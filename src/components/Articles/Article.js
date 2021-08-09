import React from "react";
import s from "./article.module.scss";
import Link from "../Link";

const Article = ({ article }) => {
  return (
    <div className={s.article}>
      {!article.resource ? (
        <Link href={article.link}>
          <a className={s.linkWrap}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </a>
        </Link>
      ) : (
        <a
          target="_blank"
          href={article.link}
          rel="noreferrer"
          className={s.linkWrap}
        >
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </a>
      )}

      <div className={s.info}>
        <p className={s.author}>{article.author}</p>
        {article.date_published && (
          <>
            <div className={s.divider} />
            <p className={s.date}>{article.date_published}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Article;
