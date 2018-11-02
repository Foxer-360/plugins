import * as React from 'react';
interface ISeoProps {
    currentPage: string;
    onChange: (data: any) => void;
    initData: any;
    loading: boolean;
}
interface ISeoState {
    pages: any[];
}
export interface ISeoPluginData {
    title: string;
    description: string;
    focusKeyword: string;
    url: string;
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
}
declare class Seo extends React.Component<ISeoProps, ISeoState> {
    constructor(props: ISeoProps);
    render(): JSX.Element;
    private handleChange;
}
export default Seo;
