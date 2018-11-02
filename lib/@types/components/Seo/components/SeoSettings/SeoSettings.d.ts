import * as React from 'react';
import { ILooseObject } from '../../../../types';
interface ISeoSettingsProps {
    currentPage: string | null;
    currentLanguage: string | null;
    url: string;
    image?: string;
    title: string;
    description: string;
    focusKeyword: string;
    facebookTitle: string;
    facebookPublisher: string;
    facebookDescription: string;
    facebookImage: string;
    twitterTitle: string;
    twitterPublisher: string;
    twitterDescription: string;
    twitterImage: string;
    googlePlusTitle: string;
    googlePlusPublisher: string;
    googlePlusImage: string;
    pages: ILooseObject[];
    loading: boolean;
    updateTitle: (value: string) => void;
    updateDescription: (value: string) => void;
    updateFocusKeyword: (value: string) => void;
    updateFacebookPublisher: (value: string) => void;
    updateFacebookTitle: (value: string) => void;
    updateFacebookDescription: (value: string) => void;
    updateFacebookImage: (value: string) => void;
    updateTwitterPublisher: (value: string) => void;
    updateTwitterTitle: (value: string) => void;
    updateTwitterDescription: (value: string) => void;
    updateTwitterImage: (value: string) => void;
    updateGooglePlusTitle: (value: string) => void;
    updateGooglePlusPublisher: (value: string) => void;
    updateGooglePlusImage: (value: string) => void;
    useSocialMetaForAll: boolean;
}
declare class SeoSettings extends React.Component<ISeoSettingsProps> {
    render(): JSX.Element;
}
export default SeoSettings;
