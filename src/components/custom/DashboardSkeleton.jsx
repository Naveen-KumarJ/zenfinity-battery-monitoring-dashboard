import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkeletonBox = ({ height = "h-40", className = "" }) => (
  <div
    className={`w-full ${height} rounded-md bg-gray-300 dark:bg-gray-700 animate-pulse ${className}`}
  ></div>
);

const DashboardSkeleton = () => {
  return (
    <div className="w-full bg-white rounded-xl p-6 max-w-7xl mx-auto space-y-6">
      {/* Row 1: Chart + Mini Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Main Chart Card */}
        <div className="lg:col-span-3">
          <Card className="bg-white border border-gray-200 shadow rounded-2xl">
            <CardHeader>
              <CardTitle className="text-gray-400"></CardTitle>
            </CardHeader>
            <CardContent>
              <SkeletonBox height="h-64" />
            </CardContent>
          </Card>
        </div>

        {/* Mini Cards */}
        <div className="lg:col-span-2 flex flex-col justify-between gap-4">
          {[...Array(3)].map((_, i) => (
            <Card
              key={i}
              className="bg-white border border-gray-200 shadow rounded-xl p-4"
            >
              <SkeletonBox height="h-12" />
            </Card>
          ))}
        </div>
      </div>

      {/* Row 2: 3 Chart Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Card
            key={i}
            className="bg-white border border-gray-200 shadow rounded-2xl"
          >
            <CardHeader>
              <CardTitle className="text-gray-400"></CardTitle>
            </CardHeader>
            <CardContent>
              <SkeletonBox height="h-64" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Row 3: Cumulative Ah Chart */}
      <div>
        <Card className="bg-white border border-gray-200 shadow rounded-2xl">
          <CardHeader>
            <CardTitle className="text-gray-400"></CardTitle>
          </CardHeader>
          <CardContent>
            <SkeletonBox height="h-64" />
          </CardContent>
        </Card>
      </div>

      {/* Row 4: Table */}
      <div>
        <Card className="bg-white border border-gray-200 shadow rounded-xl">
          <CardHeader>
            <CardTitle className="text-gray-400"></CardTitle>
          </CardHeader>
          <CardContent>
            <SkeletonBox height="h-40" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
