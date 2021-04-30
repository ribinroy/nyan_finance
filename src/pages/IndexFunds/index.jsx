import './styles.scss';
import AvailableGraph from './../../component/AvailableGraph';

const IndexFunds = () => {
    return (
        <section className='nav_adjust content_wrap index_funds'>
            <h1>Available index funds:</h1>
            <div className='split_box_wrap'>
                <div className='paper_box split_box'>
                    <AvailableGraph />
                </div>
                <div className='paper_box split_box'>
                    <AvailableGraph />
                </div>
            </div>
        </section>
    );
};

export default IndexFunds;
