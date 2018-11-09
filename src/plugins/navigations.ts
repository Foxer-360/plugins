import { ILooseObject } from '@source/types';
import gql from 'graphql-tag';

type Context = any; // tslint-disable-line:no-any

const NAVIGATION_QUERY = gql`
  query navigations($website: ID!) {
    navigations(
      where: {
        website: {
          id_in: [$website]
        }
      }
    ) {
      id
      name
      nodes {
        id
        page
        title
        link
        order
        parent
      }
    }
  }
`;

const GET_PAGES_URLS = gql`
  query pagesUrls($ids: [ID], $language: ID!) {
    pagesUrls(
      where: {
        ids: $ids
        language: $language
      }
    ) {
      id
      page
      url
      name
      description
    }
  }
`;

class Navigations {

  private context: Context;

  private client: any; // tslint:disable-line:no-any

  private listeners: string[];

  constructor(context: Context, config?: {}, client?: any) { // tslint:disable-line:no-any
    this.context = context;
    this.client = client;
    this.listeners = [] as string[];
    this.context.writeProperty('navigations', null);

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
    this.context.writeProperty('navigations', null);

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
    this.context.writeProperty('navigations', null);
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

    this.client.query({ query: NAVIGATION_QUERY, variables: { website } })
      .then((navigations: ILooseObject) => {
        const listOfPages = [] as string[];
        navigations.data.navigations.forEach((nav: ILooseObject) => {
          nav.nodes.forEach((node: ILooseObject) => {
            const index = listOfPages.indexOf(node.page);
            if (index > -1) {
              return;
            }
            if (node.page) {
              listOfPages.push(node.page);
            }
          });
        });

        return Promise.all([
          Promise.resolve(navigations.data.navigations),
          this.client.query({ query: GET_PAGES_URLS, variables: { ids: listOfPages, language } })
        ]);
      })
      .then((res: ILooseObject[]) => {
        const navigations = res[0] as ILooseObject[];
        if (!res[1].data || !res[1].data.pagesUrls) {
          return;
        }
        const urls = res[1].data.pagesUrls;
        const transformed = this.transformNavigationsIntoTree(navigations, urls);

        this.context.writeProperty('navigations', transformed);
      });
  }

  private transformNavigationsIntoTree(navigation: ILooseObject[], urls: ILooseObject[]): ILooseObject | null {
    const tree = {};

    if (!navigation || navigation.length < 1) {
      return null;
    }

    navigation.forEach((nav: ILooseObject) => {
      tree[nav.name] = this.buildNavTree(nav.nodes, null, urls);
    });

    return tree;
  }

  private buildNavTree(nav: ILooseObject[], parent: string | null, urls: ILooseObject[]): ILooseObject[] {
    const res = [] as ILooseObject[];

    nav.forEach((node: ILooseObject) => {
      if (node.parent === parent) {
        const url = urls.find((u: ILooseObject) => u.page === node.page);
        const item = {
          ...node,
          ...url,
        } as ILooseObject;
        if (node.page) {
          const children = this.buildNavTree(nav, node.page, urls);
          if (children && children.length > 0) {
            item.children = children;
          }
        }
        if (node.title && node.link) {
          item.url = node.link;
        }

        res.push(item);
      }
    });

    res.sort((a: ILooseObject, b: ILooseObject) => a.order - b.order);
    return res;
  }

}

export default Navigations;
