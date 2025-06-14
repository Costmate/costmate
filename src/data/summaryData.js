import { getIcon } from "../components/app-layout/navSettings"

export const dashboardSummaryData = [
  {
    title: 'Total Orders',
    measure: 151,
    value: 223320,
    uom: '',
    isTrackingChange: true,
    change: 12.5,
    icon: getIcon('orders')
  },
  {
    title: 'Profit Margin',
    measure: 50.04,
    value: 39050,
    uom: '%',
    isTrackingChange: true,
    change: 3.5,
    icon: getIcon('profit')
  },
  {
    title: 'Active Orders',
    measure: 15,
    isTrackingChange: false,
    icon: getIcon('orders')
  },
  {
    title: 'Low Stock',
    measure: 10,
    isTrackingChange: false,
    count: 2,
    icon: getIcon('inventory'),
    description: 'Critical'
  },
]