import './styles.scss';
import AvailableGraph from './../../component/AvailableGraph';

const IndexFunds = () => {
    return (
        <section className='nav_adjust content_wrap index_funds'>
            <div data-aos='fade-up' data-aos-offset='0' data-aos-duration='500'>
                <div className='flex_wrap space_between'>
                    <h1 className='center_sm'>Available index funds:</h1>
                    <div className='abs_right xs_hidden'>
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
            </div>
        </section>
    );
};

export default IndexFunds;
