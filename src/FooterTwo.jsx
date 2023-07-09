import React, { useEffect, useState } from 'react';
import './App.css'

const FooterTwo = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isScrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showFooter ? (
    <div className='footer-div'>
      <p>© All Rights Reserved @gkeepbyrony.in {new Date().getFullYear()}</p>
    </div>
  ) : null;
};

export default FooterTwo;
