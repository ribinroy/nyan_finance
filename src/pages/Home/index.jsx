import './styles.scss';
import { ReactComponent as Cards } from './../../assets/svg/Cards.svg';
import { ReactComponent as TopGradient } from './../../assets/svg/topGradient.svg';

const Test = () => {
    return (
        <main className='home'>
            <section className='mainSection'>
                <TopGradient className='gradient' />
                <div className='content_wrap'>
                    <div className='top_contents'></div>
                    <div className='info_wrap'>
                        <div className='texts_wrap'>
                            <h1>Decentralized Onchain Fund management</h1>
                            <p>
                                Join actively managed funds or create your own
                                fund
                            </p>
                            <div className='buttons_wrap'>
                                <button>Create your own fund</button>
                                <button className='invert'>Stake</button>
                                <button className='invert'>
                                    Documentation
                                </button>
                            </div>
                        </div>
                        <Cards />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Test;
