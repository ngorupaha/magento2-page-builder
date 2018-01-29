/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import ko from "knockout";
import $t from "mage/translate";
import PreviewBlock from "./block";

export default class Banner extends PreviewBlock {

    public showOverlayHover: KnockoutObservable<boolean> = ko.observable(false);

    /**
     * Get the banner wrapper attributes for the preview
     *
     * @returns {any}
     */
    public getPreviewBannerAttributes() {
        let backgroundImage:string = "none";
        if (this.data.image() !== "" && this.data.image() !== undefined && this.data.image()[0] !== undefined) {
            backgroundImage = "url(" + this.data.image()[0].url + ")";
        }
        return {style: "background-image: " + backgroundImage + "; min-height: " + this.data.minimum_height() + "px; background-size: " + this.data.background_size() + ";"};
    }

    /**
     * Get the banner overlay attributes for the preview
     *
     * @returns {any}
     */
    public getPreviewOverlayAttributes() {
        let backgroundColor:string = this.data.show_overlay() === "always" || this.showOverlayHover() ? this.convertHexToRgba() : "transparent";
        return {style: "min-height: " + this.data.minimum_height() + "px; background-color: " + backgroundColor + ";"};
    }

    /**
     * Convert HEX to RGBA for transparent overlay for the preview
     *
     * @returns {string}
     */
    private convertHexToRgba() {
        if (this.data.overlay_color() !== "" && this.data.overlay_color() !== undefined) {
            let colors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.data.overlay_color()),
                red = parseInt(colors[1], 16),
                green = parseInt(colors[2], 16),
                blue = parseInt(colors[3], 16),
                alpha = this.convertPercentToDecimal(this.data.overlay_transparency());
            return "rgba(" + red + "," + green +"," + blue + "," + alpha + ")";
        } else {
            return "transparent";
        }
    }

    /**
     * Convert percent to decimal for transparent overlay for the preview
     *
     * @param {string} value
     * @returns {string}
     */
    private convertPercentToDecimal(value: string) {
        return (parseInt(value, 10) / 100).toString();
    }

    /**
     * Is there content in the WYSIWYG?
     *
     * @returns {boolean}
     */
    public isBannerEmpty():boolean {
        return this.data.message() === "" || this.data.message() === undefined ? true : false;
    }

    /**
     * Get the banner content attributes for the preview
     *
     * @returns {any}
     */
    public getPreviewContentAttributes() {
        if (this.data.margins_and_padding() !== "" && this.data.margins_and_padding() !== undefined) {
            const marginTop = this.data.margins_and_padding().margin.top || "0",
                  marginRight = this.data.margins_and_padding().margin.right || "0",
                  marginBottom = this.data.margins_and_padding().margin.bottom || "0",
                  marginLeft = this.data.margins_and_padding().margin.left || "0",
                  paddingTop = this.data.margins_and_padding().padding.top || "0",
                  paddingRight = this.data.margins_and_padding().padding.right || "0",
                  paddingBottom = this.data.margins_and_padding().padding.bottom || "0",
                  paddingLeft = this.data.margins_and_padding().padding.left || "0";
            return {
                style:
                    "margin-top: " + marginTop + "px; " +
                    "margin-right: " + marginRight + "px; " +
                    "margin-bottom: " + marginBottom + "px; " +
                    "margin-left: " + marginLeft + "px; " +
                    "padding-top: " + paddingTop + "px; " +
                    "padding-right: " + paddingRight + "px; " +
                    "padding-bottom: " + paddingBottom + "px; " +
                    "padding-left: " + paddingLeft + "px;"
            };
        }
    }

    /**
     * Get the content for the preview
     *
     * @returns {any}
     */
    public getContentHtml() {
        if (this.data.message() === "" || this.data.message() === undefined) {
            return $t("Write banner text here...");
        } else {
            return $t(this.data.message());
        }
    }

    /**
     * Get the button text for the preview
     *
     * @returns {any}
     */
    public getButtonText() {
        if (this.data.button_text() === "" || this.data.button_text() === undefined) {
            return $t("Edit Button Text");
        } else {
            return $t(this.data.button_text());
        }
    }

    /**
     * Set state based on overlay mouseover event for the preview
     *
     */
    public mouseoverBanner() {
        if (this.preview.data.show_overlay() === 'on_hover') {
            this.preview.showOverlayHover(true);
        }
    }

    /**
     * Set state based on overlay mouseout event for the preview
     *
     */
    public mouseoutBanner() {
        if (this.preview.data.show_overlay() === 'on_hover') {
            this.preview.showOverlayHover(false);
        }
    }
}
