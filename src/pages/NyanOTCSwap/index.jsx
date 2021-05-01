import './styles.scss';
import { ReactComponent as Exclamation } from './../../assets/svg/icon_exclamation.svg';

const Test = () => {
    return (
        <section className='nav_adjust content_wrap nyan_otc_swap'>
            <div className='max_width_wrap'>
                <p>
                    The Nyan OTC Swap contracts allows any active fund or
                    standard user to perform trustless over the counter trades
                    without the need for an AMM
                </p>
                <button>Learn more</button>
                <div className='form_wrap'>
                    <div className='form_item_wrap'>
                        <label>SWAP ID:</label>
                        <input type='text' className='input_box' />
                        <div className='disclaimer'>
                            <Exclamation />
                            <span>Ask the creator for their SWAP ID</span>
                        </div>
                    </div>
                </div>
                <div className='paper_box'>
                    <div className='head'>Creator offers:</div>
                    <div className='form_wrap'>
                        <div className='form_item_wrap'>
                            <label>Enter BNB amount</label>
                            <input type='text' className='input_box' />
                        </div>
                    </div>
                    <div className='head'>For:</div>
                    <div className='green_text'>100.000 tokens</div>
                </div>
                <button className='invert disabled'>Swap</button>
            </div>
        </section>
    );
};

export default Test;
