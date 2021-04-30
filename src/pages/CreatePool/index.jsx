import './styles.scss';
import { useState } from 'react';
import UserAgreement from './UserAgreement';
import CreateActivePassivePool from './CreateActivePassivePool';

const CreatePool = () => {
    const [acknowledged, setAcknowledged] = useState(false);
    return (
        <section className='nav_adjust content_wrap create_pool'>
            <div className='max_width_wrap'>
                {acknowledged ? (
                    <CreateActivePassivePool />
                ) : (
                    <UserAgreement onComplete={() => setAcknowledged(true)} />
                )}
            </div>
        </section>
    );
};

export default CreatePool;
