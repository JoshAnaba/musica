import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/Sidebar.module.scss'
import { Router, useRouter } from 'next/router';
// import home from "public/images/home-icon.svg";
// import radio from "public/images/radio-icon.svg";
// import playlist from "public/images/playlist-icon.svg";
// import video from "public/images/video-icon.svg";
import SideBarIcon from "./SideBarIcon";
const Sidebar = () => {
  const { pathname, push } = useRouter();
  const nav = [
    [
      {
        name: "home",
        logo: "home",
        link: "/",
      },
      {
        name: "collections",
        logo: "playlist",
        link: "/collections",
      },
      {
        name: "podcast",
        logo: "radio",
        link: "/podcast",
      },
      {
        name: "video",
        logo: "video",
        link: "/video",
      },
    ],
    [
      {
        name: "profile",
        logo: "profile",
        link: "/profile",
      },
      {
        name: "logout",
        logo: "logout",
        link: "/login",
      },
    ],
  ];
  return (
    <div id={styles.SIDEBAR_CONTAINER}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <Image src="/musica.svg" width="35" height="35" alt="musica" />
        </div>
        <nav>
          {nav.map((section, i) => {
            return (
              <div className={styles.section} key={i}>
                {section.map((link, l) => {
                  return (
                    <div key={l} className={`link ${pathname === link.link ? styles.active : ''}`}>
                      <Link href={link.link}>
                        <a>
                          <SideBarIcon icon={link.logo} />
                          {/* <p>{link.name}</p> */}
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
