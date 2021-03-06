import './styles.scss';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import AddBNB from './PopUps/AddBNB';
import RemoveBNB from './PopUps/RemoveBNB';
import TakeProfits from './PopUps/TakeProfits';
import EditPopUp from './PopUps/EditPop';
import { ReactComponent as Exclamation } from './../../assets/svg/icon_exclamation.svg';
import { ReactComponent as Enter } from './../../assets/svg/icon_enter.svg';
import { ReactComponent as Exit } from './../../assets/svg/icon_exit.svg';
import { ReactComponent as Dollar } from './../../assets/svg/icon_dollar_green.svg';
import { ReactComponent as Invest } from './../../assets/svg/icon_invest.svg';

const PoolIndexInfo = ({ type }) => {
    const [showEditPop, setShowEditPop] = useState(false);
    const [showAddBNB, setShowAddBNB] = useState(false);
    const [showRemoveBNB, setShowRemoveBNB] = useState(false);
    const [showTakeProfits, setShowTakeProfits] = useState(false);

    const graphColor = type === 'active' ? '#9661dc' : '#6088fc';
    const chartData = {
        series: [
            {
                name: 'Passive',
                data: [
                    {
                        x: 0,
                        y: '0%',
                    },
                    {
                        x: 52,
                        y: '90%',
                    },
                    {
                        x: 78,
                        y: '50%',
                    },
                    {
                        x: 104,
                        y: '77%',
                    },
                    {
                        x: 130,
                        y: '35%',
                    },
                    {
                        x: 156,
                        y: '45%',
                    },
                    {
                        x: 182,
                        y: '88%',
                    },
                    {
                        x: 208,
                        y: '120%',
                    },
                    {
                        x: 234,
                        y: '156%',
                    },
                    {
                        x: 260,
                        y: '123%',
                    },
                    {
                        x: 286,
                        y: '88%',
                    },
                    {
                        x: 312,
                        y: '66%',
                    },
                    {
                        x: 338,
                        y: '45%',
                    },
                    {
                        x: 364,
                        y: '29%',
                    },
                    {
                        x: 390,
                        y: '45%',
                    },
                ],
            },
        ],
        options: {
            colors: [graphColor],
            chart: {
                toolbar: {
                    show: false,
                },
                type: 'area',
                height: 550,
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
                show: true,
                labels: {
                    show: true,
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
                    formatter: function (value) {
                        return value + '%';
                    },
                    show: true,
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
                type: 'gradient',
                gradient: {
                    shadeIntensity: 0.5,
                    opacityFrom: 0.8,
                    opacityTo: -0.2,
                },
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
                show: true,
                yaxis: {
                    lines: {
                        // offsetX: -30,
                        show: true,
                    },
                },
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    left: 20,
                },
            },
        },
    };

    return (
        <>
            <EditPopUp
                showEditPop={showEditPop}
                setShowEditPop={setShowEditPop}
            />
            <AddBNB showPop={showAddBNB} changeShowPop={setShowAddBNB} />
            <RemoveBNB
                showPop={showRemoveBNB}
                changeShowPop={setShowRemoveBNB}
            />
            <TakeProfits
                showPop={showTakeProfits}
                changeShowPop={setShowTakeProfits}
            />
            <section className='nav_adjust content_wrap pool_index_wap'>
                <div
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='500'>
                    <div className='flex_wrap space_between flex_column_sm'>
                        <div className='profile_card'>
                            <div className='prof_image'></div>
                            <div className='details'>
                                {type === 'active' ? (
                                    <>
                                        <div className='name'>Pool name</div>
                                        <div className='creator'>
                                            Pool creator
                                        </div>
                                    </>
                                ) : (
                                    <div className='name'>Index name</div>
                                )}
                            </div>
                        </div>
                        <div className='flex_wrap button_wrap'>
                            <button className='invert'>Pool holdings</button>
                            <button onClick={() => setShowEditPop(true)}>
                                Edit
                            </button>
                        </div>
                    </div>
                    <article className='paper_box   pool_warning_box'>
                        <p className='purple_text'>
                            <Exclamation />
                            Pool warning:
                        </p>
                    </article>
                    <article>
                        <p>Pool taken:</p>
                    </article>
                    <article>
                        <p>My tokens:</p>
                        <div className='button_wrap'>
                            <button
                                className='invert no_margin'
                                onClick={() => setShowAddBNB(true)}>
                                Add BNB
                            </button>
                            <button
                                className='invert'
                                onClick={() => setShowRemoveBNB(true)}>
                                Remove BNB
                            </button>
                            <button
                                className='invert'
                                onClick={() => setShowTakeProfits(true)}>
                                Take profits
                            </button>
                        </div>
                    </article>
                    <article>
                        <div className='paper_box all_uppercase available_credits'>
                            <p className='no_margin'>
                                BNB available:
                                <strong className='green_text'> 10</strong>
                            </p>
                        </div>
                        {type === 'active' && (
                            <div className='paper_box all_uppercase available_credits'>
                                <p className='no_margin'>
                                    available profits:
                                    <strong className='green_text'> 5</strong>
                                </p>
                            </div>
                        )}
                        {type === 'passive' && (
                            <>
                                <div className='paper_box all_uppercase available_credits'>
                                    <p className='no_margin'>
                                        My initial investment:
                                        <strong className='green_text'>
                                            {' '}
                                            3 BNB
                                        </strong>
                                    </p>
                                </div>
                                <div className='paper_box all_uppercase available_credits'>
                                    <p className='no_margin'>
                                        current value:
                                        <strong className='green_text'>
                                            {' '}
                                            10BNB
                                        </strong>
                                    </p>
                                </div>
                                <div className='index_tokens_wrap'>
                                    <p>Index Tokens</p>
                                    <div className='top_holds'>
                                        <div className='item'>WBTC 30%</div>
                                        <div className='item'>LINK 20%</div>
                                        <div className='item'>AAVE 50%</div>
                                    </div>
                                </div>
                            </>
                        )}
                    </article>
                    <article className='margin_top_10 width_100'>
                        <div className='flex_wrap space_between width_100 flex_column_sm'>
                            <div className='head full_width_sm'>Chart</div>
                            <div className='abs_right full_width_sm'>
                                <select
                                    name='sort'
                                    id='sort'
                                    className='input_box'>
                                    <option value='Last 30 days'>
                                        Last 30 days
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className='paper_box'>
                            <Chart
                                options={chartData.options}
                                series={chartData.series}
                                type='area'
                            />
                        </div>
                    </article>
                    <article>
                        <div className='head'>History</div>
                        {type === 'active' ? (
                            <div className='row_box paper_box no_padding active_wrap'>
                                <div className='row'>
                                    <div className='icon'>
                                        <Invest />
                                    </div>
                                    <div className='date xs_hidden'>
                                        08.04.2021
                                    </div>
                                    <div className='hex'>
                                        Invested 2 BNB in LINK
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='icon'>
                                        <Dollar />
                                    </div>
                                    <div className='date xs_hidden'>
                                        04.04.2021
                                    </div>
                                    <div className='hex'>
                                        Liquidated 10 WBTC
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='row_box paper_box no_padding passive_wrap'>
                                <div className='row'>
                                    <div className='icon'>
                                        <Enter />
                                    </div>
                                    <div className='date xs_hidden'>
                                        08.04.2021
                                    </div>
                                    <div className='hex'>Ox1234567890</div>
                                    <div className='description'>
                                        entered pool with 2 BNB
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='icon'>
                                        <Exit />
                                    </div>
                                    <div className='date xs_hidden'>
                                        04.04.2021
                                    </div>
                                    <div className='hex'>Ox148791201</div>
                                    <div className='description'>
                                        exited pool with 1 BNB
                                    </div>
                                </div>
                            </div>
                        )}
                    </article>
                </div>
            </section>
        </>
    );
};

export default PoolIndexInfo;
