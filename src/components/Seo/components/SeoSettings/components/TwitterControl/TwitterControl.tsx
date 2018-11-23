import React, { Component } from 'react';
import { Col, Form, Input, Row } from 'antd';
import { ILooseObject } from '@source/types';
import TwitterSnippet from '../partials/TwitterSnippet';

const placeholder = 'https://www.collaboraoffice.com/wp-content/' +
  'plugins/post-grid/assets/frontend/css/images/placeholder.png';

interface ITwitterControlProps {
  image: string;
  title: string;
  description: string;
  publisher: string;

  updateSeoField: (value: ILooseObject) => void;

  rowFormItemLayout: ILooseObject;
}

class TwitterControl extends Component<ITwitterControlProps> {

  public static defaultProps = {
    image: placeholder,
    url: 'https://www.koh-i-noor.cz/',
  };

  public render() {
    const { updateSeoField } = this.props;
    return (
      <div>
        <Row>
          <Col span={12}>
            <h2>Social media - Twitter</h2>

            <Form.Item {...this.props.rowFormItemLayout} label="Publisher">
              <Input value={this.props.publisher} onChange={(e: any) => updateSeoField({ twitterPublisher: e.target.value })} />
            </Form.Item>

            <Form.Item {...this.props.rowFormItemLayout} label="Title">
              <Input value={this.props.title} onChange={(e: any) => updateSeoField({ twitterTitle: e.target.value })} />
            </Form.Item>

            <Form.Item {...this.props.rowFormItemLayout} label="Description">
              <Input
                type="textarea"
                value={this.props.description}
                onChange={(e: any) => updateSeoField({ twitterDescription: e.target.value })}
              />
            </Form.Item>

            {/*<Form.Item {...this.props.rowFormItemLayout} label="Image">
              <div className="pageSeo__socialPhotoWrap">
                <MediaLibrary updateComponent={this.props.updateImage} selectedMedia={{ url : this.props.image }} />
              </div>
            </Form.Item>*/}
          </Col>

          <Col span={12}>
            <TwitterSnippet {...this.gatherTwitterData(this.props)} />
          </Col>
        </Row>
      </div>
    );
  }

  /*private isReady(props: ITwitterControlProps) {
    if (props.image && props.title && props.description) {
      return true;
    }

    return false;
  }*/

  private gatherTwitterData(props: ITwitterControlProps) {
    return {
      image: props.image ? props.image : placeholder,
      text: props.description,
      title: props.title,
    };
  }
}

export default TwitterControl;
