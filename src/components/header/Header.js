import React from 'react';
import './Header.scss';
import headerImage from '../../assets/images/Pizza.png';

export const Header = () => {
    return (
        <div id = 'header-conteiner'>
            <img id = 'header-image' src = { headerImage } alt = 'We Eat header' />
            <div id = 'header-text'>WeEat</div>
        </div>
    );
};