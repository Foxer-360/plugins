import React from 'react';
import { ILooseObject } from './lib\@types\types';
interface IFacebookControlProps {
    image: string;
    title: string;
    description: string;
    publisher: string;
    url?: string;
    updateTitle: (value: string) => void;
    updatePublisher: (value: string) => void;
    updateDescription: (value: string) => void;
    updateImage: (value: string) => void;
    rowFormItemLayout: ILooseObject;
}
declare class FacebookControl extends React.Component<IFacebookControlProps> {
    static defaultProps: {
        image: string;
        url: string;
    };
    render(): JSX.Element;
    private gatherFacebookData;
}
export default FacebookControl;
