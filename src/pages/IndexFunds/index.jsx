import './styles.scss';
import AvailableGraph from './../../component/AvailableGraph';

const IndexFunds = () => {
    return (
        <section className='nav_adjust content_wrap index_funds'>
            <div className='flex_wrap space_between'>
                <h1>Available index funds:</h1>
                <div className='abs_right'>
                    <div className='item'>Sort by: </div>
                    <select name='Size' id='Size' className='input_box'>
                        <option value='Size'>Size</option>
                    </select>
                </div>
            </div>
            <div className='split_box_wrap'>
                <div className='paper_box split_box'>
                    <AvailableGraph type='passive' name='Index name' />
                </div>
                <div className='paper_box split_box'>
                    <AvailableGraph type='passive' name='Index name' />
                </div>
            </div>
        </section>
    );
};

export default IndexFunds;
