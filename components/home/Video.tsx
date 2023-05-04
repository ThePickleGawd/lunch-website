import { useState } from "react";
import Container from "@/components/layout/Container";

const Video = () => {
  return (
    <Container>
      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl lg:mb-20 ">
        <div className="relative aspect-video cursor-pointer">
          <iframe
            className="h-full w-full border-0"
            src=""
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
