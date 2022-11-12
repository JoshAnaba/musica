import React from 'react'
import ChartCard from './ChartCard'

const TopCharts = () => {
  return (
    <div>
      <div className="container-header">
        Top charts
      </div>
        <div className="chart-cards-container">
          <ChartCard />
          <ChartCard />
          <ChartCard />
        </div>
    </div>
  )
}

export default TopCharts