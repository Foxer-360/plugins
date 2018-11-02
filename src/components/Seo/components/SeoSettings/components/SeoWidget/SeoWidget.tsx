import React, { Component } from 'react';
import axios from 'axios';
import { ILooseObject } from '@source/types';
import striptags from 'striptags';

interface ISeoWidgetProps {
  title?: string;
  description?: string;
  duplicated: boolean;
  focusKeyword?: string;
  fullUrl?: string;
  pagesWithSameKeyword?: ILooseObject[];
}

interface ISeoWidgetState {
  pageContent: Document | null;
  checkArticlesContent: boolean;
  checkAltTags: boolean;
}

class SeoWidget extends Component<ISeoWidgetProps, ISeoWidgetState> {

  constructor(props: ISeoWidgetProps) {
    super(props);

    this.state = {
      checkAltTags: false,
      checkArticlesContent: false,
      pageContent: null,
    };
  }

  public componentDidMount() {
    this.getPageContent();
  }

  public componentWillReceiveProps(nextProps: ISeoWidgetProps) {
    if (this.state.pageContent && nextProps.focusKeyword && nextProps.focusKeyword.length > 0) {
      const { focusKeyword } = nextProps;

      const pageContent = this.state.pageContent;

      // Check AltTags
      const images = Array.from(pageContent.getElementsByTagName('img'));
      for (let i = 0; i < images.length; i++) {
        this.setState({
          checkAltTags: images[i].alt.toLowerCase().includes(focusKeyword.toLowerCase()),
        });
      }

      // Check content
      if (focusKeyword.length > 0
        && (striptags(pageContent.body.innerHTML).split('sitewindow')[0])
          .toLowerCase().includes(focusKeyword.toLowerCase())) {
        this.setState({
          checkArticlesContent: true,
        });
      } else {
        this.setState({
          checkArticlesContent: false,
        });
      }
    }
  }

  public render() {
    const { 
      title,
      description,
      fullUrl,
      // currentRegion,
      // currentWebsite
    } = this.props;

    const start = 'The focus keyword';

    return (
      <div>
        <ul className="seoWidget">
          <li>
            <span className={`circle ${title && this.checkValueIncludes(title) ? 'green' : 'red'}`} />
            {`${start} ${title && this.checkValueIncludes(title) ? 'IS' : 'is NOT'} on the title of the page.`}
          </li>
          <li>
            <span className={`circle ${fullUrl && this.checkValueIncludes(fullUrl) ? 'green' : 'red'}`} />
            {`${start} ${fullUrl && this.checkValueIncludes(fullUrl) ? 'IS' : 'is NOT'} in the URL of the page.`}
          </li>
          <li>
            <span className={`circle ${this.state.checkArticlesContent ? 'green' : 'red'}`} />
            {`${start} ${this.state.checkArticlesContent ? 'IS' : 'is NOT'} on the content of the article.`}
          </li>
          <li>
            <span className={`circle ${description && this.checkValueIncludes(description) ? 'green' : 'red'}`} />
            {`${start} ${description && this.checkValueIncludes(description)
              ? 'IS' : 'is NOT'} on the meta description.`}
          </li>
          <li>
            <span className={`circle ${description && this.checkValueLength(description) ? 'green' : 'red'}`} />
            {`The length of the meta description ${description && this.checkValueLength(description)
              ? 'IS' : 'is NOT'} sufficient.`}
          </li>
          <li>
            <span className={`circle ${this.state.checkAltTags ? 'green' : 'red'}`} />
            {`${start} ${this.state.checkAltTags ? 'IS' : 'is NOT'} on the alt tag of the images.`}
          </li>
          <li>
            <span
              className={`circle ${this.props.pagesWithSameKeyword && this.props.pagesWithSameKeyword.length === 0
                ? 'green' : 'red'}`}
            />
            {`${this.props.pagesWithSameKeyword && this.props.pagesWithSameKeyword.length === 0
              ? 'You\'ve never used this keyword before, very good.'
              : 'You\'ve used this keyword before in these pages:'}`}
              <ul>
                {this.props.pagesWithSameKeyword &&
                  this.props.pagesWithSameKeyword.map((p: any) => (
                    <li>
                      {/*/page/${currentRegion.id}/${currentWebsite.id}/${p.langId}/${p.structureId}`*/}
                      <a href="">
                        {p.name}
                      </a>
                    </li>))}
              </ul>
          </li>
        </ul>
      </div>
    );
  }

  private checkValueIncludes(value: string) {
    if (this.props.focusKeyword) {
      const keyword = this.props.focusKeyword.toLowerCase();
      if (keyword.length > 0) {
        return value && value.toLowerCase().includes(keyword);
      }
    }

    return false;
  }

  private checkValueLength(value: string) {
    return value.length !== 0 && value.length <= 160;
  }

  private getPageContent = () => {
    const url = this.props.fullUrl;
    const parser = new DOMParser();

    if (!url) {
      return null;
    }

    return axios.get(url)
      .then((response: any) => {
        this.setState({
          pageContent: parser.parseFromString(response.data, 'text/html'),
        });
      })
      .catch((error: any) => {
        // console.log('PAGE CONTENT URL ERROR:', error);
      });
  }
}

export default SeoWidget;
