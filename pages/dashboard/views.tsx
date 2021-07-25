import SideBar from "../components/sidebar";
import Container from "../components/container";
import { Navbar } from "../components/navbar";
import { StatisticCard } from "./components/statistic_card";
import { Table } from "react-bootstrap"
import Button from "../components/button";
import variable from "../../config/variable";
import {Chart, registerables} from "chart.js"
import { useEffect } from "react"

const initialChartDonut = (ctx) => {
    const config: any = {
        type: 'pie',
        data: {
            labels: ['Tepat Waktu', 'Telat', 'Sakit', 'Ijin', 'Tidak Hadir'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    };
    Chart.register(...registerables)
    new Chart(ctx, config);
}

export const Views = (props: any) => {
    useEffect(() => {
        const CHART_DONUT = document.getElementById("chart-donut");
        initialChartDonut(CHART_DONUT);
    },[])

    useEffect(() => {
        return () => {
            document.getElementById("chart-donut")?.remove();
        }
    }, [])
    return (
        <Container>
            <SideBar active="Dashboard" />
            <Container.Body>
                <Navbar />
                <Container.Wrapper>
                    <div className="flex flex-col">
                        <span className="ml-2 text-gray-500">Statistik</span>
                        <div className="flex flex-wrap mb-4">
                            <StatisticCard value={20} title="Jumlah Karyawan" />
                            <StatisticCard value={20} title="Jumlah Inventaris" />
                        </div>
                        <span className="ml-2 text-gray-500">Statistik Absensi Karyawan</span>
                        <div className="flex flex-wrap">
                            <div className="flex flex-col w-full ml-2 pt-2">
                                <div className="relative inline-block  text-gray-700 w-1/4 mb-4 ">
                                    <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                                        <option>Hari ini</option>
                                        <option>Bulan ini</option>
                                        <option>Tahun ini</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="flex">
                                        <canvas id="chart-donut" width="400" height="400"></canvas>
                                    </div>
                                    <div className="flex w-4/6 ml-6">
                                        <Table className="w-1" striped bordered hover >
                                            <thead>
                                                <tr>
                                                    <th className="w-4 text-color-blue-dark" rowSpan={2} >ID</th>
                                                    <th rowSpan={2} className="text-color-blue-dark">Nama</th>
                                                    <th colSpan={5} className="text-center text-color-blue-dark">Statistik</th>
                                                    <th rowSpan={2}></th>
                                                </tr>
                                                <tr>
                                                    <th className="w-32 text-color-blue-dark">Tepat Waktu</th>
                                                    <th className="w-32 text-color-blue-dark">Telat</th>
                                                    <th className="w-32 text-color-blue-dark">Sakit</th>
                                                    <th className="w-32 text-color-blue-dark">Ijin</th>
                                                    <th className="w-32 text-color-blue-dark">Tidak Hadir</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <div className="flex flex-row">
                                                            <div className="relative rounded-full h-8 w-8 overflow-hidden">
                                                                <img className="h-8 w-8" src={`${variable.url}/workers/11/photo`} alt="" />
                                                            </div>
                                                            <span className="flex font-semibold flex-col justify-center ml-2">Zulfikra L Abdjul</span>
                                                        </div>
                                                    </td>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td><Button bgColor="primary" title="Detail" /></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <div className="flex flex-row">
                                                            <div className="relative rounded-full h-8 w-8 overflow-hidden">
                                                                <img className="h-8 w-8" src={`${variable.url}/workers/11/photo`} alt="" />
                                                            </div>
                                                            <span className="flex font-semibold flex-col justify-center ml-2">Zulfikra L Abdjul</span>
                                                        </div>
                                                    </td>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td><Button bgColor="primary" title="Detail" /></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <div className="flex flex-row">
                                                            <div className="relative rounded-full h-8 w-8 overflow-hidden">
                                                                <img className="h-8 w-8" src={`${variable.url}/workers/11/photo`} alt="" />
                                                            </div>
                                                            <span className="flex font-semibold flex-col justify-center ml-2">Zulfikra L Abdjul</span>
                                                        </div>
                                                    </td>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td><Button bgColor="primary" title="Detail" /></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container.Wrapper>
            </Container.Body>
        </Container>
    )
};

export default Views;