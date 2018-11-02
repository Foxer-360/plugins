var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

import gql from 'graphql-tag';
var WEBSITE_QUERY = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query website($website: ID!) {\n    website(\n      where: {\n        id: $website\n      }\n    ) {\n      id\n      languages {\n        id\n        code\n        name\n        isEnabled\n      }\n    }\n  }\n"], ["\n  query website($website: ID!) {\n    website(\n      where: {\n        id: $website\n      }\n    ) {\n      id\n      languages {\n        id\n        code\n        name\n        isEnabled\n      }\n    }\n  }\n"])));

var Languages =
/** @class */
function () {
  function Languages(context, config, client) {
    var _this = this;

    this.context = context;
    this.client = client;
    this.listeners = [];
    this.context.writeProperty('languages', null); // Add listeners on context

    var id = this.context.addListener('language', function () {
      _this.resolveNavigations();
    });
    this.listeners.push(id);
    id = this.context.addListener('website', function () {
      _this.resolveNavigations();
    });
    this.listeners.push(id);
    this.resolveNavigations();
  }

  Languages.prototype.resetPlugin = function (context, config) {
    var _this = this;

    this.listeners.forEach(function (lId) {
      _this.context.removeListener(lId);
    });
    this.context = context;
    this.context.writeProperty('languages', null);
    var id = this.context.addListener('language', function () {
      _this.resolveNavigations();
    });
    this.listeners.push(id);
    id = this.context.addListener('website', function () {
      _this.resolveNavigations();
    });
    this.listeners.push(id);
    this.resolveNavigations();
  };

  Languages.prototype.writeConfig = function (config) {
    this.context.writeProperty('languages', null);
    this.resolveNavigations();
  };

  Languages.prototype.resolveNavigations = function () {
    var _this = this;

    if (!this.client) {
      return;
    }

    var website = this.context.readProperty('website');

    if (!website) {
      return;
    }

    var language = this.context.readProperty('language');

    if (!language) {
      return;
    }

    this.client.query({
      query: WEBSITE_QUERY,
      variables: {
        website: website
      }
    }).then(function (dataWebsite) {
      var contextLanguages = {};

      if (dataWebsite && dataWebsite.data && dataWebsite.data.website && dataWebsite.data.website.languages) {
        dataWebsite.data.website.languages.forEach(function (lang) {
          contextLanguages[lang.code] = lang;
        });
      }

      _this.context.writeProperty('languages', contextLanguages);
    });
  };

  return Languages;
}();

export default Languages;
var templateObject_1;