var List =
/** @class */
function () {
  function List(context, config) {
    if (!config) {
      this.config = {
        list: ''
      };
    } else {
      this.config = config;
    }

    this.context = context;
    this.context.writeProperty('list', this.config.list.split(','));
  }

  List.prototype.writeConfig = function (config) {
    this.config = config;
    this.context.writeProperty('list', this.config.list.split(','));
  };

  return List;
}();

export default List;