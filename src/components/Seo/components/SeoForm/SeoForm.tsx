import * as React from 'react';
import { ILooseObject } from '@source/types';
import { ISeoPluginData } from '../../Seo';
import SeoSettings from '../SeoSettings';

interface ISeoFormProps {
  loading: boolean;

  page: string | null; // "| null" odstranit
  language: string | null; // "| null" odstranit

  data: ISeoPluginData | null; // "| null" odstranit

  pages: ILooseObject[];

  onChangeData: (data: any) => void;

  useSocialMetaForAll: boolean;
}

class SeoForm extends React.Component<ISeoFormProps, any> {

  public constructor(props: ISeoFormProps) {
    super(props);

    this.state = {
      data: null,
    };

    this.handleChangeData = this.handleChangeData.bind(this);
  }

  public componentWillReceiveProps(nextProps: ISeoFormProps) {
    if (this.state.data === null) {
      this.handleChangeData(nextProps.data);
    }
  }

  public render() {
    const {
      loading,
    } = this.props;

    if (loading || !this.props) {
      return null;
    }
    console.log(this.state);
    return (
      <div className="content__holder">
        <SeoSettings
          url={this.state.data && this.state.data.url || ''}


          title={this.state.data && this.state.data.title || ''}
          description={this.state.data && this.state.data.description || ''}
          focusKeyword={this.state.data && this.state.data.focusKeyword  || ''}
          facebookTitle={this.state.data && this.state.data.facebookTitle || ''}
          facebookPublisher={this.state.data && this.state.data.facebookPublisher || ''}
          facebookDescription={this.state.data && this.state.data.facebookDescription || ''}
          facebookImage={this.state.data && this.state.data.facebookImage || ''}
          twitterTitle={this.state.data && this.state.data.twitterTitle || ''}
          twitterPublisher={this.state.data && this.state.data.twitterPublisher || ''}
          twitterDescription={this.state.data && this.state.data.twitterDescription || ''}
          twitterImage={this.state.data && this.state.data.twitterImage || ''}
          googlePlusTitle={this.state.data && this.state.data.googlePlusTitle || ''}
          googlePlusPublisher={this.state.data && this.state.data.googlePlusPublisher || ''}
          googlePlusImage={this.state.data && this.state.data.googlePlusImage || ''}
          updateTitle={(data: string) => this.handleChangeData({ title: data })}
          updateDescription={(data: string) => this.handleChangeData({ description: data })}
          updateFocusKeyword={(data: string) => this.handleChangeData({ focusKeyword: data })}
          updateFacebookTitle={(data: string) => this.handleChangeData({ facebookTitle: data })}
          updateFacebookPublisher={(data: string) => this.handleChangeData({ facebookPublisher: data })}
          updateFacebookDescription={(data: string) => this.handleChangeData({ facebookDescription: data })}
          updateFacebookImage={(data: string) => this.handleChangeData({ facebookImage: data })}
        />
      </div>
    );
  }
}

export default SeoForm;