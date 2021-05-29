import PopUp from '../../../component/PopUp';

const AddBNB = ({ showPop, changeShowPop, isRemove }) => {
    return (
        <PopUp
            visible={showPop}
            className={'pool_pop_up'}
            onClose={() => changeShowPop(false)}
            responsive={false}>
            <div className='content_wrap no_padding'>
                <div className='head'>
                    <strong>Remove Liquidity</strong>
                </div>
                <p>
                    You're about to remove ETH from this Self managed pool.
                    <br />
                    Your returned BNB will be prorated depending on how much the
                    pool's manager has withdrawn.
                </p>
                <hr />
                <div className='form_wrap'>
                    <div className='form_item_wrap'>
                        <label>Pool Token amount</label>
                        <input type='number' className='input_box' />
                    </div>
                </div>
                <p className='no_margin'>Expected BNB</p>
                <p className='no_margin green_text'>0 BNB</p>
                <button
                    className='align_center_ml_sm min_45_sm'
                    onClick={() => changeShowPop(false)}>
                    Withdraw my Liquidity
                </button>
            </div>
        </PopUp>
    );
};

export default AddBNB;
