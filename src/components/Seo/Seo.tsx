import * as React from 'react';
// import { adopt } from 'react-adopt';
// import { Query } from 'react-apollo';
// import { queries } from '@source/services/graphql';
import SeoForm from './components/SeoForm';

// import './styles.css';

/*const PagePluginQuery = adopt({
  language: ({ render }) => (
    <Query query={queries.LOCAL_SELECTED_LANGUAGE}>
      {({ data: { language } }) => {
        return render(language);
      }}
    </Query>
  ),
  page: ({ render }) => (
    <Query query={queries.LOCAL_SELECTED_PAGE}>
      {({ data: { page }}) => {
        return render(page);
      }}
    </Query>
  ),
  plugin: ({ page, language, render }) => (
    <Query
      query={queries.PAGE_PLUGINS}
      variables={{ page, language, plugin: 'seo' }}
    >
      {({ loading, data: { pagePlugins }, error }) => {
        if (loading || error) {
          return render(loading);
        }

        let plugin: {} = null;

        pagePlugins.forEach((pagePlugin: LooseObject) => {
          if (plugin === null) {
            if (pagePlugin.language && pagePlugin.language.id === language && pagePlugin.content) {
              plugin = pagePlugin;
            }
          }
        });

        return render(plugin);
      }}
    </Query>
  )
});*/

interface ISeoProps {
  currentPage: string;
  onChange: (data: any) => void;
  initData: any;
  loading: boolean;
}

interface ISeoState {
  pages: any[];
}

export interface ISeoPluginData {
  title: string;
  description: string;
  focusKeyword: string;
  url: string;
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
}

class Seo extends React.Component<ISeoProps, ISeoState> {

  constructor(props: ISeoProps) {
    super(props);

    this.state = {
      pages: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
      <SeoForm
        {...this.props}
        page={null} // data.page}
        language={null} // data.language}
        loading={this.props.loading}
        data={null} // pluginData}
        pages={this.state.pages}
        onChangeData={(seoData: any) => this.handleChange(seoData)}
        useSocialMetaForAll={true}
      />);

      /*<PagePluginQuery>
        {(data: any) => {
          const pluginData = (data && data.plugin && data.plugin.content ? data.plugin.content : null);

          });
        }}
      </PagePluginQuery>*/
  }

  private handleChange(data: any) {
    if (this.props.onChange) {
      this.props.onChange(data);
    }
  }
}

export default Seo;
