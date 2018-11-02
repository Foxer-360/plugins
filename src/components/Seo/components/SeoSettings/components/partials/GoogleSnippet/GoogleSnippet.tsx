import React from 'react';

// import './styles.css';

interface IGoogleSnippetProps {
  title?: string;
  url?: string;
  description?: string;
}

class GoogleSnippet extends React.Component<IGoogleSnippetProps> {
  public render() {
    return (
      <div className="c-googleSnippet">
        <div className="c-googleSnippet__title">
          <a href="#">{this.props.title}</a>
        </div>
        <div className="c-googleSnippet__url">
          {this.props.url}
        </div>
        <div className="c-googleSnippet__text">
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default GoogleSnippet;
