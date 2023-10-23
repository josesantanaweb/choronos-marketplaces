import { useEffect, useRef } from "react";
import * as d3 from "d3";

import { leadingZero } from "@/utils/leading-zero";
import {
  formatNumber,
  ICurrency,
  IOptionsFormatNumber,
} from "@/utils/format-number";

interface IChartProps {
  data: [number, number][];
  width?: number;
  height?: number;
  marginX?: number;
  marginY?: number;
  type: "line" | "bar";
  currency: ICurrency | undefined;
  isMobile: Boolean;
  tooltipValueFormatOptions?: IOptionsFormatNumber | null;
}

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const formatDate = (date: number) => {
  let d = new Date(date);

  let [day, h, m]: Array<string> = [
    leadingZero(d.getUTCDate(), 2),
    leadingZero(d.getUTCHours(), 2),
    leadingZero(d.getUTCMinutes(), 2),
  ];

  return `${
    monthNames[d.getUTCMonth()]
  } ${day}, ${d.getUTCFullYear()} ${h}:${m}`;
};

const formatValueLabelY = (value: number, maxTickValue: number) => {
  let label = "";

  if (maxTickValue < 1) {
    label = formatNumber(value, { minimumFractionDigits: 4 });
  } else if (maxTickValue < 9) {
    label = formatNumber(value, { minimumFractionDigits: 3 });
  } else {
    label = formatNumber(value, { abbreviate: true });
  }

  return label.replace(/\$|CHR|ETH/, "");
};

