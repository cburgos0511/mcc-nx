import React from "react";
import s from "../../components/MesaagesArchieve/home.module.scss";
import Table from "../../components/MesaagesArchieve/Table";
import useSWR from "swr";

const Messages = () => {
  const { data: msg } = useSWR("/api/message");
  if (!msg) return <div>loading...</div>;

  return (
    <section className={s.mainContainer}>
      <Table messages={msg} />
    </section>
  );
};

export default Messages;
