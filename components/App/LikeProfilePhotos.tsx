import React from 'react'
import Image from 'next/image'
import styles from "../../styles/LikeProfile.module.scss";
const UsersProfilePhotos = () => {
  const profilePhotos:any = [
    'like-photo',
    'like-photo1',
    'like-photo2',
    'like-photo3',
    'like-photo4',
  ]
  return (
  <div className={styles['image-row-ctn']}>
    {
      profilePhotos.map((img: any, index: number) => 
        (<div className={styles['img-ctn']} key={index} style={{zIndex:`${index}`}}>
          <Image src={require(`assets/images/likes/${img}.png`)} alt="" height="35" width="35" />
        </div>)
      )
    }
  </div>
  )
}

export default UsersProfilePhotos