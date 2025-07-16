import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ROWS_PER_PAGE = 10;

const PerformanceTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const totalRows = data.Timestamp.length;
  const totalPages = Math.ceil(totalRows / ROWS_PER_PAGE);

  const start = page * ROWS_PER_PAGE;
  const end = start + ROWS_PER_PAGE;

  const slice = (arr) => arr.slice(start, end);

  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        📊 Performance Overview
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-700 font-semibold">Time</TableHead>
              <TableHead className="text-gray-700 font-semibold">SOC (%)</TableHead>
              <TableHead className="text-gray-700 font-semibold">Voltage (V)</TableHead>
              <TableHead className="text-gray-700 font-semibold">Current (A)</TableHead>
              <TableHead className="text-gray-700 font-semibold">Power (W)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {slice(data.Timestamp).map((t, i) => (
              <TableRow
                key={i}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <TableCell className="text-gray-800">
                  {new Date(t).toLocaleTimeString()}
                </TableCell>
                <TableCell className="text-gray-800">
                  {data.SOC[start + i]}
                </TableCell>
                <TableCell className="text-gray-800">
                  {data["Voltage(V)"][start + i]}
                </TableCell>
                <TableCell className="text-gray-800">
                  {data["Current(I)"][start + i]}
                </TableCell>
                <TableCell className="text-gray-800">
                  {(
                    data["Voltage(V)"][start + i] *
                    data["Current(I)"][start + i]
                  ).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="bg-gray-800 text-white hover:bg-gray-700"
        >
          Previous
        </Button>
        <span className="text-sm text-gray-600">
          Page {page + 1} of {totalPages}
        </span>
        <Button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="bg-gray-800 text-white hover:bg-gray-700"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PerformanceTable;
