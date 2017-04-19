/**
 * @category    ClassyLlama
 * @copyright   Copyright (c) 2017 Classy Llama
 */

define([
    'jquery',
    'jquery/ui',
    'MagentoEse_Vimeo/js/fotorama-add-video-events'
], function ($) {
    'use strict';

    $.widget('MagentoEse_Vimeo.AddFotoramaVideoEvents', $.mage.AddFotoramaVideoEvents, {

        /**
         * Create video container
         *
         * @param {Object} videoData
         * @param {jQuery} $image
         * @private
         */
        _createVideoContainer: function (videoData, $image) {
            var videoSettings;

            if ($image.find('.' + this.PV).length !== 0) {
                return;
            }

            videoSettings = this.options.videoSettings[0];
            $image.append(
                '<div class="' +
                this.PV +
                '" data-related="' +
                videoSettings.showRelated +
                '" data-loop="' +
                videoSettings.videoAutoRestart +
                '" data-type="' +
                videoData.provider +
                '" data-code="' +
                videoData.id +
                '" data-width="452px" data-height="100%"></div>'
            );
        }
    });

    return $.MagentoEse_Vimeo.AddFotoramaVideoEvents;
});
