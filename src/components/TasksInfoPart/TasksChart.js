//react
import React from 'react'

//highcharts library
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

//react-redux library
import { useSelector } from 'react-redux';

//styles
import './TaskInfo.css'

const TasksChart = () => {
    const tasksList = useSelector(state => state.timeCounter.timeCounter);

    const processedData = []
    
    const setCoordinates = () => {
        tasksList.map(item => {
            const diff = +item.completedTask.slice(0, 2) - +item.start.slice(0, 2)
            
            if (diff === 0) {
                const x = +item.start.slice(0, 2)
                const y = +item.currentTime.slice(3, 5)
                processedData.push([x,y])
            } else {
                const x = +item.start.slice(0, 2)
                const y = 60 - +item.start.slice(3, 5)
                processedData.push([x,y])
                for (let i = 1; i <= diff; i++) {
                    if (i === diff) {
                        const x = +item.start.slice(0, 2) + i;
                        const y = +item.completedTask.slice(3, 5)
                        processedData.push([x,y])
                    } else {
                        const x = +item.start.slice(0, 2) + i;
                        const y = 60
                        processedData.push([x,y])
                    }
                }
            }
        })
    }

    setCoordinates()

    const options = {
          title: {
            text: ''
          },
          xAxis: {
            title: {
              text: ''
            },
            type: 'column',
            categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            min: 0,
            max: 24,
            tickInterval: 1,
          },
          yAxis: {
            title: '',
            dateTimeLabelFormats: {
                millisecond: '%M'
            },
            min: 0,
            max: 60,
            tickAmount: 5,
            tickInterval: 15,
          },
          plotOptions: {
            column: {
                pointPlacement: 'number'
            },
            arearange: {
              lineWidth: 1,
            },
            tooltip: {
                pointFormat: 'Range: {point.low} - {point.high}'
            }
          },
          series: [{
            name: 'Minutes',
            type: 'column',
            data: processedData
          }],
          accessibility: {
            enabled: false,
            
        }
    };

    return (
        <div className='chart'>
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
    )
}

export default TasksChart;