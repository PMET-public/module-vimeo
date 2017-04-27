/**
 * @category    ClassyLlama
 * @copyright   Copyright (c) 2017 Classy Llama
 */

define([
    'jquery',
    'MagentoEse_Vimeo/js/player.min',
    'jquery/ui',
    'Magento_ProductVideo/js/load-player'
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
