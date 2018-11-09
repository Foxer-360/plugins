/*const WEBSITE_QUERY = gql`
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
`;*/
var Seo =
/** @class */
function () {
  // private client: any; // tslint:disable-line:no-any
  // private listeners: string[];
  function Seo(context, config, client) {
    this.context = context;
    /*this.client = client;
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
         this.resolveNavigations();*/
  }

  Seo.prototype.resetPlugin = function (context, config) {
    /*this.listeners.forEach((lId: string) => {
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
         this.resolveNavigations();*/
  };

  Seo.prototype.writeConfig = function (config) {
    this.context.writeProperty('languages', null); // this.resolveNavigations();
  };

  return Seo;
}();

export default Seo;