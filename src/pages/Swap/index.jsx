import './styles.scss';

const Swap = () => {
    return (
        <section className='nav_adjust content_wrap swap'>
            <div className='paper_box'>
                <p className='no_margin'>My BNB 0.047</p>
                <div className='form_wrap'>
                    <div className='form_item_wrap'>
                        <label>From</label>
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
                            placeholder='Enter Address'
                        />
                    </div>
                    <button>Swap</button>
                </div>
            </div>
            <p className='pool_investments'>
                Pool Investments:{' '}
                <input
                    type='text'
                    placeholder='Enter Pool Address'
                    className='special_input_style'
                />
            </p>
            <div className='paper_box no_padding'></div>
        </section>
    );
};

export default Swap;
