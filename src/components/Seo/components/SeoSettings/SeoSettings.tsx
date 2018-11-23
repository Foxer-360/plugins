import * as React from 'react';
import { Col, Row, Tabs, Button } from 'antd';

import FacebookControl from './components/FacebookControl';
import TwitterControl from './components/TwitterControl';
import GooglePlusControl from './components/GooglePlusControl';
import GoogleControl from './components/GoogleControl';

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
  useSocialMetaForAll: boolean;
}

class SeoSettings extends React.Component<ISeoSettingsProps> {

  public render() {
    const props = this.props;

    return (
      <div className="pageSeo">

        <Tabs type="card">
          <Tabs.TabPane tab="Seo" key="1">
            <GoogleControl
              image={props.image}
              title={props.title}
              description={props.description}
              focusKeyword={props.focusKeyword}
              updateSeoField={this.updateSeoField}
              rowFormItemLayout={rowFormItemLayout}
            />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Facebook" key="2">
            <FacebookControl
              title={props.facebookTitle}
              publisher={props.facebookPublisher}
              description={props.facebookDescription}
              image={props.facebookImage}
              updateSeoField={this.updateSeoField}
              rowFormItemLayout={rowFormItemLayout}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Twitter" key="3">
            <TwitterControl
              title={props.twitterTitle}
              publisher={props.twitterPublisher}
              description={props.twitterDescription}
              image={props.twitterImage}
              updateSeoField={this.updateSeoField}
              rowFormItemLayout={rowFormItemLayout}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Google+" key="4">
            <GooglePlusControl
              title={props.googlePlusTitle}
              publisher={props.googlePlusPublisher}
              image={props.googlePlusImage}
              updateSeoField={this.updateSeoField}
              rowFormItemLayout={rowFormItemLayout}
            />
          </Tabs.TabPane>
        </Tabs>
        <Row style={{marginBottom: '35px'}}>
          <Col span={3} push={21}>
            <div style={{width: '100%'}}>
              <Button>
                Save page settings
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  private updateSeoField(data: ILooseObject | null) {
    if (data) {
      this.setState(data);
    }
  }
}

export default SeoSettings;
