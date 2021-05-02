import { useState } from 'react';
import NyanCat from './../../assets/svg/nyanCat.svg';
import { ReactComponent as Interrogation } from './../../assets/svg/icon_interrogation.svg';

const CreateActivePassivePool = () => {
    const [selectedPool, setPool] = useState('active');
    const [showProcessing, setProcessing] = useState(false);

    return (
        <>
            <h1>Create Pool</h1>
            <div className='button_tab_wrap'>
                <button
                    className={selectedPool !== 'active' ? ' invert' : ''}
                    onClick={() => setPool('active')}>
                    Active
                </button>
                <button
                    className={selectedPool !== 'passive' ? ' invert' : ''}
                    onClick={() => setPool('passive')}>
                    Passive
                </button>
            </div>
            {showProcessing ? (
                <Processing poolSelected={selectedPool} />
            ) : selectedPool === 'active' ? (
                <ActivePool onRegClick={() => setProcessing(true)} />
            ) : (
                <PassivePool onRegClick={() => setProcessing(true)} />
            )}
        </>
    );
};

const ActivePool = ({ onRegClick }) => {
    return (
        <div className='form_wrap'>
            <div className='form_item_wrap'>
                <label>Pool name</label>
                <input type='text' className='input_box' />
            </div>
            <div className='form_item_wrap'>
                <label>Pool community link</label>
                <input type='text' className='input_box' />
            </div>
            <div className='form_item_wrap'>
                <label>Pool community link</label>
                <textarea className='input_box' />
            </div>
            <p>
                Registration cost:
                <span className='green_text'> 0.1 BNB</span>{' '}
            </p>
            <button onClick={() => onRegClick()}>Register</button>
        </div>
    );
};

const PassivePool = ({ onRegClick }) => {
    const [formQuestionsArray, setFormQuestions] = useState([
        'Index name',
        'Token address',
        'Slippage',
        'Index percentage',
    ]);
    const newSet = ['Token address', 'Slippage', 'Index percentage'];

    return (
        <div className='form_wrap'>
            {formQuestionsArray.map((el) => (
                <div className='form_item_wrap'>
                    <label>
                        {el} {el === 'Index percentage' && <Interrogation />}
                    </label>
                    <input type='text' className='input_box' />
                </div>
            ))}

            <button
                className='invert'
                onClick={() =>
                    setFormQuestions(formQuestionsArray.concat(newSet))
                }>
                + Add more token
            </button>
            <p>
                Registration cost:
                <span className='green_text'> 1 BNB</span>
            </p>
            <button onClick={() => onRegClick()}>Register</button>
        </div>
    );
};

const Processing = ({ poolSelected }) => {
    return (
        <div className='paper_box processing_box'>
            <p className='head'>Your index transaction is processing...</p>
            <img src={NyanCat} alt='' />
            {poolSelected === 'active' && (
                <p>
                    You can visit your pool here:{' '}
                    <a
                        href='http://www.google.com'
                        target='_blank'
                        rel='noreferrer'>
                        pool link
                    </a>
                </p>
            )}
            {poolSelected !== 'active' && (
                <p>
                    You can visit your index here:{' '}
                    <a
                        href='http://www.google.com'
                        target='_blank'
                        rel='noreferrer'>
                        index link
                    </a>
                </p>
            )}
            Tip: your index link is your wallet address
        </div>
    );
};
export default CreateActivePassivePool;
