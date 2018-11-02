import * as React from 'react';
import { Col, Row, Tabs } from 'antd';
import { ILooseObject } from '@source/types';

import FacebookControl from './components/FacebookControl';
import TwitterControl from './components/TwitterControl';
import GooglePlusControl from './components/GooglePlusControl';
import GoogleControl from './components/GoogleControl';
// import SaveSeoButton from '../../components/SaveSeoButton';

const rowFormItemLayout = {
  labelCol: {
    sm: { span: 6 },
    xs: { span: 24 },
  },
  wrapperCol: {
    sm: { span: 17 },
    xs: { span: 24 },
  },
};

interface ISeoSettingsProps {
  currentPage: string | null; // "| null" odstranit
  currentLanguage: string | null; // "| null" odstranit

  url: string;
  image?: string;

  title: string;
  description: string;
  focusKeyword: string;
  // fb
  facebookTitle: string;
  facebookPublisher: string;
  facebookDescription: string;
  facebookImage: string;
  // twitter
  twitterTitle: string;
  twitterPublisher: string;
  twitterDescription: string;
  twitterImage: string;
  // google plus
  googlePlusTitle: string;
  googlePlusPublisher: string;
  googlePlusImage: string;

  // seznam všech stránek
  pages: ILooseObject[];
  // ?
  loading: boolean;

  updateTitle: (value: string) => void;
  updateDescription: (value: string) => void;
  updateFocusKeyword: (value: string) => void;
  // fb
  updateFacebookPublisher: (value: string) => void;
  updateFacebookTitle: (value: string) => void;
  updateFacebookDescription: (value: string) => void;
  updateFacebookImage: (value: string) => void;
  // twitter
  updateTwitterPublisher: (value: string) => void;
  updateTwitterTitle: (value: string) => void;
  updateTwitterDescription: (value: string) => void;
  updateTwitterImage: (value: string) => void;
  // google plus
  updateGooglePlusTitle: (value: string) => void;
  updateGooglePlusPublisher: (value: string) => void;
  updateGooglePlusImage: (value: string) => void;

  // actionUseMetaForAll: (value: string) => void;

  useSocialMetaForAll: boolean;
}

class SeoSettings extends React.Component<ISeoSettingsProps> {

  public render() {
    const props = this.props;

    const {
      currentPage,
      // url,
      // currentLanguage,
      pages,
    } = props;

    return (
      <div className="pageSeo">

        <Tabs type="card">
          <Tabs.TabPane tab="Seo" key="1">
            <GoogleControl
              currentPage={currentPage}
              pages={pages}

              image={props.image}

              title={props.title}
              description={props.description}
              focusKeyword={props.focusKeyword}

              updateTitle={props.updateTitle}
              updateDescription={props.updateDescription}
              updateFocusKeyword={props.updateFocusKeyword}
              rowFormItemLayout={rowFormItemLayout}

              // url={props.url}
              /*fullUrl={process.env.SEO_WIDGET_ADDRESS +
                '/' + currentRegion.externalId.toLowerCase() +
                '/' + currentLanguage.code.toLowerCase() +
                currentPage.url}*/
              // fullUrl={defaultUrl}
            />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Facebook" key="2">
            <FacebookControl
              // useSocialMetaForAll={props.useSocialMetaForAll}

              title={props.facebookTitle}
              publisher={props.facebookPublisher}
              description={props.facebookDescription}
              image={props.facebookImage}

              updateTitle={props.updateFacebookTitle}
              updatePublisher={props.updateFacebookPublisher}
              updateDescription={props.updateFacebookDescription}
              updateImage={props.updateFacebookImage}

              rowFormItemLayout={rowFormItemLayout}
              // actionUseSocialMetaForAll={props.actionUseSocialMetaForAll}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Twitter" key="3">
            <TwitterControl
              // useSocialMetaForAll={props.useSocialMetaForAll}

              title={props.twitterTitle}
              publisher={props.twitterPublisher}
              description={props.twitterDescription}
              image={props.twitterImage}

              updateTitle={props.updateTwitterTitle}
              updatePublisher={props.updateTwitterPublisher}
              updateDescription={props.updateTwitterDescription}
              updateImage={props.updateTwitterImage}

              rowFormItemLayout={rowFormItemLayout}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Google+" key="4">
            <GooglePlusControl
              // useSocialMetaForAll={props.useSocialMetaForAll}

              title={props.googlePlusTitle}
              publisher={props.googlePlusPublisher}
              image={props.googlePlusImage}

              updateTitle={props.updateGooglePlusTitle}
              updatePublisher={props.updateGooglePlusPublisher}
              updateImage={props.updateGooglePlusImage}

              rowFormItemLayout={rowFormItemLayout}
            />
          </Tabs.TabPane>
        </Tabs>
        <Row style={{marginBottom: '35px'}}>
          <Col span={3} push={21}>
            <div style={{width: '100%'}}>
              {/*<SaveSeoButton loading={loading} stayOnPage={true} text={'Save page settings'} />*/}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SeoSettings;
