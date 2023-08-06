import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Social = () => {
    return (
        <div className="socials">
                    <a href="https://www.facebook.com/sharmas185"><FacebookIcon className="icon-social" /></a>
                    <a href="https://instagram.com/iamsandeep_wa?igshid=YmMyMTA2M2Y="><InstagramIcon className="icon-social"  /></a>
                    <a href="https://www.linkedin.com/in/sandeep-sharma-63162619b/"><LinkedInIcon className="icon-social"  /></a>
                    <a href="https://twitter.com/Sandy97465592"><TwitterIcon className="icon-social"  /></a>
        </div>
    )
}

export default Social;
