
import Image from 'next/image'

import { TabsDemo } from '@/components/pieces/tabs_demo';
import { TabsIcons } from '@/components/pieces/tabs_icons';
import { ButtonDemo } from '@/components/pieces/button_demo';
import { Button } from '@/components/ui/button';
import { CardDemo } from '@/components/pieces/card_demo';
import { CardImage } from '@/components/pieces/card_image';
import { CardImage2 } from '@/components/pieces/card_image2';


export default function Home() {

  return (

    // Start of the homepage

    <div>

      {/* The simple navigation bar */}

      <header className='flex m-6 absolute top-0 right-0'>

        <div>

          <ButtonDemo />

        </div>

      </header>

      {/* - - - THE MAIN SECTION - - - */}

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-12">
        <div className="flex w-full max-w-6xl flex-col gap-10">

          {/* TOP ROW: text + image */}
          <div className="flex items-center justify-between gap-10">

            {/* Text */}
            <div className="flex-1 space-y-4">

              <h1 className="text-4xl font-bold md:text-6xl">
                Full-Stack Developer
              </h1>
              <h2 className="text-2xl font-bold md:text-4xl">
                Hello, my name is Ignas and I like to build cool things.
              </h2>

              <p className="text-muted-foreground">
                A graduate of computer science, based in Dublin, focused on crafting clean, functional digital experiences!
              </p>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/me2.jpeg"
                alt="Portrait"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>

          </div>

          {/* BOTTOM ROW: tabs */}
          <div className="w-full flex justify-center">
            <TabsDemo />
          </div>

        </div>

        <div className="w-full flex justify-center m-10">
          <CardImage />
          <CardImage2 />
        </div>
      </main>


      <footer className="w-full flex justify-center">

        <CardDemo />

      </footer>

    </div>

  );

}