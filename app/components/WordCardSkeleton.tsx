'use client'

import Image from 'next/image'
import React from 'react'

type Props = {imageName:string}

export default function WordCardSkeleton({imageName}: Props) {
	 return (
    <div

      className="animate-pulse col-span-1 cursor-pointer group"
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
          <div
            className="
						bg-rose-400
              h-full
              w-full

            "
          ></div>

          </div>
        </div>
       <div className="grid grid-cols-7 gap-4 bg-green-400">
  <div className="col-span-5 bg-gray-500">{''}
  </div>
  <div className="col-span-2">
  </div>
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
