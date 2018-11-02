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

  currentPage: string | null; // "| null" odstranit
  pages?: ILooseObject[];

  focusKeyword?: string;

  updateTitle: (value: string) => void;
  updateDescription: (value: string) => void;
  updateFocusKeyword: (value: string) => void;

  rowFormItemLayout: ILooseObject;
}

class GoogleControl extends React.Component<IGoogleControlProps> {

  public static defaultProps = {
    image: placeholder,
    url: 'https://www.koh-i-noor.cz/',
  };

  public render() {
    const {
      // actionUseMetaForAll,
      // currentPage,
      description,
      focusKeyword,
      fullUrl,
      rowFormItemLayout,
      title,
      // pages,
    } = this.props;

    /*const pagesWithSameKeyword = pages.filter((p: LooseObject) =>
      p.seo.focusKeyword && 
      focusKeyword &&
      p.seo.focusKeyword.toLowerCase().trim() === focusKeyword.toLowerCase().trim() &&
      p.id !== currentPage.id);*/

    return (
      <div>
        <h2>SEO meta information</h2>
        <Row>
          <Col span={12} md={24} lg={12}>

            <Form.Item {...rowFormItemLayout} label="Title">
              <Input defaultValue={title} onChange={(e: any) => this.props.updateTitle(e.target.value)} />
            </Form.Item>

            <Form.Item {...rowFormItemLayout} label="Description">
              <Input defaultValue={description} onChange={(e: any) => this.props.updateDescription(e.target.value)} />
            </Form.Item>

            <Form.Item {...rowFormItemLayout} label="Focus keyword">
              <Input defaultValue={focusKeyword} onChange={(e: any) => this.props.updateFocusKeyword(e.target.value)} />
            </Form.Item>

            <Form.Item>
              <SeoWidget
                title={title}
                description={description || ''}
                duplicated={false}
                focusKeyword={focusKeyword || ''}
                fullUrl={fullUrl}
                pagesWithSameKeyword={[]} // pagesWithSameKeyword}
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

  /*private isReady(props: IGoogleControlProps) {
    return props.description && props.title;
  }*/

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
