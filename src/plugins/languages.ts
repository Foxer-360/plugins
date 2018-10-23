import { ILooseObject } from '@source/types';
import gql from 'graphql-tag';

type Context = any; // tslint-disable-line:no-any

const WEBSITE_QUERY = gql`

  query website($website: ID!) {
    website(
      where: {
        id: $website
      }
    ) {
      id
      languages {
        id
        code
        name
        isEnabled
      }
    }
  }
`;

class Languages {

  private context: Context;

  private client: any; // tslint:disable-line:no-any

  private listeners: string[];

  constructor(context: Context, config?: {}, client?: any) { // tslint:disable-line:no-any
    this.context = context;
    this.client = client;
    this.listeners = [] as string[];
    this.context.writeProperty('languages', null);

    // Add listeners on context
    let id = this.context.addListener('language', () => {
      this.resolveNavigations();
    });
    this.listeners.push(id);
    id = this.context.addListener('website', () => {
      this.resolveNavigations();
    });
    this.listeners.push(id);

    this.resolveNavigations();
  }

  public resetPlugin(context: Context, config?: {}) {
    this.listeners.forEach((lId: string) => {
      this.context.removeListener(lId);
    });

    this.context = context;
    this.context.writeProperty('languages', null);

    let id = this.context.addListener('language', () => {
      this.resolveNavigations();
    });
    this.listeners.push(id);
    id = this.context.addListener('website', () => {
      this.resolveNavigations();
    });
    this.listeners.push(id);

    this.resolveNavigations();
  }

  public writeConfig(config: ILooseObject) {
    this.context.writeProperty('languages', null);
    this.resolveNavigations();
  }

  private resolveNavigations() {
    if (!this.client) {
      return;
    }
    const website = this.context.readProperty('website');
    if (!website) {
      return;
    }
    const language = this.context.readProperty('language');
    if (!language) {
      return;
    }

    this.client.query({ query: WEBSITE_QUERY, variables: { website } })
      .then((dataWebsite: ILooseObject) => {

        const contextLanguages = {};

        if (dataWebsite
          && dataWebsite.data
          && dataWebsite.data.website
          && dataWebsite.data.website.languages
        ) {
          dataWebsite.data.website.languages.forEach((lang: ILooseObject) => {
            contextLanguages[lang.code] = lang;
          });
        }

        this.context.writeProperty('languages', contextLanguages);
      });
  }
}

export default Languages;