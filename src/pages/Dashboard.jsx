import { useEffect, useState } from "react";
import { fetchBatteryData } from "../services/fetchBatteryData";
import ChartCard from "../components/custom/ChartCard";
import MiniCard from "../components/custom/MiniCard";
import PerformanceTable from "../components/custom/PerformanceTable";
import DashboardSkeleton from "../components/custom/DashboardSkeleton";

const Dashboard = () => {
  const [batteryData, setBatteryData] = useState(null);

  useEffect(() => {
    const getBatteryData = async () => {
      const data = await fetchBatteryData();
      const limit = 1000;
      const total = data.timestamp.length;

      const slicedData = {
        timestamp: data.timestamp.slice(total - limit),
        soc: data.soc.slice(total - limit),
        voltage: data.voltage.slice(total - limit),
        current: data.current.slice(total - limit),
      };

      setBatteryData(slicedData);
    };
    getBatteryData();
  }, []);

  if (!batteryData) return <DashboardSkeleton />;

  const { soc, voltage, current, timestamp } = batteryData;

  const power = voltage.map((v, i) => v * current[i]);

  const ampHours = current.reduce((acc, val, i) => {
    if (i === 0) return [0];
    const deltaTime =
      (new Date(timestamp[i]) - new Date(timestamp[i - 1])) / (1000 * 60 * 60);
    const prevAh = acc[i - 1] || 0;
    acc[i] = prevAh + val * deltaTime;
    return acc;
  }, []);

  const tableData = {
    Timestamp: timestamp,
    SOC: soc,
    "Voltage(V)": voltage,
    "Current(I)": current,
  };

  if (!batteryData) return <DashboardSkeleton />;

  return (
    <div className="w-full bg-black/2 rounded-xl backdrop-blur-md md:p-6 p-2 max-w-7xl mx-auto mt-4 ">
      {/* Row 1: Charts + MiniCards */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        <div className="lg:col-span-3">
          <ChartCard
            title="Battery SOC Over Time"
            timestamps={timestamp}
            values={soc}
            label="SOC (%)"
            color="rgb(99, 102, 241)"
          />
        </div>
        <div className="lg:col-span-2 flex flex-col justify-between gap-4">
          <MiniCard title="SOC Now" value={`${soc.at(-1)}%`} change="+2.1%" />
          <MiniCard
            title="Voltage / Current"
            value={`${voltage.at(-1)}V / ${current.at(-1)}A`}
            change="-1.2%"
          />
          <MiniCard
            title="Power Now"
            value={`${power.at(-1).toFixed(2)}W`}
            change="+0.3%"
          />
        </div>
      </div>

      {/* Row 2: Power, Current, Voltage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ChartCard
          title="Power Over Time"
          timestamps={timestamp}
          values={power}
          label="Power (W)"
          color="rgb(234, 179, 8)"
        />
        <ChartCard
          title="Current Over Time"
          timestamps={timestamp}
          values={current}
          label="Current (A)"
          color="rgb(239, 68, 68)"
        />
        <ChartCard
          title="Voltage Over Time"
          timestamps={timestamp}
          values={voltage}
          label="Voltage (V)"
          color="rgb(34, 197, 94)"
        />
      </div>

      {/* Row 3: Amp-Hour Chart */}
      <div className="mb-6">
        <ChartCard
          title="Cumulative Ampere-hours (Ah)"
          timestamps={timestamp}
          values={ampHours}
          label="Ah"
          color="rgb(14, 165, 233)"
        />
      </div>

      {/* Row 4: Table */}
      <div className="mt-8">
        <PerformanceTable data={tableData} />
      </div>
    </div>
  );
};

export default Dashboard;
