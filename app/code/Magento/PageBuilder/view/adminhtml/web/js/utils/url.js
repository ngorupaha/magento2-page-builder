/*eslint-disable */
define([], function () {
    /**
     * Copyright © Magento, Inc. All rights reserved.
     * See COPYING.txt for license details.
     */

    /**
     * Check for whether url string contains only a path
     *
     * @param {string} url
     * @returns {boolean}
     */
    function isPathOnly (url) {
        return url.indexOf("/") === 0;
    }

    /**
     * Get the path from a URL
     *
     * @param {string} url
     * @returns {string}
     */
    function getPathFromUrl (url) {
        const a = document.createElement("a");

        a.href = url;

        return a.pathname;
    }

    return {
        getPathFromUrl: getPathFromUrl,
        isPathOnly: isPathOnly
    };
});
//# sourceMappingURL=array.js.map
