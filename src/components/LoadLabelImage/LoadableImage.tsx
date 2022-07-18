import * as React from 'react'

import styles from './LoadableImage.module.css'

export interface ILoadableImage {
  src: string;
  alt?: string;
  onLoad?(): void;
}

const LoadableImage = (props: ILoadableImage) => {
  const { src, alt = '', onLoad = () => { } } = props
  const [isLoaded, setIsLoaded] = React.useState(false)
  const imageRef = React.useRef<HTMLImageElement | null>(null)
  React.useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => setIsLoaded(true)
    }
  }, [])
  return (
    <img ref={imageRef} className={`${styles.image} ${isLoaded ? styles.imageLoaded : null}`} src={src} alt={alt} />
  )
}

export default LoadableImage