export function LineChart(props: IChartProps) {
  const { data, width = 870, height = 348, marginX = 80, marginY = 35 } = props;

  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const toolTipContentRef = useRef(null);
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);

  const maxXTickValue = Math.max(...data.map((el: number[]) => el[1]));

  const xScale = d3.scaleUtc(
    d3.extent(data, (el: number[]) => el[0]).map((el: any) => new Date(el)),
    [marginX + 10, width - 10]
  );

  const yScale = d3.scaleLinear(
    [
      Math.max(...data.map((el: number[]) => el[1])),
      Math.min(...data.map((el: number[]) => el[1])),
    ],
    [marginY, height - marginY]
  );

  const xAxis = d3.axisBottom(xScale).ticks(7);
  const yAxis = d3
    .axisLeft(yScale)
    .ticks(7)
    .tickFormat((value: any) => {
      return formatValueLabelY(value, maxXTickValue);
    });

  const line = d3
    .area(
      (el: number[]) => xScale(el[0]),
      yScale(Math.min(...data.map((el) => el[1]))),
      (el: number[]) => yScale(el[1])
    )
    .curve(d3.curveNatural);

  useEffect(() => {
    if (xAxisRef.current) {
      d3.select(xAxisRef.current as any).call(xAxis as any);
      (xAxisRef.current as any).setAttribute("font-size", "14");
      (xAxisRef.current as any).setAttribute(
        "font-family",
        "TT Firs Neue Trial Var Roman"
      );
    }

    if (yAxisRef.current) {
      d3.select(yAxisRef.current as any).call(yAxis as any);

      (yAxisRef.current as any).setAttribute("font-size", "14");
      (yAxisRef.current as any).setAttribute(
        "font-family",
        "TT Firs Neue Trial Var Roman"
      );
    }

    if (svgRef.current) {
      const tooltip = d3.select(tooltipRef.current);

      const bisect = d3.bisector((d: any) => d[0]).center;
      const ellipseRadius = 8.30617;

      const pointermoved = (event: any) => {
        const i = bisect(data, xScale.invert(d3.pointer(event)[0]));

        const tooltipX = xScale(data[i][0]) - ellipseRadius;
        const tooltipY = yScale(data[i][1]) - ellipseRadius;

        tooltip.style("opacity", 1);
        tooltip.attr("transform", `translate(${tooltipX}, ${tooltipY})`);

        const rect = d3
          .select(toolTipContentRef.current)
          .selectAll("rect")
          .data([,])
          .join("rect")
          .attr("fill", "#2B263D")
          .attr("stroke", "none")
          .attr("rx", "20")
          .attr("ry", "20");

        const text = d3
          .select(toolTipContentRef.current)
          .selectAll("text")
          .data([,])
          .join("text")
          .attr("text-anchor", "middle")
          .call((text: any) =>
            text
              .selectAll("tspan")
              .data([
                formatNumber(data[i][1], { minimumFractionDigits: 7 }),
                formatDate(data[i][0]),
              ])
              .join("tspan")
              .attr("x", 0)
              .attr("y", (_: any, i: any) => `${i * 18}px`)
              .attr("font-weight", "400")
              .attr("font-size", (_: any, i: any) => (i ? 10 : 18))
              .attr("font-family", "TT Firs Neue Trial Var Roman")
              .attr("fill", "currentColor")
              .attr("opacity", (_: any, i: any) => (i ? 0.5 : 1))
              .text((d: any) => d)
          );

        const {
          x,
          y,
          width: textWidth,
          height: textHeight,
        } = (text.node() as any).getBBox();

        if (tooltipX < width / 2) {
          text.attr(
            "transform",
            `translate(${ellipseRadius * 2 + 5 + textWidth / 2 + 15},${
              textHeight / 2 + ellipseRadius - textHeight / 2
            })`
          );
          rect.attr(
            "transform",
            `translate(${ellipseRadius * 2 + 5},${
              ellipseRadius - (textHeight + 30) / 2
            })`
          );
        } else {
          text.attr(
            "transform",
            `translate(${-5 - textWidth / 2 - 15},${
              textHeight / 2 + ellipseRadius - textHeight / 2
            })`
          );
          rect.attr(
            "transform",
            `translate(${-textWidth - 30 - 5},${
              ellipseRadius - (textHeight + 30) / 2
            })`
          );
        }

        rect.attr("width", textWidth + 30);
        rect.attr("height", textHeight + 30);
      };

      const pointerleft = () => {
        tooltip.style("opacity", 0);
      };

      // Wraps the text with a callout path of the correct size, as measured in the page.
      // const size = (text: any, path: any) => {
      //   const { x, y, width: w, height: h } = text.node().getBBox();
      //   text.attr("transform", `translate(${-w / 2},${15 - y})`);
      //   // path.attr(
      //   //   "d",
      //   //   `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`
      //   // );
      // };

      d3.select(svgRef.current)
        .on("pointerenter pointermove", pointermoved)
        .on("pointerleave", pointerleft)
        .on("touchstart", (event: Event) => event.preventDefault());
    }
  }, []);

  // const halfBarWidth = (width - marginX) / (data.length - 1) / 2;

  return (
    <div className="relative w-full">
      <svg
        ref={svgRef}
        className={`w-full aspect-[${width / height}]`}
        viewBox={`0 0 ${width} ${height}`}
      >
        <g style={{ mixBlendMode: "multiply" }} opacity="0.7">
          <path
            fill="url('#areaFill')"
            stroke="none"
            d={line(data as any) as any}
          />
        </g>

        <path
          fill="none"
          stroke="url('#areaBorder')"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          d={
            d3
              .line()
              .curve(d3.curveNatural)
              .x((d: number[]) => xScale(d[0]))
              .y((d: number[]) => yScale(d[1]))(data) as any
          }
        />

        <g
          ref={xAxisRef}
          strokeWidth="0"
          transform={`translate(0,${height - marginY + 10})`}
        />

        <g
          ref={yAxisRef}
          strokeWidth="0"
          transform={`translate(${marginX},0)`}
        />

        <g
          ref={tooltipRef}
          style={{ transition: "opacity 300ms linear" }}
          opacity={0}
        >
          <g ref={toolTipContentRef}></g>

          <g filter="url(#filter0_b_485_11874)">
            <ellipse
              cx="8.30617"
              cy="8"
              rx="8.30617"
              ry="8"
              fill="url(#paint0_linear_485_11874)"
              fillOpacity="0.1"
            />

            <path
              d="M16.4496 8C16.4496 12.3227 12.8095 15.8372 8.30617 15.8372C3.80289 15.8372 0.162783 12.3227 0.162783 8C0.162783 3.67733 3.80289 0.162783 8.30617 0.162783C12.8095 0.162783 16.4496 3.67733 16.4496 8Z"
              stroke="url(#paint1_linear_485_11874)"
              strokeWidth="1"
              fillOpacity="0"
            />
          </g>

          <ellipse
            cx="8.30609"
            cy="8.00051"
            rx="4.07757"
            ry="3.92727"
            fill="white"
          />
        </g>

        <defs>
          <linearGradient id="areaFill" gradientTransform="rotate(68)">
            <stop offset="4.93%" stopColor="rgba(63, 74, 179, 0.50)" />
            <stop offset="96.19%" stopColor="rgba(122, 100, 208, 0.50)" />
          </linearGradient>

          <linearGradient
            id="areaBorder"
            x1="13.3594"
            y1="130.21"
            x2="197.202"
            y2="-228.094"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F4AB3" />
            <stop offset="1" stopColor="#7A64D0" />
          </linearGradient>
          <filter
            id="filter0_b_485_11874"
            x="-8.13915"
            y="-8.13915"
            width="32.8906"
            height="32.2783"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.06958" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_485_11874"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_485_11874"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_485_11874"
            x1="0.324459"
            y1="14.2921"
            x2="18.4193"
            y2="6.52923"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F4AB3" />
            <stop offset="1" stopColor="#7A64D0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_485_11874"
            x1="0.324459"
            y1="14.2921"
            x2="18.4193"
            y2="6.52923"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F4AB3" />
            <stop offset="1" stopColor="#7A64D0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function BarChart(props: IChartProps) {
  const { data, width = 870, height = 348, marginX = 80, marginY = 35 } = props;

  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const toolTipContentRef = useRef(null);
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);

  const maxXTickValue = Math.max(...data.map((el: number[]) => el[1]));

  const xScale = d3.scaleUtc(
    d3.extent(data, (el: number[]) => el[0]).map((el: any) => new Date(el)),
    [marginX + 10, width - 10]
  );

  const xBand = d3
    .scaleBand(
      data.map((el: number[]) => el[0]),
      [marginX, width]
    )
    .padding(0.5);

  const yScale = d3.scaleLinear(
    [
      Math.max(...data.map((el: number[]) => el[1])),
      Math.min(...data.map((el: number[]) => el[1])),
    ],
    [marginY, height - marginY]
  );

  const xAxis = d3.axisBottom(xScale).ticks(7);
  const yAxis = d3
    .axisLeft(yScale)
    .ticks(7)
    .tickFormat((value: any) => {
      return formatValueLabelY(value, maxXTickValue);
    });

  useEffect(() => {
    if (xAxisRef.current) {
      d3.select(xAxisRef.current as any).call(xAxis as any);
      (xAxisRef.current as any).setAttribute("font-size", "14");
      (xAxisRef.current as any).setAttribute(
        "font-family",
        "TT Firs Neue Trial Var Roman"
      );
    }

    if (yAxisRef.current) {
      d3.select(yAxisRef.current as any).call(yAxis as any);
      d3.select(yAxisRef.current as any).call(yAxis as any);

      (yAxisRef.current as any).setAttribute("font-size", "14");
      (yAxisRef.current as any).setAttribute(
        "font-family",
        "TT Firs Neue Trial Var Roman"
      );
    }

    if (svgRef.current) {
      const tooltip = d3.select(tooltipRef.current);

      const bisect = d3.bisector((d: any) => d[0]).center;
      const ellipseRadius = 8.30617;

      const pointermoved = (event: any) => {
        const i = bisect(data, xScale.invert(d3.pointer(event)[0]));

        const tooltipX =
          xScale(data[i][0]) - ellipseRadius + xBand.bandwidth() / 2;
        const tooltipY = yScale(data[i][1]) - ellipseRadius;

        tooltip.style("opacity", 1);
        tooltip.attr("transform", `translate(${tooltipX}, ${tooltipY})`);

        const rect = d3
          .select(toolTipContentRef.current)
          .selectAll("rect")
          .data([,])
          .join("rect")
          .attr("fill", "#2B263D")
          .attr("stroke", "none")
          .attr("rx", "20")
          .attr("ry", "20");

        const text = d3
          .select(toolTipContentRef.current)
          .selectAll("text")
          .data([,])
          .join("text")
          .attr("text-anchor", "middle")
          .call((text: any) =>
            text
              .selectAll("tspan")
              .data([
                formatNumber(data[i][1], { minimumFractionDigits: 7 }),
                formatDate(data[i][0]),
              ])
              .join("tspan")
              .attr("x", 0)
              .attr("y", (_: any, i: any) => `${i * 18}px`)
              .attr("font-weight", "400")
              .attr("font-size", (_: any, i: any) => (i ? 10 : 18))
              .attr("font-family", "TT Firs Neue Trial Var Roman")
              .attr("fill", "currentColor")
              .attr("opacity", (_: any, i: any) => (i ? 0.5 : 1))
              .text((d: any) => d)
          );

        const {
          x,
          y,
          width: textWidth,
          height: textHeight,
        } = (text.node() as any).getBBox();

        if (tooltipX < width / 2) {
          text.attr(
            "transform",
            `translate(${ellipseRadius * 2 + 5 + textWidth / 2 + 15},${
              textHeight / 2 + ellipseRadius - textHeight / 2
            })`
          );
          rect.attr(
            "transform",
            `translate(${ellipseRadius * 2 + 5},${
              ellipseRadius - (textHeight + 30) / 2
            })`
          );
        } else {
          text.attr(
            "transform",
            `translate(${-5 - textWidth / 2 - 15},${
              textHeight / 2 + ellipseRadius - textHeight / 2
            })`
          );
          rect.attr(
            "transform",
            `translate(${-textWidth - 30 - 5},${
              ellipseRadius - (textHeight + 30) / 2
            })`
          );
        }

        rect.attr("width", textWidth + 30);
        rect.attr("height", textHeight + 30);
      };

      const pointerleft = () => {
        tooltip.style("opacity", 0);
      };

      d3.select(svgRef.current)
        .on("pointerenter pointermove", pointermoved)
        .on("pointerleave", pointerleft)
        .on("touchstart", (event: Event) => event.preventDefault());
    }
  }, []);

  return (
    <div className="relative w-full">
      <svg
        ref={svgRef}
        className={`w-full aspect-[${width / height}]`}
        viewBox={`0 0 ${width} ${height}`}
      >
        {data.map(([valX, valY], i) => (
          <rect
            key={i}
            fill="url('#areaFill')"
            x={xScale(valX)}
            y={yScale(valY)}
            height={yScale(Math.min(...data.map((el) => el[1]))) - yScale(valY)}
            width={xBand.bandwidth()}
          />
        ))}

        <g
          ref={xAxisRef}
          strokeWidth="0"
          transform={`translate(0,${height - marginY + 10})`}
        />

        <g
          ref={yAxisRef}
          strokeWidth="0"
          transform={`translate(${marginX},0)`}
        />

        <g
          ref={tooltipRef}
          style={{ transition: "opacity 300ms linear" }}
          opacity={0}
        >
          <g ref={toolTipContentRef}></g>

          <g filter="url(#filter0_b_485_11874)">
            <ellipse
              cx="8.30617"
              cy="8"
              rx="8.30617"
              ry="8"
              fill="url(#paint0_linear_485_11874)"
              fillOpacity="0.1"
            />

            <path
              d="M16.4496 8C16.4496 12.3227 12.8095 15.8372 8.30617 15.8372C3.80289 15.8372 0.162783 12.3227 0.162783 8C0.162783 3.67733 3.80289 0.162783 8.30617 0.162783C12.8095 0.162783 16.4496 3.67733 16.4496 8Z"
              stroke="url(#paint1_linear_485_11874)"
              strokeWidth="1"
              fillOpacity="0"
            />
          </g>

          <ellipse
            cx="8.30609"
            cy="8.00051"
            rx="4.07757"
            ry="3.92727"
            fill="white"
          />
        </g>

        <defs>
          <linearGradient id="areaFill" gradientTransform="rotate(68)">
            <stop offset="4.93%" stopColor="rgba(63, 74, 179, 0.50)" />
            <stop offset="96.19%" stopColor="rgba(122, 100, 208, 0.50)" />
          </linearGradient>

          <linearGradient
            id="areaBorder"
            x1="13.3594"
            y1="130.21"
            x2="197.202"
            y2="-228.094"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F4AB3" />
            <stop offset="1" stopColor="#7A64D0" />
          </linearGradient>
          <filter
            id="filter0_b_485_11874"
            x="-8.13915"
            y="-8.13915"
            width="32.8906"
            height="32.2783"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.06958" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_485_11874"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_485_11874"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_485_11874"
            x1="0.324459"
            y1="14.2921"
            x2="18.4193"
            y2="6.52923"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F4AB3" />
            <stop offset="1" stopColor="#7A64D0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_485_11874"
            x1="0.324459"
            y1="14.2921"
            x2="18.4193"
            y2="6.52923"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F4AB3" />
            <stop offset="1" stopColor="#7A64D0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function Chart(props: IChartProps) {
  const {
    data,
    width = 870,
    height = 348,
    type,
    currency,
    isMobile,
    tooltipValueFormatOptions = null,
  } = props;

  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const toolTipContentRef = useRef(null);
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);

  const maxXTickValue = Math.max(...data.map((el: number[]) => el[1]));

  const fontFamily = "TT Firs Neue Trial Var Roman";
  const labelFontSize = isMobile ? 11 : 14;
  const tooltipTitleSize = isMobile ? 12 : 18;
  const tooltipSubtitleSize = isMobile ? 11 : 10;
  const tooltipPadding = isMobile ? 8 : 15;
  const tooltipBorderRadius = isMobile ? 15 : 20;
  const marginX = isMobile ? 60 : 75;
  const marginY = isMobile ? 35 : 35;
  const ticksNumber = isMobile ? 4 : 7;
  const strokeWidth = isMobile ? 2 : 3;

  const xScale = d3
    .scaleUtc()
    .domain(d3.extent(data, (el: any) => el[0]) as any)
    .range([marginX, width - 10]);

  const yScale = d3.scaleLinear(
    [
      Math.max(...data.map((el: number[]) => el[1])),
      Math.min(...data.map((el: number[]) => el[1])),
    ],
    [marginY, height - marginY]
  );

  const xAxis = d3.axisBottom(xScale).ticks(ticksNumber);
  // .tickFormat((value: number) => {
  //   return formatValueLabelX(value, period);
  // });

  const yAxis = d3
    .axisLeft(yScale)
    .ticks(ticksNumber)
    .tickFormat((value: any) => {
      return formatValueLabelY(value, maxXTickValue);
    });

  const xBand = d3
    .scaleBand()
    .domain(data.map((el: any) => el[0] as any))
    .range([marginX, width - 10]);

  const line = d3
    .area(
      (el: number[]) => xScale(el[0]),
      yScale(Math.min(...data.map((el) => el[1]))),
      (el: number[]) => yScale(el[1])
    )
    .curve(d3.curveNatural);

  useEffect(() => {
    let xAxisCurrent = xAxisRef.current as any;
    let yAxisCurrent = yAxisRef.current as any;

    if (xAxisCurrent) {
      d3.select(xAxisCurrent).call(xAxis as any);

      xAxisCurrent.setAttribute("font-size", labelFontSize);
      xAxisCurrent.setAttribute("font-family", fontFamily);
    }

    if (yAxisCurrent) {
      d3.select(yAxisCurrent).call(yAxis as any);

      yAxisCurrent.setAttribute("font-size", labelFontSize);
      yAxisCurrent.setAttribute("font-family", fontFamily);
    }

    if (svgRef.current) {
      const tooltip = d3.select(tooltipRef.current);

      const bisect = d3.bisector((d: any) => d[0]).center;
      const ellipseRadius = 8.30617;

      const pointermoved = (event: any) => {
        const i = bisect(data, xScale.invert(d3.pointer(event)[0]));

        let tooltipX = xScale(data[i][0]) - ellipseRadius;
        let tooltipY = yScale(data[i][1]) - ellipseRadius;

        if (type === "bar") {
          tooltipX += xBand.bandwidth() / 2;
        }

        tooltip.style("opacity", 1);
        tooltip.attr("transform", `translate(${tooltipX}, ${tooltipY})`);

        const rect = d3
          .select(toolTipContentRef.current)
          .selectAll("rect")
          .data([,])
          .join("rect")
          .attr("fill", "#2B263D")
          .attr("stroke", "none")
          .attr("rx", tooltipBorderRadius)
          .attr("ry", tooltipBorderRadius);

        const text = d3
          .select(toolTipContentRef.current)
          .selectAll("text")
          .data([,])
          .join("text")
          .attr("text-anchor", "middle")
          .call((text: any) =>
            text
              .selectAll("tspan")
              .data([
                formatNumber(
                  data[i][1],
                  tooltipValueFormatOptions
                    ? tooltipValueFormatOptions
                    : {
                        currency,
                      }
                ),
                formatDate(data[i][0]),
              ])
              .join("tspan")
              .attr("x", 0)
              .attr("y", (_: any, i: number) => `${i * tooltipTitleSize}px`)
              .attr("font-weight", "400")
              .attr("font-size", (_: any, i: number) =>
                i ? tooltipSubtitleSize : tooltipTitleSize
              )
              .attr("font-family", fontFamily)
              .attr("fill", "currentColor")
              .attr("opacity", (_: any, i: number) => (i ? 0.5 : 1))
              .text((d: any) => d)
          );

        const { width: textWidth, height: textHeight } = (
          text.node() as any
        ).getBBox();

        if (tooltipX < width / 2) {
          text.attr(
            "transform",
            `translate(${
              ellipseRadius * 2 + 5 + textWidth / 2 + tooltipPadding
            },${textHeight / 2 + ellipseRadius - textHeight / 2})`
          );
          rect.attr(
            "transform",
            `translate(${ellipseRadius * 2 + 5},${
              ellipseRadius - (textHeight + tooltipPadding * 2) / 2
            })`
          );
        } else {
          text.attr(
            "transform",
            `translate(${-5 - textWidth / 2 - tooltipPadding},${
              textHeight / 2 + ellipseRadius - textHeight / 2
            })`
          );
          rect.attr(
            "transform",
            `translate(${-textWidth - tooltipPadding * 2 - 5},${
              ellipseRadius - (textHeight + tooltipPadding * 2) / 2
            })`
          );
        }

        rect.attr("width", textWidth + tooltipPadding * 2);
        rect.attr("height", textHeight + tooltipPadding * 2);
      };

      const pointerleft = () => {
        tooltip.style("opacity", 0);
      };

      d3.select(svgRef.current)
        .on("pointerenter pointermove", pointermoved)
        .on("pointerleave", pointerleft)
        .on("touchstart", (event: Event) => event.preventDefault());
    }
  }, [type]);

  return (
    <div className="relative z-0">
      <svg
        ref={svgRef}
        className={`w-full`}
        style={{ maxWidth: width, maxHeight: height }}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        // preserveAspectRatio="xMidYMid slice"
      >
        {type === "bar" &&
          data.map(([valX, valY], i) => (
            <rect
              key={i}
              fill="url('#areaFill')"
              x={xScale(valX)}
              y={yScale(valY)}
              height={
                yScale(Math.min(...data.map((el) => el[1]))) - yScale(valY)
              }
              width={xBand.bandwidth()}
            />
          ))}

        {type === "line" && (
          <>
            <g style={{ mixBlendMode: "multiply" }} opacity="0.7">
              <path
                fill="url('#areaFill')"
                stroke="none"
                d={line(data as any) as any}
              />
            </g>

            <path
              fill="none"
              stroke="url('#areaBorder')"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
              d={d3
                .line()
                .curve(d3.curveNatural)
                .x((d: number[]) => xScale(d[0]))
                .y((d: number[]) => yScale(d[1]))(data) as any}
            />
          </>
        )}

        <g
          ref={xAxisRef}
          strokeWidth="0"
          transform={`translate(0,${height - marginY + 10})`}
        />

        <g
          ref={yAxisRef}
          strokeWidth="0"
          transform={`translate(${marginX},0)`}
        />

        <g
          ref={tooltipRef}
          style={{ transition: "opacity 300ms linear" }}
          opacity={0}
        >
          <g ref={toolTipContentRef}></g>

          <g filter="url(#filter0_b_485_11874)">
            <ellipse
              cx="8.30617"
              cy="8"
              rx="8.30617"
              ry="8"
              fill="url(#paint0_linear_485_11874)"
              fillOpacity="0.1"
            />

            <path
              d="M16.4496 8C16.4496 12.3227 12.8095 15.8372 8.30617 15.8372C3.80289 15.8372 0.162783 12.3227 0.162783 8C0.162783 3.67733 3.80289 0.162783 8.30617 0.162783C12.8095 0.162783 16.4496 3.67733 16.4496 8Z"
              stroke="url(#paint1_linear_485_11874)"
              strokeWidth="1"
              fillOpacity="0"
            />
          </g>

          <ellipse
            cx="8.30609"
            cy="8.00051"
            rx="4.07757"
            ry="3.92727"
            fill="white"
          />
        </g>

        <defs>
          <linearGradient id="areaFill" gradientTransform="rotate(68)">
            <stop offset="4.93%" stopColor="rgba(63, 74, 179, 0.50)" />
            <stop offset="96.19%" stopColor="rgba(122, 100, 208, 0.50)" />
          </linearGradient>

          <linearGradient
            id="areaBorder"
            x1="13.3594"
            y1="130.21"
            x2="197.202"
            y2="-228.094"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F4AB3" />
            <stop offset="1" stopColor="#7A64D0" />
          </linearGradient>
          <filter
            id="filter0_b_485_11874"
            x="-8.13915"
            y="-8.13915"
            width="32.8906"
            height="32.2783"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.06958" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_485_11874"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_485_11874"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_485_11874"
            x1="0.324459"
            y1="14.2921"
            x2="18.4193"
            y2="6.52923"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F4AB3" />
            <stop offset="1" stopColor="#7A64D0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_485_11874"
            x1="0.324459"
            y1="14.2921"
            x2="18.4193"
            y2="6.52923"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F4AB3" />
            <stop offset="1" stopColor="#7A64D0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
