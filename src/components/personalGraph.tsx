import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
  } from "@progress/kendo-react-charts";
  import { COLORS } from "./constants";
  
  export const series = [
    {
      name: "ME:)",
      data: [85,86,85.6,85.1,84.9,84.5,84.1,83,82],
      color: COLORS.total,
    },
  ];
  
  const categories = ["week1","week2","week3","week4","week5","week6","week7","week8","week9"];
  
  export default function Graph(){

   return (
      <Chart style={{ height: 350 }}>
        <ChartTitle text="Application status - last 3 months" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartValueAxis>
          <ChartValueAxisItem title={{ text: "weights" }} min={80} max={90} />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>
          {series.map((item, idx) => (
            <ChartSeriesItem
              key={idx}
              type="line"
              tooltip={{ visible: true }}
              data={item.data}
              name={item.name}
            />
          ))}
        </ChartSeries>
      </Chart>
    );
  };