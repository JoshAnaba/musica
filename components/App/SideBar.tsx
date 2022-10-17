import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div id="SIDEBAR_CONTAINER">
      <div className="inner">
        <div className="top">
          <Image src="/musica.svg" width="35" height="35" alt="musica" />
        </div>
        <nav>
          {nav.map((section, i) => {
            return (
              <div className="section" key={i}>
                {section.map((link, l) => {
                  return (
                    <div key={l} className={`link ${pathname === link.link ? 'active' : ''}`}>
                      <Link href={link.link}>
                        <a>
                          <SideBarIcon icon={link.logo} />
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
