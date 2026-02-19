import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const Logo = React.memo(() => {
    return (
        <Link to="/" className="flex items-center" aria-label="Go to homepage">
            <img
                src={`/venia-static/icons/venia_maskable_512.png`}
                alt="Store Logo"
                className="h-18 w-auto"
                loading="eager"
                fetchpriority="high"
                width="180"
                height="72"
                decoding="sync"
            />
        </Link>
    );
});

Logo.displayName = 'Logo';

export default Logo;
