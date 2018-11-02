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

interface ISeoFormState {
  data: ISeoPluginData | null;
}

class SeoForm extends React.Component<ISeoFormProps, ISeoFormState> {

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

    return (
      <div className="content__holder">
        <SeoSettings
          {...this.props}
          currentPage={this.props.page || null}
          currentLanguage={this.props.language || null}

          url={this.state.data && this.state.data.url || ''}
          pages={this.props.pages}

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

          loading={loading}

          updateTitle={(data: string) => this.handleChangeData({ title: data })}
          updateDescription={(data: string) => this.handleChangeData({ description: data })}
          updateFocusKeyword={(data: string) => this.handleChangeData({ focusKeyword: data })}
          updateFacebookTitle={(data: string) => this.handleChangeData({ facebookTitle: data })}
          updateFacebookPublisher={(data: string) => this.handleChangeData({ facebookPublisher: data })}
          updateFacebookDescription={(data: string) => this.handleChangeData({ facebookDescription: data })}
          updateFacebookImage={(data: string) => this.handleChangeData({ facebookImage: data })}
          updateTwitterTitle={(data: string) => this.handleChangeData({ twitterTitle: data })}
          updateTwitterPublisher={(data: string) => this.handleChangeData({ twitterPublisher: data })}
          updateTwitterDescription={(data: string) => this.handleChangeData({ twitterDescription: data })}
          updateTwitterImage={(data: string) => this.handleChangeData({ twitterImage: data })}
          updateGooglePlusTitle={(data: string) => this.handleChangeData({ googlePlusTitle: data })}
          updateGooglePlusPublisher={(data: string) => this.handleChangeData({ googlePlusPublisher: data })}
          updateGooglePlusImage={(data: string) => this.handleChangeData({ googlePlusImage: data })}
        />
      </div>
    );
  }

  private handleChangeData(data: ILooseObject | null) {
    if (data) {
      const newData = {...this.state.data} as ISeoPluginData;
      Object.keys(data).forEach((key: string) => {
        newData[key] = data[key];
      });
      this.setState({
        data: newData,
      }, () => {
        if (this.props.onChangeData) {
          this.props.onChangeData(this.state.data);
        }
      });
    }
  }
}

export default SeoForm;