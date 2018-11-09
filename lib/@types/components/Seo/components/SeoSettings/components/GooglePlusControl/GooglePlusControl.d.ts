import React from 'react';
import { ILooseObject } from '../../../../../../types';
interface IGooglePlusControlProps {
    image: string;
    title: string;
    publisher: string;
    url?: string;
    updateTitle: (value: string) => void;
    updatePublisher: (value: string) => void;
    updateImage: (value: string) => void;
    rowFormItemLayout: ILooseObject;
}
declare class GooglePlusControl extends React.Component<IGooglePlusControlProps> {
    static defaultProps: {
        image: string;
        url: string;
    };
    render(): JSX.Element;
    private gatherGooglePlusData;
}
export default GooglePlusControl;
