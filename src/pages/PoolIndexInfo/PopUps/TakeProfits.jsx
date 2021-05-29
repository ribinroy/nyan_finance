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
                    <strong>Take BNB Profits</strong>
                </div>
                <p>
                    Available pool profits can be claimed here. Claiming
                    operates on a FIFO basis and the amount of pool Tokens you
                    have.
                </p>
                <hr />
                <p className='no_margin'>Available Profit:</p>
                <p className='no_margin green_text'>0 BNB</p>
                <p className='section_brake'>Expected BNB:</p>
                <p className='no_margin green_text'>0 BNB</p>
                <button
                    className='align_center_ml_sm min_45_sm'
                    onClick={() => changeShowPop(false)}>
                    Claim
                </button>
            </div>
        </PopUp>
    );
};

export default AddBNB;
