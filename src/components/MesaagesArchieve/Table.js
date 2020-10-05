import React, { useState } from "react";
import TableWrapper from "../TableWrapper";
import s from "./table.module.scss";
import moment from "moment";

const Table = ({ messages }) => {
  const [view, setView] = useState(0);
  const [s3Params, setS3Params] = useState("");
  console.log(messages);

  const table = (
    <TableWrapper
      title="Messages"
      data={messages}
      localization={{
        header: {
          actions: "",
        },
      }}
      options={{
        showTitle: false,
      }}
      columns={[
        {
          title: "Message Name",
          field: "message_name",
        },
        { title: "Speaker", field: "first_name" },
        {
          title: "Series",
          field: "series_name",
        },

        {
          title: "Date Published",
          field: "date",
          render: (row, data) => moment(row.date).utc().format("MM/DD/YYYY"),
        },
        { title: "Duration(minutes)", field: "duration" },
      ]}
    />
  );

  return <div className={s.wrapper}>{table}</div>;
};

export default Table;
