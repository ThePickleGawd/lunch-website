import { useState } from "react";
import Container from "@/components/layout/Container";

const Video = () => {
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <div className="relative cursor-pointer aspect-video">
          <iframe
            className="border-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/eIhSiPJWgOs?rel=0"
            allowFullScreen
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default Video;
