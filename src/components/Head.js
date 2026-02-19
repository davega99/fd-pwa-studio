import React, { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
export {
    default as HeadProvider
} from '@magento/venia-ui/lib/components/Head/headProvider';
import { Helmet } from 'react-helmet-async';
Helmet.defaultProps.defer = false;

export const Link = props => {
    const { children } = props;
    return (
        <Helmet>
            <link>{children}</link>
        </Helmet>
    );
};

export const Meta = props => {
    const { children } = props;
    return (
        <Helmet>
            <meta>{children}</meta>
        </Helmet>
    );
};

export const Style = props => {
    const { children } = props;
    return (
        <Helmet>
            <style>{children}</style>
        </Helmet>
    );
};

export const Title = props => {
    const { children } = props;
    return (
        <Helmet>
            <title>{children}</title>
        </Helmet>
    );
};

export const StoreTitle = props => {
    return (
        <Helmet>
            <title>Floral Delights PH</title>
        </Helmet>
    );
};
