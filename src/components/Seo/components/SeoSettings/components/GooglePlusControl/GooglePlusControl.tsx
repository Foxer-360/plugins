import React from 'react';
import { ILooseObject } from '@source/types';
import { Col, Form, Input, Row } from 'antd';
import GooglePlusSnippet from '../partials/GooglePlusSnippet';

const placeholder = 'https://www.collaboraoffice.com/wp-content/' +
  'plugins/post-grid/assets/frontend/css/images/placeholder.png';

interface IGooglePlusControlProps {
  image: string;
  title: string;
  publisher: string;
  url?: string;
  updateSeoField: (value: ILooseObject) => void;
  rowFormItemLayout: ILooseObject;
}

class GooglePlusControl extends React.Component<IGooglePlusControlProps> {

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
            <h2>Social media - Google+</h2>

            <Form.Item {...this.props.rowFormItemLayout} label="Publisher">
              <Input 
                value={this.props.publisher} 
                onChange={(e: ILooseObject) => updateSeoField({ googlePlusPublisher: e.target.value })}
              />
            </Form.Item>

            <Form.Item {...this.props.rowFormItemLayout} label="Title">
              <Input 
                value={this.props.title} 
                onChange={(e: ILooseObject) => updateSeoField({ googlePlusTitle: e.target.value })}
              />
            </Form.Item>

            {/*<Form.Item {...this.props.rowFormItemLayout} label="Image">
               <div className="pageSeo__socialPhotoWrap">
                  <MediaLibrary updateComponent={ this.props.updateImage } selectedMedia={{ url : this.props.image }} />
               </div>
            </Form.Item>*/}
          </Col>

          <Col span={12}>
            <GooglePlusSnippet {...this.gatherGooglePlusData(this.props)} />
          </Col>
        </Row>
      </div>
    );
  }

  private gatherGooglePlusData(props: IGooglePlusControlProps) {
    return {
      image: props.image ? props.image : placeholder,
      title: props.title,
      url: props.url
    };
  }
}

export default GooglePlusControl;
