/*eslint-disable */
define(["Magento_PageBuilder/js/component/loader", "../config", "./converter-pool"], function (_loader, _config, _converterPool) {
  /**
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */

  /**
   * Create a new instance of converter pool
   */
  function create(contentType) {
    var config = _config.getContentType(contentType);

    var converters = [];

    for (key in config.appearances) {
      var dataMapping = config.appearances[key].data_mapping;

      if (dataMapping !== undefined && dataMapping.elements !== undefined) {
        for (var elementName in dataMapping.elements) {
          if (dataMapping.elements[elementName].style !== undefined) {
            for (var i = 0; i < dataMapping.elements[elementName].style.length; i++) {
              var styleProperty = dataMapping.elements[elementName].style[i];

              if (!!styleProperty.converter && converters.indexOf(styleProperty.converter) === -1 && !_converterPool.get(styleProperty.converter)) {
                converters.push(styleProperty.converter);
              }

              if (!!styleProperty.preview_converter && converters.indexOf(styleProperty.preview_converter) === -1 && !_converterPool.get(styleProperty.preview_converter)) {
                converters.push(styleProperty.preview_converter);
              }
            }
          }

          if (dataMapping.elements[elementName].attributes !== undefined) {
            for (var _i = 0; _i < dataMapping.elements[elementName].attributes.length; _i++) {
              var attributeProperty = dataMapping.elements[elementName].attributes[_i];

              if (!!attributeProperty.converter && converters.indexOf(attributeProperty.converter) === -1 && !_converterPool.get(attributeProperty.converter)) {
                converters.push(attributeProperty.converter);
              }

              if (!!attributeProperty.preview_converter && converters.indexOf(attributeProperty.preview_converter) === -1 && !_converterPool.get(attributeProperty.preview_converter)) {
                converters.push(attributeProperty.preview_converter);
              }
            }
          }
        }
      }
    }

    return new Promise(function (resolve) {
      (0, _loader)(converters, function () {
        for (var _len = arguments.length, loadedConverters = new Array(_len), _key = 0; _key < _len; _key++) {
          loadedConverters[_key] = arguments[_key];
        }

        for (var _i2 = 0; _i2 < converters.length; _i2++) {
          _converterPool.register(converters[_i2], new loadedConverters[_i2]());
        }

        resolve(_converterPool);
      });
    });
  }

  return create;
});
//# sourceMappingURL=converter-pool-factory.js.map