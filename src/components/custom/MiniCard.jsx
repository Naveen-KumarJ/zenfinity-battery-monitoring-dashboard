import { Card, CardContent } from "@/components/ui/card";

const MiniCard = ({ title, value, change }) => {
  const isPositive = change?.includes("+");
  const isNegative = change?.includes("-");
  const colorClass = isPositive
    ? "text-green-400"
    : isNegative
    ? "text-red-400"
    : "text-gray-300";

  return (
    <Card className="p-4 bg-black border border-gray-700 shadow rounded-xl">
      <CardContent className="p-0">
        <p className="text-sm text-gray-400 mb-1">{title}</p>
        <h2 className="text-2xl font-bold text-white">{value}</h2>
        {change && (
          <p className={`text-sm ${colorClass}`}>
            {isPositive ? "▲ " : isNegative ? "▼ " : ""}
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default MiniCard;
