import React from 'react'
// import Image from 'react-bootstrap/Image';
// import { ImageGallery } from "react-image-grid-gallery";
import { Gallery } from "react-grid-gallery";





export default function GalleryPage() {
  const images = [
    {
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/220f6753-6f05-4ddc-b597-2da49613c109/dfsals4-14a88af4-f696-4dc5-89b2-198286b90d19.jpg/v1/fill/w_1032,h_774,q_70,strp/glitter_brain_by_iflowerbomb_dfsals4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMjIwZjY3NTMtNmYwNS00ZGRjLWI1OTctMmRhNDk2MTNjMTA5XC9kZnNhbHM0LTE0YTg4YWY0LWY2OTYtNGRjNS04OWIyLTE5ODI4NmI5MGQxOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DN5hNRDk8cxB06Uu9vcpkzK9Y5CrCNKakBCx_fhL3VQ",
      thumbnailCaption: "Glitter Brain",
    },
    {
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/220f6753-6f05-4ddc-b597-2da49613c109/dfsalk7-fcc1fc1d-66a8-42f9-805a-1e7701584a0b.jpg/v1/fill/w_1038,h_770,q_70,strp/in_your_head_by_iflowerbomb_dfsalk7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTQ5IiwicGF0aCI6IlwvZlwvMjIwZjY3NTMtNmYwNS00ZGRjLWI1OTctMmRhNDk2MTNjMTA5XC9kZnNhbGs3LWZjYzFmYzFkLTY2YTgtNDJmOS04MDVhLTFlNzcwMTU4NGEwYi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4pmQ6bvJPlo5ZF4TRsf-bFHGKCRnnhkRfOry537RTIE",
      thumbnailCaption: "Stop",

    },
    {
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/220f6753-6f05-4ddc-b597-2da49613c109/dfsalqq-ddaeb6f3-f19b-41c7-8184-e0b9c153652f.jpg/v1/fit/w_744,h_1528,q_70,strp/typography_planet_by_iflowerbomb_dfsalqq-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUyOCIsInBhdGgiOiJcL2ZcLzIyMGY2NzUzLTZmMDUtNGRkYy1iNTk3LTJkYTQ5NjEzYzEwOVwvZGZzYWxxcS1kZGFlYjZmMy1mMTliLTQxYzctODE4NC1lMGI5YzE1MzY1MmYuanBnIiwid2lkdGgiOiI8PTc0NCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hkBz_sZ-66vgi_JDH7yq6C8H3rqdiO3nF5xVf-bjbvo",
      thumbnailCaption: "Typo Plabet",
    },
  ];
  return (
    <div>
      <h1>Gallery</h1>
      <Gallery enableImageSelection={false} images={images} />
    </div>
  )
}

// https://www.npmjs.com/package/react-grid-gallery