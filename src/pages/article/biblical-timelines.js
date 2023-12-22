import React from "react";
import s from "../../components/Articles/timelines.module.scss";

const data = [
  {
    id: 0,
    pdf: "/docs/Condensed_Timeline.pdf",
    title: "Biblical History",
    description:
      "A detailed 7000 year history of the world from the Bible perspective.",
    author: "Dan Backens",
    date_published: "Jan 1, 2002",
  },
  {
    id: 1,
    pdf: "/docs/History_of_Man.pdf",
    title: "Adam to Christ",
    description: "A summary version of the 4000 years from Adam to Christ.",
    author: "Dan Backens",
    date_published: "Jan 1, 2002",
  },
  {
    id: 2,
    pdf: "/docs/seventy_sevens_of_daniel_9.pdf",
    title: "Daniel's 70 Weeks",
    description: "An explanation of the vision of Daniel chapter 9.",
    author: "John Malone",
    date_published: "Apr 1, 2000",
  },
];

const BiblicalTimelines = () => {
  return (
    <main className={s.main}>
      <h1 className={s.title}>Biblical Timelines</h1>
      {data.map((timeline) => {
        return (
          <div className={s.wrapper}>
            <div>
              <h3 className={s.linkTitle}>{timeline.title}</h3>
            </div>
            <div>
              <p className={s.paragraph}>{timeline.description}</p>
            </div>
            <a
              className={s.link}
              href={timeline.pdf}
              target="_blank"
            ></a>
            <div className={s.info}>
              <p className={s.author}>{timeline.author}</p>
              <div className={s.divider} />
              <p className={s.date}>{timeline.date_published}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default BiblicalTimelines;
