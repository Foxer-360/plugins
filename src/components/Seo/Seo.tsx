import * as React from 'react';
import SeoForm from './components/SeoForm';
import { adopt } from 'react-adopt';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

const GET_CONTEXT = gql`
{
  page @client
  language @client
}
`;

const GET_SEO_PLUGIN_DATA = gql`
  query getSeoPluginData($page: ID!, $language: ID!) {
    pagePlugins(where: { AND: [{page: { id: $page } }, {language: { id: $language }}] }) {
      id
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
  getContext: ({ render }) => (
    <Query query={GET_CONTEXT} >
      {({ data }) => render(data)}
    </Query>
  ),
  getSeoByPageAndLanguage: ({ render, getContext: { page, language } }) => (
    <Query query={GET_SEO_PLUGIN_DATA} variables={{ page, language }}>
      {({ data }) => {
        return render(data);
      }}
    </Query>
  ),
  savePagePlugin: ({ render }) => (
    <Mutation mutation={SAVE_PAGE_PLUGIN}>
      {(savePagePlugin) => render(savePagePlugin)}
    </Mutation>
  )
});

interface ISeoProps {
  currentPage: string;
  onChange: (data: any) => void;
  initData: any;
  loading: boolean;
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

class Seo extends React.Component<ISeoProps, any> {

  constructor(props: ISeoProps) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
      <ComposedQuery>
        {({ savePluginData, getSeoByPageAndLanguage }) => {

          return (<SeoForm
            {...this.props}
            page={null} // data.page}
            language={null} // data.language}
            loading={this.props.loading}
            data={(getSeoByPageAndLanguage.length > 0 && getSeoByPageAndLanguage[0]) || null} // pluginData}
            pages={this.state.pages}
            onChangeData={(seoData: any) => this.handleChange(seoData)}
            useSocialMetaForAll={true}
          />);
        }}
      </ComposedQuery>);
  }

  private handleChange(data: any) {
      this.setState({...data});
  }
}

export default Seo;
