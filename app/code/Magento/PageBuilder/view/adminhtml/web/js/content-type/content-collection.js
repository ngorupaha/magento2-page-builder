/*eslint-disable */
define(["Magento_PageBuilder/js/content-type/content"], function (_content) {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  var ContentCollection =
  /*#__PURE__*/
  function (_BaseContent) {
    _inheritsLoose(ContentCollection, _BaseContent);

    function ContentCollection() {
      return _BaseContent.apply(this, arguments) || this;
    }

    _createClass(ContentCollection, [{
      key: "renderChildTemplate",

      /**
       * Retrieve the child template
       *
       * @returns {string}
       */
      get: function get() {
        return "Magento_PageBuilder/content-type/master-collection";
      }
    }]);

    return ContentCollection;
  }(_content);

  return ContentCollection;
});
//# sourceMappingURL=content-collection.js.map