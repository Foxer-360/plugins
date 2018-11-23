import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import { ILooseObject } from '@source/types';

import GoogleSnippet from '../partials/GoogleSnippet';
import SeoWidget from '../SeoWidget';

const placeholder = 'https://www.collaboraoffice.com/wp-content/' +
  'plugins/post-grid/assets/frontend/css/images/placeholder.png';

interface IGoogleControlProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  fullUrl?: string;
  focusKeyword?: string;
  updateSeoField: (value: ILooseObject) => void;
  rowFormItemLayout: ILooseObject;
}

class GoogleControl extends React.Component<IGoogleControlProps> {

  public static defaultProps = {
    image: placeholder,
    url: 'https://www.koh-i-noor.cz/',
  };

  public render() {
    const {
      seoData
    } = this.props;

    return (
      <div>
        <h2>SEO meta information</h2>
        <Row>
          <Col span={12} md={24} lg={12}>

            <Form.Item {...rowFormItemLayout} label="Title">
              <Input defaultValue={seoData.title} onChange={(e: any) => this.props.updateTitle(e.target.value)} />
            </Form.Item>

            <Form.Item {...rowFormItemLayout} label="Description">
              <Input defaultValue={seoData.description} onChange={(e: any) => this.props.updateDescription(e.target.value)} />
            </Form.Item>

            <Form.Item {...rowFormItemLayout} label="Focus keyword">
              <Input defaultValue={seoData.focusKeyword} onChange={(e: any) => this.props.updateFocusKeyword(e.target.value)} />
            </Form.Item>

            <Form.Item>
              <SeoWidget
                title={seoData.title}
                description={seoData.description || ''}
                duplicated={false}
                focusKeyword={seoData.focusKeyword || ''}
                fullUrl={seoData.fullUrl}
                pagesWithSameKeyword={[]}
              />
            </Form.Item>
          </Col>

          <Col span={12} md={24} lg={12}>
            <GoogleSnippet {...this.gatherGoogleData(this.props)} />
          </Col>
        </Row>
      </div>
    );
  }

  private gatherGoogleData(props: IGoogleControlProps) {
    return {
      description: props.description,
      image: props.image ? props.image : placeholder,
      title: props.title,
      url: props.url,
    };
  }
}

export default GoogleControl;
