import * as React from 'react';
// import { adopt } from 'react-adopt';
// import { Query } from 'react-apollo';
// import { queries } from '@source/services/graphql';
import SeoForm from './components/SeoForm';
import { adopt } from 'react-adopt';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';



const GET_SEO_PLUGIN_DATA = gql`
  query getSeoPluginData($pageId: !ID, $languageCode: !String) {
    pagePlugins(where: { AND: [{page: { id: $pageId } }, {language: { code: $languageCode }}] }) {
      id
      page
      language
      plugin
      content
    }
  }
`;

export const SAVE_PAGE_PLUGIN = gql`
    mutation savePagePlugin(
        $page: ID,
        $language: ID,
        $plugin: String!,
        $content: Json,
    ) {
        savePagePlugin(
            data: {
                page: {
                    connect: {
                        id: $page
                    }
                },
                language: {
                    connect: {
                        id: $language
                    }
                },
                plugin: $plugin,
                content: $content
            }
        ) {
            id
            plugin
            content
        }
    }
`;

const ComposedQuery = adopt({
  getSeoByPageAndLanguage: ({ render }) => (
    <Query>
      {({ data }) => render(data)}
    </Query>
  ),
  savePagePlugin: ({ render }) => (
    <Mutation> {
      {({ data }) => render(data)}
    }}</Mutation>
  )
});

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
      <ComposedQuery>
        {({ savePagePlugin, }) => {
        
          
          return (<SeoForm
            {...this.props}
            page={null} // data.page}
            language={null} // data.language}
            loading={this.props.loading}
            data={null} // pluginData}
            pages={this.state.pages}
            onChangeData={(seoData: any) => this.handleChange(seoData)}
            useSocialMetaForAll={true}
          />);
        
        }}
      </ComposedQuery>);

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
