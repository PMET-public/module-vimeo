/**
 * ClassyLlama_Vimeo
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 *
 * @copyright  Copyright (c) 2017 Classy Llama.
 * @license    http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
 */

define([
    'jquery',
    'MagentoEse_Vimeo/js/player.min', // Vimeo API
    'jquery/ui',
    'Magento_ProductVideo/js/load-player',
    'froogaloop'
], function ($, Player) {
    // A flag to only advance the gallery after the video ends the first time
    var autoAdvanceGallery = true;

    $.widget('MagentoEse_Vimeo.videoVimeo', $.mage.videoVimeo, {
        _create: function () {
            this._super();

            var player = new Player(this.element.find('iframe')[0]);

            player.on('finish', function (e) {
                if (autoAdvanceGallery) {
                    autoAdvanceGallery = false;
                    $('[data-gallery-role="gallery"]').data('fotorama').show('>');
                }
            });
        }
    });

    return $.MagentoEse_Vimeo.videoVimeo;
});
