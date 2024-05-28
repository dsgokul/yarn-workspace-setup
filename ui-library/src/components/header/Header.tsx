import React from 'react'
import creamCollarLogo from '../../assets/CC Logo.svg'
import avatar from '../../assets/Avatar.svg'


interface HeaderProps {
    headerClasses: string,
    navClasses: string
}

export const Header: React.FC<HeaderProps> = ({ headerClasses, navClasses }) => {
    return (
        <header data-test='header' className={`flex bg-black border-b border-slate-200 items-center justify-center w-full sticky z-20 top-0 ${headerClasses}`}>
            <nav data-test='nav' className={`container px-8 py-3 max-w-[90rem] flex justify-between outline outline-1  ${navClasses}`}>
                <img src={creamCollarLogo} alt="product logo" className='block' />
                <img src={avatar} alt="avatar image" className='block' />
            </nav>
        </header>
    )
}

