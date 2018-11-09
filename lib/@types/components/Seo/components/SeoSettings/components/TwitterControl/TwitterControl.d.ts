import { Component } from 'react';
import { ILooseObject } from './lib\@types\types';
interface ITwitterControlProps {
    image: string;
    title: string;
    description: string;
    publisher: string;
    updateTitle: (value: string) => void;
    updatePublisher: (value: string) => void;
    updateDescription: (value: string) => void;
    updateImage: (value: string) => void;
    rowFormItemLayout: ILooseObject;
}
declare class TwitterControl extends Component<ITwitterControlProps> {
    static defaultProps: {
        image: string;
        url: string;
    };
    render(): JSX.Element;
    private gatherTwitterData;
}
export default TwitterControl;
