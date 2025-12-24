const StatisticLine = ({
  good,
  good_value,
  bad,
  bad_value,
  neutral,
  neutral_value,
  total,
  total_value,
  average,
  average_value,
  percentage,
  percentage_value,
}) => {
  return (
    <div>
      <table style={{ tableLayout: "fixed", width: "100px" }}>
        <tbody>
          <tr>
            <td style={{ padding: "0px", textAlign: "left", lineHeight: "0" }}>
              {good}
            </td>
            <td
              style={{ padding: "0px", textAlign: "center", lineHeight: "0" }}
            >
              {good_value}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "0px", textAlign: "left", lineHeight: "0" }}>
              {" "}
              {neutral}{" "}
            </td>
            <td
              style={{ padding: "0px", textAlign: "center", lineHeight: "0" }}
            >
              {neutral_value}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "0px", textAlign: "left", lineHeight: "0" }}>
              {" "}
              {bad}{" "}
            </td>
            <td
              style={{ padding: "0px", textAlign: "center", lineHeight: "0" }}
            >
              {bad_value}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "0px", textAlign: "left", lineHeight: "0" }}>
              {" "}
              {total}{" "}
            </td>
            <td
              style={{ padding: "0px", textAlign: "center", lineHeight: "0" }}
            >
              {total_value}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "0px", textAlign: "left", lineHeight: "0" }}>
              {" "}
              {average}{" "}
            </td>
            <td
              style={{ padding: "0px", textAlign: "center", lineHeight: "0" }}
            >
              {average_value}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "0px", textAlign: "left", lineHeight: "0" }}>
              {percentage}
            </td>
            <td
              style={{ padding: "0px", textAlign: "center", lineHeight: "0" }}
            >
              {percentage_value}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticLine;
