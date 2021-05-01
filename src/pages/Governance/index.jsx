import './styles.scss';
import { ReactComponent as Exclamation } from './../../assets/svg/icon_exclamation.svg';

const Test = () => {
    return (
        <section className='nav_adjust content_wrap governance'>
            <div className='flex_wrap space_between'>
                <h1>Governance</h1>
                <p>
                    <strong>
                        MY VOTES: <span className='green_text'> 2800</span>
                    </strong>
                </p>
            </div>
            <article className='paper_box purple_text vote_info'>
                <div className='head'>
                    <Exclamation />
                    Voting info:
                </div>
                <p className='purple_text'>
                    Voting locks your tokens for the duration of the vote. When
                    voting is complete, make sure to ‘release votes’ to free up
                    votes and tokens.
                </p>
                <button className='invert'>Release votes</button>
            </article>
            <article>
                <div className='head'>Contract whitelist</div>
                <p className='no_margin small'>
                    Contracts wanting to access the Nyan Fund will need to be
                    approved by voters here.
                </p>
                <div className='paper_box no_padding row_box'>
                    <div className='row'></div>
                </div>
            </article>
            <article>
                <div className='head'>Contract updates</div>
                <p className='no_margin small'>
                    Updates to any contract within the Nyan ecosystem must be
                    approved here first.
                </p>
                <div className='paper_box no_padding row_box'>
                    <div className='row'></div>
                </div>
            </article>
        </section>
    );
};

export default Test;
