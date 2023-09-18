'use client'

import Image from 'next/image'
import React from 'react'

type Props = {imageName:string}

export default function WordCardSkeleton({imageName}: Props) {
	 return (
    <div

      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
            "
            src={imageName}
            alt="Listing"
          />

          </div>
        </div>
        <div className="font-semibold text-lg">
          Frenceh, Paris
        </div>
        <div className="font-light text-neutral-500">
         montaint
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            $ 2.22
          </div>

            <div className="font-light">night</div>



      </div>
    </div>
   );
}
