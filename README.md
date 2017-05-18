# Description

When a product media gallery includes a vimeo video, this extension will add some additional functionality to the gallery.
- Auto play the video after the gallery has finished loaded if the video is the first item in the gallery.
- Skip to the next item in the gallery after the video has finished playing for the first time.
- Display the video iframe with fixed height/width at each break point to remove any black bars.

# Usage Instructions

To use this extension you can follow these steps.
- Add a vimeo video to a product as the first item in the gallery and as the base image.
- Go to that product page in the frontend.
- See the video auto play, and then switch to the next item in the gallery.

**For this extension to work, the following patch must be applied: https://github.com/magento/magento2/pull/9414/files**

# Caveats

- The styles in this extension does not discriminate by video source. Some of the styles will effect a YouTube video
slide the same as a Vimeo slide.