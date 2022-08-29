import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { resultVideoCommentsState } from "../atom";

export default function useSetChart() {
  const comments = useRecoilValue(resultVideoCommentsState);

  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      type: "donut",
    },
    labels,
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
    let result = new Object();
    Object.values(comments).forEach((item) => {
      result[item.ratio] = result[item.ratio] ? ++result[item.ratio] : 1;
    });
    setLabels(Object.keys(result));
    setSeries(Object.values(result));
    setOptions((prev) => ({ ...prev, labels }));
  }, [series, labels]);

  return { series, options };
}
