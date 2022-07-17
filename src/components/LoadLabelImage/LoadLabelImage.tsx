import * as React from 'react'
import styles from './LoadLabelImage.module.css'

export interface ILoadableImage {
  src: string;
  alt?: string;
  onLoad?(): void;
}

const LoadableImage = (props: ILoadableImage) => {
  const { src, alt = '', onLoad = () => { } } = props
  const [isLoaded, setIsLoaded] = React.useState(false)
  return (
    <div className={styles.container}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  )
}
