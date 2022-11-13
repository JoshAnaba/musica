import React from "react";
import Image from "next/image";
import styles from '../../styles/NewReleases.module.scss'
const NewReleases = () => {
  return (
    <>
      <div className="container-header">New Releases</div>
      <div className={styles.newReleases}>
        <div className={styles.newRelease}>
          <div className={styles.img}>
            <Image
              src={require("assets/images/new-releases/bubble.png")}
              width="150"
              height="150"
              alt="bubble"
            />
          </div>
          <p>Bubble</p>
        </div>
        <div className={styles.newRelease}>
          <div className={styles.img}>
            <Image
              src={require("assets/images/new-releases/blind.png")}
              width="150"
              height="150"
              alt="blind"
            />
          </div>
          <p>Blind</p>
        </div>
        <div className={styles.newRelease}>
          <div className={styles.img}>
            <Image
              src={require("assets/images/new-releases/mountain.png")}
              width="150"
              height="150"
              alt="mountain"
            />
          </div>
          <p>Mountain</p>
        </div>
        <div className={styles.newRelease}>
          <div className={styles.img}>
            <Image
              src={require("assets/images/new-releases/everything-black.png")}
              width="150"
              height="150"
              alt="everything's black"
            />
          </div>
          <p>Everything's Black</p>
        </div>
        <div className={styles.newRelease}>
          <div className={styles.img}>
            <Image
              src={require("assets/images/new-releases/nomad.png")}
              width="150"
              height="150"
              alt="nomad"
            />
          </div>
          <p>Nomad</p>
        </div>
        <div className={styles.newRelease}>
          <div className={styles.img}>
            <Image
              src={require("assets/images/new-releases/limits.png")}
              width="150"
              height="150"
              alt="limits"
            />
          </div>
          <p>Limits</p>
        </div>
        <div className={styles.newRelease}>
          <div className={styles.img}>
            <Image
              src={require("assets/images/new-releases/cancelled.png")}
              width="150"
              height="150"
              alt="cancelled"
            />
          </div>
          <p>Cancelled</p>
        </div>
      </div>
    </>
  );
};

export default NewReleases;
