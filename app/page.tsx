
import Image from 'next/image'
import Link from "next/link"

import { TabsDemo } from '@/components/pieces/tabs_demo';
import { TabsIcons } from '@/components/pieces/tabs_icons';
import { ButtonDemo } from '@/components/pieces/button_demo';
import { Button } from '@/components/ui/button';
import { CardDemo } from '@/components/pieces/card_demo';
import { CardImage } from '@/components/pieces/card_image';
import { CardImage2 } from '@/components/pieces/card_image2';
import { CardImage3 } from '@/components/pieces/card_image3';
import { CardImage4 } from '@/components/pieces/card_image4';

export default function Home() {

  return (

    // Start of the homepage

    <div className="w-full overflow-x-hidden">

      {/* The simple navigation bar */}

      <header className='flex m-6 absolute top-0 right-0'>

        {/*
        Here is my resume button

        <div>

          <ButtonDemo />

        </div> */}

      </header>

      {/* - - - THE MAIN SECTION - - - */}

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-6xl flex-col gap-10">

          {/* TOP ROW: text + image */}
          <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">

            {/* Text */}
            <div className="flex-1 space-y-4 text-center md:text-left">

              <h1 className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Full-Stack Developer
              </h1>

              <h2 className="font-mono font-normal text-xl sm:text-2xl md:text-3xl">
                Hello, my name is{" "}
                <span className="font-bold text-2xl sm:text-3xl md:text-4xl">
                  Ignas
                </span>{" "}
                and I like to build cool things.
              </h2>

              <p className="font-mono text-base sm:text-lg md:text-xl text-muted-foreground">
                A graduate of computer science, based in{" "}
                <span className="font-bold font-sans">
                  Dublin
                </span>
                , focused on crafting clean, modern, and functional digital experiences!
              </p>

            </div>

            {/* Image */}
            <Image
              src="/images/me2.jpeg"
              alt="Portrait"
              width={500}
              height={500}
              className="w-80 rounded-xl object-cover sm:w-64 md:w-[300px]"
            />

          </div>

          {/* BOTTOM ROW: tabs */}
          <div className="w-full flex justify-center">
            <TabsDemo />
          </div>

        </div>

        {/* PROJECTS */}
        <section className="mt-16 flex w-full flex-col items-center gap-10 sm:mt-20 sm:gap-16 md:gap-24">

          <h3 className="font-mono text-3xl sm:text-4xl">
            Projects
          </h3>

          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
            <CardImage2 />
            <CardImage />
            <CardImage3 />
            <CardImage4 />
          </div>

        </section>
      </main>


      {/* CONTACT */}

      <section className="mx-auto mt-12 flex w-full max-w-6xl flex-col items-center gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl space-y-3">
          <h3 className="font-mono text-3xl sm:text-4xl">
            Let’s Work Together
          </h3>

          <p className="font-mono text-sm text-muted-foreground sm:text-base">
            Thank you for viewing my portfolio. If you're interested in my work or
            would like to collaborate on something, feel free to reach out!
          </p>
        </div>

        <div className="mb-24 flex w-full justify-center">
          <CardDemo />
        </div>
      </section>

    </div>

  );

}