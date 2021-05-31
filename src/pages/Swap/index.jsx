import './styles.scss';
import { useState } from 'react';
import BNBLogo from './../../assets/images/BNB Logo.png';

const tempData = {
    token: 'Bonfire',
    liquidityUser: '0.01',
    amount: '0.026',
    currentValue: '0.012',
};

const Swap = () => {
    const liquidateHandler = (value) => {
        console.log(value);
    };

    return (
        <section className='nav_adjust content_wrap swap'>
            <div data-aos='fade-up' data-aos-offset='0' data-aos-duration='500'>
                <SwapForm />
                <p className='pool_investments'>
                    Pool Investments:{' '}
                    <input
                        type='text'
                        placeholder='Enter Pool Address'
                        className='special_input_style'
                    />
                </p>
                <div className='paper_box no_padding investments_paper_box'>
                    <div className='investments_wrap_table'>
                        <div className='headers_wrap'>
                            <div className='head_item'>Token</div>
                            <div className='head_item'>Liquidity User</div>
                            <div className='head_item'>Amount</div>
                            <div className='head_item'>Current Value</div>
                            <div className='head_item input_cell'></div>
                        </div>
                        <div className='body_wrap'>
                            <RowComponent
                                data={tempData}
                                liquidateHandler={liquidateHandler}
                            />
                            <RowComponent
                                data={tempData}
                                liquidateHandler={liquidateHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SwapForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div
            className={
                'paper_box my_bnb_wrap loader_wrap' +
                (isLoading ? ' is_loading' : '')
            }>
            {isLoading && <div className='loader'></div>}
            <p className='no_margin'>My BNB 0.047</p>
            <div className='form_wrap'>
                <div className='form_item_wrap'>
                    <label>
                        From
                        <div className='logo_wrap'>
                            BNB
                            <img src={BNBLogo} alt='BNB Logo' />
                        </div>
                    </label>
                    <input
                        type='text'
                        className='input_box'
                        placeholder='Enter Amount'
                    />
                </div>
                <div className='form_item_wrap'>
                    <label>To</label>
                    <input
                        type='text'
                        className='input_box'
                        placeholder='Enter Address'
                    />
                </div>
                <div className='form_item_wrap'>
                    <label>Set Slippage %</label>
                    <input
                        type='number'
                        className='input_box'
                        placeholder='Enter Slippage'
                    />
                </div>
            </div>
            <button
                className='align_center_ml_sm min_45_sm'
                onClick={() => setIsLoading(!isLoading)}>
                Swap
            </button>
        </div>
    );
};

const RowComponent = ({ data, liquidateHandler }) => {
    const [slippageValue, setSlippageValue] = useState('');

    return (
        <div className='investment_item'>
            <div className='data_item'>
                <div className='label xs_visible'>Token</div>
                Bonfire
            </div>
            <div className='data_item'>
                <div className='label xs_visible'>Liquidity User</div>
                0.01
            </div>
            <div className='data_item'>
                <div className='label xs_visible'>Amount</div>
                0.026
            </div>
            <div className='data_item'>
                <div className='label xs_visible'>Current Value</div>
                0.012
            </div>
            <div className='data_item input_cell'>
                <input
                    value={slippageValue}
                    onChange={(e) => setSlippageValue(e.currentTarget.value)}
                    type='text'
                    className='input_box'
                    placeholder='Slippage'
                />
                <button
                    onClick={() =>
                        liquidateHandler && liquidateHandler(slippageValue)
                    }>
                    Liquidate
                </button>
            </div>
        </div>
    );
};
export default Swap;
