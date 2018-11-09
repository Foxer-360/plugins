import { Component } from 'react';
import { ILooseObject } from '../../../../../../types';
interface ISeoWidgetProps {
    title?: string;
    description?: string;
    duplicated: boolean;
    focusKeyword?: string;
    fullUrl?: string;
    pagesWithSameKeyword?: ILooseObject[];
}
interface ISeoWidgetState {
    pageContent: Document | null;
    checkArticlesContent: boolean;
    checkAltTags: boolean;
}
declare class SeoWidget extends Component<ISeoWidgetProps, ISeoWidgetState> {
    constructor(props: ISeoWidgetProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: ISeoWidgetProps): void;
    render(): JSX.Element;
    private checkValueIncludes;
    private checkValueLength;
    private getPageContent;
}
export default SeoWidget;
