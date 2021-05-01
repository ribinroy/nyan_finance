import './styles.scss';
import AvailableGraph from './../../component/AvailableGraph';

const ActivePools = () => {
    return (
        <section className='nav_adjust content_wrap active_pool'>
            <div className='flex_wrap space_between'>
                <h1>Available active pools:</h1>
                <div className='abs_right'>
                    <div className='item'>Sort by: </div>
                    <select name='Size' id='Size' className='input_box'>
                        <option value='Size'>Size</option>
                    </select>
                </div>
            </div>
            <div className='split_box_wrap'>
                <div className='paper_box split_box'>
                    <AvailableGraph
                        type='active'
                        name='Pool name'
                        owner='Pool owner'
                    />
                </div>
                <div className='paper_box split_box'>
                    <AvailableGraph
                        type='active'
                        name='Pool name'
                        owner='Pool owner'
                    />
                </div>
            </div>
        </section>
    );
};

export default ActivePools;
