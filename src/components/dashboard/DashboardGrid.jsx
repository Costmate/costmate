export default function DashboardGrid() {
  return (
    <div className="overflow-auto min-h-screen max-w-[1200px] mx-auto">
      <div
        className="
          grid
          justify-center
          gap-4

          grid-cols-1
          grid-rows-[repeat(4,100px)_repeat(4,400px)]

          md:grid-cols-2
          md:grid-rows-[repeat(2,100px)_repeat(3,400px)]
          
          xl:grid-cols-[repeat(4,250px)]
          xl:grid-rows-[repeat(10,100px)]
        "
      >
        {/* Item 1 */}
        <div className="bg-white border rounded-lg p-4">Item 1</div>

        {/* Item 2 */}
        <div className="bg-white border rounded-lg p-4">Item 2</div>

        {/* Item 3 */}
        <div className="bg-white border rounded-lg p-4">Item 3</div>

        {/* Item 4 */}
        <div className="bg-white border rounded-lg p-4">Item 4</div>

        {/* Item 5 - spans 4 rows and 3 columns */}
        <div className="bg-white border rounded-lg p-4 md:col-span-2 xl:col-span-3 xl:row-span-4">
          Item 5 (4 rows, 3 cols)
        </div>

        {/* Item 6 - spans 4 rows */}
        <div className="bg-white border rounded-lg p-4  xl:row-span-4">
          Item 6 (4 rows)
        </div>

        {/* Item 7 - spans 5 rows */}
        <div className="bg-white border rounded-lg p-4  xl:row-span-5">
          Item 7 (5 rows)
        </div>

        {/* Item 8 - spans 5 rows and 3 columns */}
        <div className="bg-white border rounded-lg p-4 md:col-span-2 xl:col-span-3 xl:row-span-5">
          Item 8 (5 rows, 3 cols)
        </div>
      </div>
    </div>
  );
}
