import React from "react";
import Image from "next/image";
import Link from "next/link";
import home from "public/images/home-icon.svg";
import radio from "public/images/radio-icon.svg";
import playlist from "public/images/playlist-icon.svg";
import video from "public/images/video-icon.svg";
const Sidebar = () => {
  const nav = [
    [
      {
        name: "home",
        logo: home,
        link: "/",
      },
      {
        name: "collections",
        logo: playlist,
        link: "/collections",
      },
      {
        name: "podcast",
        logo: radio,
        link: "/podcast",
      },
      {
        name: "video",
        logo: video,
        link: "/video",
      },
    ],
    [
      {
        name: "home",
        logo: home,
        link: "/",
      },
      {
        name: "collections",
        logo: radio,
        link: "/collections",
      },
    ],
  ];
  return (
    <div id="SIDEBAR_CONTAINER">
      <div className="inner">
        <div className="top">
          <Image src="/musica.svg" width="40" height="40" alt="musica" />
        </div>
        <nav>
          {nav.map((section, i) => {
            return (
              <div className="section" key={i}>
                {section.map((link, l) => {
                  return (
                    <div key={l} className="link">
                      <Link href={link.link}>
                        <Image
                          src={link.logo}
                          width="24"
                          height="24"
                          alt={link.name}
                        />
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
