import React, { useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { fromReactIntl, toReactIntl } from '@magento/venia-ui/lib/util/formatLocale';

const LocaleProvider = props => {
    const [messages, setMessages] = useState(null);

    const magentoLocale = 'en_GB';

    const language = useMemo(() => {
        return magentoLocale
            ? toReactIntl(magentoLocale)
            : DEFAULT_LOCALE;
    }, []);

    const fetchLocale =
        'default' in __fetchLocaleData__
            ? __fetchLocaleData__.default
            : __fetchLocaleData__;

    useEffect(() => {
        if (language) {
            const locale = fromReactIntl(language);

            fetchLocale(locale)
                .then(data => {
                    setMessages(data.default);
                })
                .catch(error => {
                    console.error(
                        `Unable to load translation file.\n${error}`
                    );
                });
        }
    }, [fetchLocale, language]);

    const handleIntlError = error => {
        if (messages) {
            if (error.code === 'MISSING_TRANSLATION') {
                console.warn('Missing translation', error.message);
                return;
            }
            throw error;
        }
    };

    return (
        <IntlProvider
            key={language}
            {...props}
            defaultLocale={DEFAULT_LOCALE}
            locale={language}
            messages={messages}
            onError={handleIntlError}
        />
    );
};

export default LocaleProvider;
