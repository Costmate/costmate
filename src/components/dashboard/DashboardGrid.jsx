import DashboardCard from "./DashboardCard";
import InventoryCard from "./InventoryCard";
import {
  dashboardSummaryData,
  dashboardInventoryData,
} from "@/src/data/summaryData";
import RecentOrders from "./RecentOrders";
import { ChartPieDonut } from "./PieChart";
import { ChartLineMultiple } from "./LineChart";

export default function DashboardGrid() {
  const totalOrders = dashboardSummaryData[0];
  const profitMargin = dashboardSummaryData[1];
  const activeOrders = dashboardSummaryData[2];
  const lowStock = dashboardSummaryData[3];

  return (
    <div className="overflow-auto min-h-screen max-w-[1200px] mx-auto">
      <div
        className="
          grid
          justify-center
          gap-4

          grid-cols-1
          grid-rows-[repeat(4,100px)_repeat(1,300px)_repeat(1,500px)_repeat(2,450px)]

          md:grid-cols-2
          md:grid-rows-[repeat(2,100px)_repeat(1,400px)_repeat(1,)]

          xl:grid-cols-[repeat(4,250px)]
          xl:grid-rows-[repeat(10,100px)]
        "
      >
        {/* Item 1 */}
        <div className="bg-white border rounded-lg p-3">
          <DashboardCard
            title={totalOrders.title}
            measure={totalOrders.measure}
            value={totalOrders.value}
            uom={totalOrders.uom}
            isTrackingChange={true}
            change={totalOrders.change}
            icon={totalOrders.icon}
          />
        </div>

        {/* Item 2 */}
        <div className="bg-white border rounded-lg p-4">
          <DashboardCard
            title={profitMargin.title}
            measure={profitMargin.measure}
            icon={profitMargin.icon}
            isTrackingChange={profitMargin.isTrackingChange}
            change={profitMargin.change}
            value={profitMargin.value}
            uom={profitMargin.uom}
          />
        </div>

        {/* Item 3 */}
        <div className="bg-white border rounded-lg p-4">
          <DashboardCard
            title={activeOrders.title}
            measure={activeOrders.measure}
            icon={activeOrders.icon}
            isTrackingChange={activeOrders.isTrackingChange}
          />
        </div>

        {/* Item 4 */}
        <div className="bg-white border rounded-lg p-4">
          <DashboardCard
            title={lowStock.title}
            measure={lowStock.measure}
            icon={lowStock.icon}
            isTrackingChange={lowStock.isTrackingChange}
            count={lowStock.count}
            description={lowStock.description}
          />
        </div>

        {/* Item 5 - spans 4 rows and 3 columns */}
        <div className="bg-white border rounded-lg md:col-span-2 xl:col-span-3 xl:row-span-4">
          <ChartLineMultiple />
        </div>

        {/* Item 6 - spans 4 rows */}
        <div className="bg-white border rounded-lg xl:row-span-4">
          <ChartPieDonut />
        </div>

        {/* Item 7 - spans 5 rows */}
        <div className="bg-white border rounded-lg px-2 py-4  xl:row-span-5">
          <h2 className="text-gray-500 px-2  font-semibold text-xl">
            Inventory Alert
          </h2>
          <div className="overflow-y-scroll h-11/12 py-2">
            {dashboardInventoryData.map((item, index) => {
              return (
                <InventoryCard
                  key={index}
                  material={item.material}
                  stock={item.stock}
                  lowMargin={item.lowMargin}
                  criticalMargin={item.criticalMargin}
                  uom={item.uom}
                />
              );
            })}
          </div>
        </div>

        {/* Item 8 - spans 5 rows and 3 columns */}
        <div className="bg-white border rounded-lg p-4 md:col-span-2 xl:col-span-3 xl:row-span-5">
          <h2 className="text-gray-500 px-2 mb-4 font-semibold text-xl">
            Recent Orders
          </h2>
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}
