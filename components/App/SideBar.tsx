import React from "react";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div id="SIDEBAR_CONTAINER">
      <div className="inner">
        <Image src="/musica.png" width="20" height="20" alt="musica" />
      </div>
    </div>
  );
};

export default Sidebar;
