import './styles.scss';
import Chart from 'react-apexcharts';
import { ReactComponent as Dollar } from './../../assets/svg/icon_dollar.svg';
import { ReactComponent as Rise } from './../../assets/svg/icon_rise.svg';

const FundOverView = () => {
    const chartData = {
        series: [
            {
                name: 'Active',
                data: [
                    {
                        x: 1996,
                        y: 322,
                    },
                    {
                        x: 1997,
                        y: 324,
                    },
                    {
                        x: 1998,
                        y: 329,
                    },
                    {
                        x: 1999,
                        y: 342,
                    },
                    {
                        x: 2000,
                        y: 348,
                    },
                    {
                        x: 2001,
                        y: 334,
                    },
                    {
                        x: 2002,
                        y: 325,
                    },
                    {
                        x: 2003,
                        y: 316,
                    },
                    {
                        x: 2004,
                        y: 318,
                    },
                    {
                        x: 2005,
                        y: 330,
                    },
                    {
                        x: 2006,
                        y: 355,
                    },
                    {
                        x: 2007,
                        y: 366,
                    },
                    {
                        x: 2008,
                        y: 337,
                    },
                    {
                        x: 2009,
                        y: 352,
                    },
                    {
                        x: 2010,
                        y: 377,
                    },
                    {
                        x: 2011,
                        y: 383,
                    },
                    {
                        x: 2012,
                        y: 344,
                    },
                    {
                        x: 2013,
                        y: 366,
                    },
                    {
                        x: 2014,
                        y: 389,
                    },
                    {
                        x: 2015,
                        y: 334,
                    },
                ],
            },
            {
                name: 'Passive',
                data: [
                    {
                        x: 1996,
                        y: 162,
                    },
                    {
                        x: 1997,
                        y: 90,
                    },
                    {
                        x: 1998,
                        y: 50,
                    },
                    {
                        x: 1999,
                        y: 77,
                    },
                    {
                        x: 2000,
                        y: 35,
                    },
                    {
                        x: 2001,
                        y: 45,
                    },
                    {
                        x: 2002,
                        y: 88,
                    },
                    {
                        x: 2003,
                        y: 120,
                    },
                    {
                        x: 2004,
                        y: 156,
                    },
                    {
                        x: 2005,
                        y: 123,
                    },
                    {
                        x: 2006,
                        y: 88,
                    },
                    {
                        x: 2007,
                        y: 66,
                    },
                    {
                        x: 2008,
                        y: 45,
                    },
                    {
                        x: 2009,
                        y: 29,
                    },
                    {
                        x: 2010,
                        y: 45,
                    },
                    {
                        x: 2011,
                        y: 88,
                    },
                    {
                        x: 2012,
                        y: 132,
                    },
                    {
                        x: 2013,
                        y: 146,
                    },
                    {
                        x: 2014,
                        y: 169,
                    },
                    {
                        x: 2015,
                        y: 184,
                    },
                ],
            },
        ],
        options: {
            colors: ['#9661dc', '#6088fc'],
            chart: {
                toolbar: {
                    show: false,
                },
                type: 'area',
                height: 350,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight',
            },
            legend: {
                show: false,
            },
            title: {
                show: false,
                text: '',
            },
            xaxis: {
                show: false,
                type: 'datetime',
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                tickAmount: 4,
                floating: false,

                labels: {
                    show: false,
                    style: {
                        colors: '#8e8da4',
                    },
                    offsetY: -7,
                    offsetX: 0,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            fill: {
                opacity: 0.5,
                type: 'image',
            },
            tooltip: {
                x: {
                    format: 'yyyy',
                },
                fixed: {
                    enabled: false,
                    position: 'topRight',
                },
            },
            grid: {
                show: false,
                yaxis: {
                    lines: {
                        offsetX: -30,
                    },
                },
                padding: {
                    left: 20,
                },
            },
        },
    };
    return (
        <section className='nav_adjust content_wrap fund_overview'>
            <h1>Overview</h1>
            <article>
                <div className='flex_wrap space_between'>
                    <div className='left_wrap'>
                        <div className='sub_head'>Fund Liquidity</div>
                        <div className='bnb green_text'>3500 BNB</div>
                    </div>
                    <div className='right_wrap'>
                        <div className='legend_wrap'>
                            <div className='item active'>
                                <div className='color_box'></div>Active
                            </div>
                            <div className='item passive'>
                                <div className='color_box'></div>Passive
                            </div>
                        </div>
                    </div>
                </div>
                <div className='paper_box'>
                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type='area'
                        height={350}
                    />
                </div>
                <button>View contract on ETHScan</button>
            </article>
            <article>
                <div className='sub_head'>Fund Activity</div>
                <p>From newest to oldest</p>
                <div className='paper_box no_padding row_box'>
                    <div className='row'>
                        <div className='icon'>
                            <Rise />
                        </div>
                        <div className='hex'>Ox1234567</div>
                        <div className='description'>took profit</div>
                    </div>
                    <div className='row'>
                        <div className='icon'>
                            <Dollar />
                        </div>
                        <div className='hex'>O124587a4B</div>
                        <div className='description'>deposited funds</div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default FundOverView;
