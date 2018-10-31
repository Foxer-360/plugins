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

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

import gql from 'graphql-tag';
var NAVIGATION_QUERY = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query navigations($website: ID!) {\n    navigations(\n      where: {\n        website: {\n          id_in: [$website]\n        }\n      }\n    ) {\n      name\n      nodes {\n        page\n        title\n        link\n        order\n        parent\n      }\n    }\n  }\n"], ["\n  query navigations($website: ID!) {\n    navigations(\n      where: {\n        website: {\n          id_in: [$website]\n        }\n      }\n    ) {\n      name\n      nodes {\n        page\n        title\n        link\n        order\n        parent\n      }\n    }\n  }\n"])));
var GET_PAGES_URLS = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query pagesUrls($ids: [ID], $language: ID!) {\n    pagesUrls(\n      where: {\n        ids: $ids\n        language: $language\n      }\n    ) {\n      id\n      page\n      url\n      name\n    }\n  }\n"], ["\n  query pagesUrls($ids: [ID], $language: ID!) {\n    pagesUrls(\n      where: {\n        ids: $ids\n        language: $language\n      }\n    ) {\n      id\n      page\n      url\n      name\n    }\n  }\n"])));

var Navigations =
/** @class */
function () {
  function Navigations(context, config, client) {
    var _this = this;

    this.context = context;
    this.client = client;
    this.listeners = [];
    this.context.writeProperty('navigations', null); // Add listeners on context

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

  Navigations.prototype.resetPlugin = function (context, config) {
    var _this = this;

    this.listeners.forEach(function (lId) {
      _this.context.removeListener(lId);
    });
    this.context = context;
    this.context.writeProperty('navigations', null);
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

  Navigations.prototype.writeConfig = function (config) {
    this.context.writeProperty('navigations', null);
    this.resolveNavigations();
  };

  Navigations.prototype.resolveNavigations = function () {
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
      query: NAVIGATION_QUERY,
      variables: {
        website: website
      }
    }).then(function (navigations) {
      var listOfPages = [];
      navigations.data.navigations.forEach(function (nav) {
        nav.nodes.forEach(function (node) {
          var index = listOfPages.indexOf(node.page);

          if (index > -1) {
            return;
          }

          if (node.page) {
            listOfPages.push(node.page);
          }
        });
      }); // tslint:disable-next-line:no-console

      console.log('listOfPages', listOfPages);
      return Promise.all([Promise.resolve(navigations.data.navigations), _this.client.query({
        query: GET_PAGES_URLS,
        variables: {
          ids: listOfPages,
          language: language
        }
      })]);
    }).then(function (res) {
      var navigations = res[0];

      if (!res[1].data || !res[1].data.pagesUrls) {
        return;
      }

      var urls = res[1].data.pagesUrls;

      var transformed = _this.transformNavigationsIntoTree(navigations, urls);

      _this.context.writeProperty('navigations', transformed);
    });
  };

  Navigations.prototype.transformNavigationsIntoTree = function (navigation, urls) {
    var _this = this;

    var tree = {};

    if (!navigation || navigation.length < 1) {
      return null;
    }

    navigation.forEach(function (nav) {
      tree[nav.name] = _this.buildNavTree(nav.nodes, null, urls);
    });
    return tree;
  };

  Navigations.prototype.buildNavTree = function (nav, parent, urls) {
    var _this = this;

    var res = [];
    nav.forEach(function (node) {
      if (node.parent === parent) {
        var url = urls.find(function (u) {
          return u.page === node.page;
        });

        var item = __assign({}, node, url);

        if (node.page) {
          var children = _this.buildNavTree(nav, node.page, urls);

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
    res.sort(function (a, b) {
      return a.order - b.order;
    });
    return res;
  };

  return Navigations;
}();

export default Navigations;
var templateObject_1, templateObject_2;