import * as React from 'react';
import { ILooseObject } from './lib\@types\types';
import { ISeoPluginData } from '../../Seo';
interface ISeoFormProps {
    loading: boolean;
    page: string | null;
    language: string | null;
    data: ISeoPluginData | null;
    pages: ILooseObject[];
    onChangeData: (data: any) => void;
    useSocialMetaForAll: boolean;
}
interface ISeoFormState {
    data: ISeoPluginData | null;
}
declare class SeoForm extends React.Component<ISeoFormProps, ISeoFormState> {
    constructor(props: ISeoFormProps);
    componentWillReceiveProps(nextProps: ISeoFormProps): void;
    render(): JSX.Element | null;
    private handleChangeData;
}
export default SeoForm;
