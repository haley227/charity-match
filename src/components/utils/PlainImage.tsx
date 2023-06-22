import React from 'react';

type PlainImageProps = {
  imgData: any,
  alt?: string,
};
export default function PlainImage({ imgData, alt = '' }: PlainImageProps) {
  return <img alt={alt} src={imgData.img.gatsbyImageData.images.fallback.src} height={imgData.img.gatsbyImageData.height} width={imgData.img.gatsbyImageData.width}></img>;
}
