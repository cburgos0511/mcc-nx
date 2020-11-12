import React, { useState, useMemo } from "react";
import TableWrapper from "../TableWrapper";
import s from "./table.module.scss";
import moment from "moment";

const getSpeakers = (data) => {
  let result = {};

  for (let n of data) {
    result[n.first_name] = n.first_name;
  }
  return result;
};
const getSeries = (data) => {
  let result = {};

  for (let n of data) {
    result[n.series_name] = n.series_name;
  }
  return result;
};

const Table = ({ messages }) => {
  const [view, setView] = useState(0);
  const [s3Params, setS3Params] = useState("");

  const speakers = getSpeakers(messages);
  const series = getSeries(messages);

  const table = useMemo(() => {
    return (
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
          filtering: true,
        }}
        columns={[
          {
            title: "Message Name",
            field: "message_name",
          },
          {
            title: "Speaker",
            field: "first_name",
            render: (row, data) => row.first_name,
            lookup: speakers,
          },
          {
            title: "Series",
            field: "series_name",
            render: (row, data) => row.series_name,
            lookup: series,
          },

          {
            title: "Date Published",
            field: "date",
            render: (row, data) => moment(row.date).utc().format("MM/DD/YYYY"),
          },

          { title: "Duration(minutes)", field: "duration", filtering: false },
        ]}
      />
    );
  }, [messages]);

  return <div className={s.wrapper}>{table}</div>;
};

export default Table;
