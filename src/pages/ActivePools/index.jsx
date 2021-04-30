import './styles.scss';
import AvailableGraph from './../../component/AvailableGraph';

const ActivePools = () => {
    return (
        <section className='nav_adjust content_wrap active_pool'>
            <h1>Available active pools:</h1>
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

export default ActivePools;
