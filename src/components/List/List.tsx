import { ILooseObject } from '@source/types';
import { debounce, deepExistsValue } from '@source/utils';
import * as React from 'react';

interface IProperties {
  config?: ILooseObject;
  onChange?: (data: ILooseObject) => void;
}

interface IState {
  list: string;
}

class List extends React.Component<IProperties, IState> {

  constructor(props: IProperties) {
    super(props);

    let list = '';
    if (props.config && props.config.list) {
      list = props.config.list;
    }

    this.state = {
      list,
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.fireChange = debounce(this.fireChange, 300).bind(this);
  }

  public componentDidUpdate(prevProps: IProperties) {
    const list = deepExistsValue('config.list', this.props) as string;
    const prevList = deepExistsValue('config.list', prevProps) as string;

    if (list !== prevList) {
      return this.setState({
        list,
      });
    }
  }

  public render() {
    return (
      <div>
        <span>Here you can fill elements, that you want to show in Components. Please separate them by ,</span>
        <input value={this.state.list} onChange={this.handleChangeInput} />
      </div>
    );
  }

  private handleChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
    let value = e.target.value;
    if (!value || value === null) {
      value = '';
    }

    this.setState({
      list: value,
    }, () => {
      this.fireChange();
    });
  }

  private fireChange() {
    if (this.props.onChange) {
      // tslint:disable-next-line:no-console
      console.log('Plugin LIST fire onChange');
      this.props.onChange({
        ...this.state,
      });
    }
  }

}

export default List;
