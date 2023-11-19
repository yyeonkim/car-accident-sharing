import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { resultVideoCommentsState } from "../atom";

export default function useSetChart() {
  const comments = useRecoilValue(resultVideoCommentsState);

  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      type: "donut",
    },
    responsive: [
      {
        options: {
          chart: {
            width: 300,
          },
        },
      },
    ],
    legend: {
      position: "bottom",
    },
    tooltip: {
      enabled: true,

      onDatasetHover: {
        highlightDataSeries: true,
      },

      y: {
        formatter: (value) => {
          return `${value}명`;
        },
      },
    },
  });

  useEffect(() => {
    const result = countRatioFromComments(comments);

    setSeries(Object.values(result));
    setOptions((prev) => ({ ...prev, labels: Object.keys(result) }));
  }, []);

  const countRatioFromComments = (comments) => {
    let result = {};

    Object.values(comments).forEach((item) => {
      result[item.ratio] = result[item.ratio] ? ++result[item.ratio] : 1;
    });

    return result;
  };

  return { series, options };
}
