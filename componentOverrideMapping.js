const veniaUiPackagePath = '@magento/venia-ui';
const experiencePlatform = '@magento/experience-platform-connector';

module.exports = {
    [`${veniaUiPackagePath}/lib/components/Navigation/navigation.js`]: 'src/components/Navigation.js',
    [`${veniaUiPackagePath}/lib/components/MegaMenu/megaMenu.js`]: 'src/components/MegaMenu.js',
    [`${veniaUiPackagePath}/lib/components/MiniCart/miniCart.js`]: 'src/components/MiniCart.js',
    [`${veniaUiPackagePath}/lib/components/RichContent/richContent.js`]: 'src/components/RichContent.js',
    [`${veniaUiPackagePath}/lib/components/HomePage/index.js`]: 'src/components/HomePage.js',
    [`${veniaUiPackagePath}/lib/components/Routes/routes.js`]: 'src/components/Routes.js',
    [`${veniaUiPackagePath}/lib/components/App/app.js`]: 'src/components/App.js',
    [`${veniaUiPackagePath}/lib/components/App/localeProvider.js`]: 'src/components/LocaleProvider.js',
    [`${veniaUiPackagePath}/lib/components/Head/index.js`]: 'src/components/Head.js',
    [`${veniaUiPackagePath}/lib/components/Newsletter/newsletter.js`]: 'src/components/NewsLetter.js',
    [`${veniaUiPackagePath}/lib/components/ContactPage/contactLink.js`]: 'src/components/ContactLink.js',
    [`${veniaUiPackagePath}/lib/components/Header/currencySwitcher.js`]: 'src/components/CurrencySwitcher.js', // disabed
    [`${veniaUiPackagePath}/lib/components/Header/storeSwitcher.js`]: 'src/components/StoreSwitcher.js', // disabed

    [`${veniaUiPackagePath}/lib/RootComponents/CMS/cms.js`]: 'src/components/CMS.js',


    // Experience Platform Connector
    [`${experiencePlatform}/src/hooks/useExtensionContext.js`]: 'src/ExperiencePlatformConnector/useExtensionContext.js',
};
