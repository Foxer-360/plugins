import React  from 'react';
import { ILooseObject } from '@source/types';
import { Col, Form, Input, Row } from 'antd';
// import MediaLibrary from 'components/MediaLibrary';
import FacebookSnippet from '../partials/FacebookSnippet';

const placeholder = 'https://www.collaboraoffice.com/wp-content/' +
  'plugins/post-grid/assets/frontend/css/images/placeholder.png';

interface IFacebookControlProps {
  image: string;
  title: string;
  description: string;
  publisher: string;
  url?: string;

  updateTitle: (value: string) => void;
  updatePublisher: (value: string) => void;
  updateDescription: (value: string) => void;
  updateImage: (value: string) => void;

  rowFormItemLayout: ILooseObject;
}

class FacebookControl extends React.Component<IFacebookControlProps> {

  public static defaultProps = {
    image: placeholder,
    url: 'https://www.koh-i-noor.cz/',
  };

  public render() {
    return (
      <div>
        <h2>Social media - Facebook</h2>
        <Row>
          <Col span={12}>
            <Form.Item {...this.props.rowFormItemLayout} label="Publisher">
              <Input value={this.props.publisher} onChange={(e: any) => this.props.updatePublisher(e.target.value)} />
            </Form.Item>

            <Form.Item {...this.props.rowFormItemLayout} label="Title">
              <Input value={this.props.title} onChange={(e: any) => this.props.updateTitle(e.target.value)} />
            </Form.Item>

            <Form.Item {...this.props.rowFormItemLayout} label="Description">
              <Input
                type="textarea"
                value={this.props.description}
                onChange={(e: any) => this.props.updateDescription(e.target.value)}
              />
            </Form.Item>

            {/*<Form.Item {...this.props.rowFormItemLayout} label="Image">
              <div className="pageSeo__socialPhotoWrap">

                <MediaLibrary updateComponent={this.props.updateImage} selectedMedia={{ url : this.props.image }} />
              </div>
            </Form.Item>*/}
          </Col>

          <Col span={12}>
            <FacebookSnippet {...this.gatherFacebookData(this.props)} />
          </Col>
        </Row>
      </div>
    );
  }

  /*private isReady(props: IFacebookControlProps) {
    if (props.image && props.title && props.description) {
      return true;
    }

    return false;
  }*/

  private gatherFacebookData(props: IFacebookControlProps) {
    return {
      author: props.publisher,
      description: props.description,
      image: props.image ? props.image : placeholder,
      title: props.title,
      url: props.url,
    };
  }
}

export default FacebookControl;
