import { ILooseObject } from './lib\@types\types';
import * as React from 'react';
interface IProperties {
    config?: ILooseObject;
    onChange?: (data: ILooseObject) => void;
}
interface IState {
    list: string;
}
declare class List extends React.Component<IProperties, IState> {
    constructor(props: IProperties);
    componentDidUpdate(prevProps: IProperties): void;
    render(): JSX.Element;
    private handleChangeInput;
    private fireChange;
}
export default List;
