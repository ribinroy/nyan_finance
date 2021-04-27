import './styles.scss';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as BigLogo } from './../../assets/svg/Logo Full.svg';
import { ReactComponent as OverViewIcon } from './../../assets/svg/panelIcons/icon_overview.svg';
import { ReactComponent as PlusIcon } from './../../assets/svg/panelIcons/icon_plus.svg';
import { ReactComponent as OTC } from './../../assets/svg/panelIcons/icon_checked doc.svg';
import { ReactComponent as PassivePool } from './../../assets/svg/panelIcons/icon_clock.svg';
import { ReactComponent as NyanDocum } from './../../assets/svg/panelIcons/icon_documentation.svg';
import { ReactComponent as Rewards } from './../../assets/svg/panelIcons/icon_dollar.svg';
import { ReactComponent as ActivePools } from './../../assets/svg/panelIcons/icon_earnings.svg';
import { ReactComponent as Yield } from './../../assets/svg/panelIcons/icon_flower.svg';
import { ReactComponent as GitHub } from './../../assets/svg/panelIcons/icon_github.svg';
import { ReactComponent as Swap } from './../../assets/svg/panelIcons/icon_swap.svg';
import { ReactComponent as Community } from './../../assets/svg/panelIcons/icon_telegram.svg';

const Test = () => {
    const [expanded, setExpand] = useState(false);
    const nightModeHandler = (e) => {
        document
            .getElementsByTagName('html')[0]
            .setAttribute('dark', e.currentTarget.checked);
    };
    return (
        <header
            className={expanded ? ' expanded' : ''}
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}>
            <Link to='/'>
                <BigLogo className='nyan_logo' />
            </Link>

            <div className='header_items'>
                <div className='connection only_onExpanded'>
                    <input
                        type='text'
                        name='connectId'
                        id='connectId'
                        value='Ox1234567890'
                    />
                    <button>Disconnect</button>
                </div>
                <div className='nav_links_set_wrap'>
                    <div className='head only_onExpanded'>DASHBOARDS</div>
                    <NavLink
                        link='fund-overview'
                        name='Fund Overview'
                        Icon={OverViewIcon}
                    />
                    <NavLink
                        link='create-a-pool'
                        name='Create a pool'
                        Icon={PlusIcon}
                    />
                    <NavLink
                        link='active-pools'
                        name='Active Pools'
                        Icon={ActivePools}
                    />
                    <NavLink
                        link='passive-pools'
                        name='Passive Pools'
                        Icon={PassivePool}
                    />
                    <NavLink
                        link='nyan-rewards'
                        name='Nyan Rewards'
                        Icon={Rewards}
                    />
                </div>
                <div className='nav_links_set_wrap'>
                    <div className='head only_onExpanded'>
                        CONTRACT INTERFACES
                    </div>
                    <NavLink link='swap' name='Swap' Icon={Swap} />
                    <NavLink link='yield' name='Yield' Icon={Yield} />
                    <NavLink link='otc-swap' name='OTC Swap' Icon={OTC} />
                </div>
                <div className='nav_links_set_wrap'>
                    <div className='special_link'>
                        <NyanDocum />
                        <div className='text_wrap only_onExpanded'>
                            <div className='main'>Nyan Documentation</div>
                        </div>
                    </div>
                    <div className='special_link'>
                        <Community />
                        <div className='text_wrap only_onExpanded'>
                            <div className='main'>Join Community</div>
                            <div className='descr'>
                                Join our awesome Telegram
                            </div>
                        </div>
                    </div>
                    <div className='special_link'>
                        <GitHub />
                        <div className='text_wrap only_onExpanded'>
                            <div className='main'>Github</div>
                            <div className='descr'>View source code</div>
                        </div>
                    </div>
                </div>
                <div className='theme_shift only_onExpanded'>
                    <input
                        id='s2'
                        type='checkbox'
                        class='switch'
                        onChange={nightModeHandler}
                    />
                    <label for='s2'>Night Mode</label>
                </div>
            </div>
        </header>
    );
};

const NavLink = ({ link, name, Icon }) => {
    const location = useLocation();
    return (
        <Link
            to={link}
            className={
                'nav_link' + (location.pathname === '/' + link ? ' active' : '')
            }>
            <Icon />
            <span className='only_onExpanded'>{name}</span>
        </Link>
    );
};

export default Test;
