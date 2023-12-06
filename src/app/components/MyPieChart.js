"use client";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'

export default function DoughnutChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current){
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type:"doughnut",
            data: {
                labels:["Swimming","Running","Hiking","Basketball","Biking"],
                datasets :[
                    {
                      data: [30, 45, 25,50, 60],
                      backgroundColor: [
                        'rgb(255,99,132)',
                        'rgb(54,162,235)',
                        'rgb(255,205,86)',
                        'rgb(255,100,25)',
                        'rgb(54,62,245)',
                        'rgb(154,162,235)',
                    ],
                    }
                ]
            }

        })
        return () => {
            if(chartInstance.current){
                chartInstance.current.destroy()
            }
        }
    },[]);

    return (
    <div>
        <canvas ref={chartRef} style={{width:"200px",height:"150px"}}/>
    </div>
    )
}