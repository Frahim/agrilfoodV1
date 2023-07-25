declare module "react-image-gallery" {
    interface ImageGalleryItem {
      original: string;
      thumbnail?: string;
      // Add other properties as needed
    }
  
    interface ImageGalleryProps {
      items: ImageGalleryItem[];
      showThumbnails?: boolean;
      showFullscreenButton?: boolean;
      // Add other props as needed
    }
  
    class ImageGallery extends React.Component<ImageGalleryProps> {}
  
    export default ImageGallery;
  }
  