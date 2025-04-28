import React from 'react';

const Icon = ({ name, alt = '', className = '', folder = 'icons', ...props }) => {
    const src = new URL(`../../assets/${folder}/${name}`, import.meta.url);
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading="lazy"
            {...props}
        />
    );
};

export default Icon;