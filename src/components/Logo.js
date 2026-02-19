import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const Logo = React.memo(() => {
    return (
        <Link to="/" className="flex items-center" aria-label="Go to homepage">
            <img
                src={`/venia-static/icons/venia_circle_144.png`}
                alt="Store Logo"
                loading="eager"
                fetchpriority="high"
                width="20"
                height="20"
                decoding="sync"
            />
        </Link>
    );
});

Logo.displayName = 'Logo';

export default Logo;
