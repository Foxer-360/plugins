import React from 'react';
import { ILooseObject } from './lib\@types\types';
interface IGoogleControlProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    fullUrl?: string;
    currentPage: string | null;
    pages?: ILooseObject[];
    focusKeyword?: string;
    updateTitle: (value: string) => void;
    updateDescription: (value: string) => void;
    updateFocusKeyword: (value: string) => void;
    rowFormItemLayout: ILooseObject;
}
declare class GoogleControl extends React.Component<IGoogleControlProps> {
    static defaultProps: {
        image: string;
        url: string;
    };
    render(): JSX.Element;
    private gatherGoogleData;
}
export default GoogleControl;
