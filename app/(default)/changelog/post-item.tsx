'use client';

import Image from 'next/image';
import PostDate from '@/components/post-date';
import { UpdateMdx } from '@/components/mdx/update-mdx';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function PostItem({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const images = [{ src: props.image }]; // Hier könntest du mehrere Bilder hinzufügen

  return (
    <article className="pt-12 first-of-type:pt-0 group">
      <div className="md:flex">
        <div className="w-48 shrink-0">
          <time className="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/30 mb-3">
            <span className="ml-[1.625rem] md:ml-5"><PostDate dateString={props.publishedAt} /></span>
          </time>
        </div>
        <div className="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1] group-last-of-type:border-none">
          <header>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">{props.title}</h2>
          </header>
          <figure className="bg-gradient-to-b from-slate-300/20 to-transparent rounded-3xl p-px">
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
              <Image className="w-full rounded-3xl" src={props.image} width={574} height={326} alt={props.title} />
            </div>
          </figure>
          <UpdateMdx code={props.body.code} />
          {isOpen && (
            <Lightbox
              slides={images}
              open={isOpen}
              close={() => setIsOpen(false)}
              render={{
                buttonPrev: images.length > 1 ? undefined : () => null,
                buttonNext: images.length > 1 ? undefined : () => null,
              }}
              controller={{ closeOnBackdropClick: true }}
            />
          )}
        </div>
      </div>
    </article>
  );
}
