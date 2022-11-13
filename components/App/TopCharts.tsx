import React from 'react'
import ChartCard from './ChartCard'

const TopCharts = () => {
  const chart = [
    {
      photo: 'golden-age',
      artiste: 'Sean swadder',
      title: 'Golden age of 80s',
      duration: '2:34:45'
    },
    {
      photo: 'raggae',
      artiste: 'Dj YK mule',
      title: 'Reggae “n” blues',
      duration: '1:02:42'
    },
    {
      photo: 'tomorrow-tune',
      artiste: 'Obi Datti',
      title: 'Tomorrow’s tunes',
      duration: '2:01:25'
    },
  ]
  return (
    <div className="chart-container">
      <div className="container-header">
        Top charts
      </div>
        <div className="chart-cards-container">
          {chart.map((e, index)=>(
            <ChartCard chart={e} key={index} />
          ))}
        </div>
    </div>
  )
}

export default TopCharts