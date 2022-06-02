import React from 'react';
import FacebookIcon from '../images/Facebook.png'
import InstagramIcon from '../images/Instagram.png'
import GithubIcon from '../images/GitHub.png'
import TwitterIcon from '../images/Twitter.png'

export default function footer() {
    return (
        <footer>
            <img src={TwitterIcon} alt="Twitter icon" />
            <img src={FacebookIcon} alt="Facebook icon" />
            <img src={InstagramIcon} alt="Instagram icon" />
            <img src={GithubIcon} alt="Github icon" />
        </footer>
    )
}
