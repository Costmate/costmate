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

export const dashboardInventoryData = [
  {
    material: 'Almond Flour',
    stock: 2,
    lowMargin: 5,
    criticalMargin: 3,
    uom: 'bottles'
  },
  {
    material: 'Unsalted Butter',
    stock: 8,
    lowMargin: 10,
    criticalMargin: 5,
    uom: 'kg'
  },
  {
    material: 'Granulated Sugar',
    stock: 50,
    lowMargin: 15,
    criticalMargin: 5,
    uom: 'kg'
  },
  {
    material: 'All-Purpose Flour',
    stock: 25,
    lowMargin: 30,
    criticalMargin: 15,
    uom: 'kg'
  },
  {
    material: 'Raw Eggs',
    stock: 2,
    lowMargin: 5,
    criticalMargin: 3,
    uom: 'crates'
  },
]