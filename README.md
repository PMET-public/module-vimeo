# Description

When a product media gallery includes a vimeo video, this extension will add some additional functionality to the gallery.
- Auto play the video after the gallery has finished loaded if the video is the first item in the gallery.
- Skip to the next item in the gallery after the video has finished playing for the first time.
- Display the video iframe with fixed height/width at each break point to remove any black bars.
  - The assumption with the fixed height/width at each breakpoint is that all product videos will have a 4:5 aspect ratio. The fixed sizes maintain that aspect ratio while sizing the video to fit/fill the gallery container.

# Usage Instructions

To use this extension you can follow these steps.
- Add a vimeo video to a product as the first item in the gallery and as the base image.
- Go to that product page in the frontend.
- See the video auto play, and then switch to the next item in the gallery.

# Dependencies

For this module to work, the changes from the following urls must be applied as patches to the Magento installation:
- https://github.com/magento/magento2/pull/9414/files
- https://github.com/magento/magento2/commit/1fbe1f004ed911291e8a1ee390dff409c7a35b4f

# Caveats

- The styles in this extension does not discriminate by video source. Some of the styles will effect a YouTube video
  slide the same as a Vimeo slide.
