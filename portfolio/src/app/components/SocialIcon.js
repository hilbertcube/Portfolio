import React from 'react';

const SocialIcon = ({ title, href, delay, iconClass }) => {
  return (
    <abbr title={title} className="no-underline">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="social-media"
        data-aos="fade-in"
        data-aos-delay={delay}
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <i className={iconClass}></i>
      </a>
    </abbr>
  );
};

export default SocialIcon;