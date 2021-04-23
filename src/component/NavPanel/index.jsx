import './styles.scss';
import { useState } from 'react';
import { ReactComponent as BigLogo } from './../../assets/svg/Logo Full.svg';

const Test = () => {
    const [expanded, setExpand] = useState(false);
    const nightModeHandler = (e) => {
        document.getElementsByTagName("html")[0].setAttribute("dark", e.currentTarget.checked)
    };
    return (
        <header
            className={expanded ? ' expanded' : ''}
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}>
            <BigLogo className="nyan_logo" />

            <input
                id='s2'
                type='checkbox'
                class='switch'
                onChange={nightModeHandler}
            />
            <label for='s2'>Night Mode</label>
        </header>
    );
};

export default Test;
