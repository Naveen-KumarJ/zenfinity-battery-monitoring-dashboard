import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const ChartCard = ({ title, timestamps, values, label, color }) => {
  const chartRef = useRef(null);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label,
        data: values,
        borderColor: color || "rgb(75, 192, 192)",
        backgroundColor: color || "rgb(75, 192, 192)",
        fill: false,
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      zoom: {
        pan: { enabled: true, mode: "x" },
        zoom: {
          drag: false,
          mode: "x",
          wheel: { enabled: false },
          pinch: { enabled: false },
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: { unit: "minute" },
        title: { display: true, text: "Timestamp", color: "#d1d5db" },
        grid: { display: false },
        ticks: { color: "#d1d5db" },
      },
      y: {
        title: { display: true, text: label, color: "#d1d5db" },
        grid: { color: "#374151" },
        ticks: { color: "#d1d5db" },
      },
    },
  };

  const handleZoom = (scale) => {
    const chart = chartRef.current;
    if (chart) chart.zoom(scale);
  };

  const handleResetZoom = () => {
    const chart = chartRef.current;
    if (chart) chart.resetZoom();
  };

  return (
    <Card className="relative bg-gray-800 border border-gray-700 shadow-lg rounded-2xl p-4 transition-all duration-300 hover:scale-[1.01]">
      <CardHeader className="pb-2 px-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 flex-wrap">
          <CardTitle className="text-base sm:text-lg font-semibold text-white">
            {title}
          </CardTitle>
          <div className="flex gap-2 flex-wrap">
            <Button
              size="xs"
              className="bg-black text-white hover:bg-gray-50 hover:text-black transition-all duration-300 px-3 py-1.5 cursor-pointer"
              onClick={() => handleZoom(1.2)}
            >
              Zoom In
            </Button>
            <Button
              size="xs"
              className="bg-black text-white hover:bg-gray-50 hover:text-black transition-all duration-300 px-3 py-1.5 cursor-pointer"
              onClick={() => handleZoom(0.8)}
            >
              Zoom Out
            </Button>
            <Button
              size="xs"
              className="bg-black text-white hover:bg-gray-50 hover:text-black transition-all duration-300 px-3 py-1.5 cursor-pointer"
              onClick={handleResetZoom}
            >
              Reset
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-72 p-0">
        <Line ref={chartRef} data={chartData} options={chartOptions} />
      </CardContent>
    </Card>
  );
};

export default ChartCard;
