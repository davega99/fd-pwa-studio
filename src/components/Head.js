import React, { useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
export {
    default as HeadProvider
} from '@magento/venia-ui/lib/components/Head/headProvider';
import { Helmet } from 'react-helmet-async';
Helmet.defaultProps.defer = false;

export const Link = props => {
    const { children, ...tagProps } = props;
    return (
        <Helmet>
            <link {...tagProps}>{children}</link>
        </Helmet>
    );
};

export const Meta = props => {
    const { children, ...tagProps } = props;
    return (
        <Helmet>
            <meta {...tagProps}>{children}</meta>
        </Helmet>
    );
};

export const Style = props => {
    const { children, ...tagProps } = props;
    return (
        <Helmet>
            <style {...tagProps}>{children}</style>
        </Helmet>
    );
};

export const Title = props => {
    const { children, ...tagProps } = props;
    return (
        <Helmet>
            <title {...tagProps}>{children}</title>
        </Helmet>
    );
};

export const StoreTitle = props => {
    const { children, ...tagProps } = props;

    return (
        <Helmet>
            <title {...tagProps}>Floral Delights PH</title>
        </Helmet>
    );
};
