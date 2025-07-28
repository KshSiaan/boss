import FAQSec from "@/components/core/extra/faq-sec";
import JoinComm from "@/components/core/extra/join-comm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <main className="py-12">
      <div className="px-4 lg:px-[7%]">
        <Image
          className="w-full h-[300px] object-cover rounded-xl"
          width={1500}
          height={400}
          alt="banner"
          src={"/image/service_image01.jpg"}
        />
      </div>
      <section className="px-4 lg:px-[7%] mt-12">
        <h1 className="text-4xl">
          Shopify Thrives with Flexible Talent from Boss
        </h1>
        <div className="mt-4 flex w-full justify-between items-center">
          <div className="flex items-center gap-4 text-primary">
            <p>Software</p>
            <p>Australia</p>
            <p>7,000+</p>
          </div>
          <div className="text-muted-foreground text-sm">
            Posted on: 06-05-2025
          </div>
        </div>
      </section>
      <p className="px-4 lg:px-[7%] mt-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
        lobortis nulla, id hendrerit lacus. Vivamus quis nunc enim. In hac
        habitasse platea dictumst. Nullam rutrum justo quis venenatis suscipit.
        Suspendisse fringilla a massa id vulputate. Vestibulum volutpat molestie
        erat et molestie. Donec suscipit viverra mi quis pharetra. Fusce non
        pellentesque nunc. Maecenas vitae viverra sapien. Ut nisi mauris,
        condimentum id scelerisque non, commodo at lectus. Sed sagittis pulvinar
        malesuada. Proin congue elit pulvinar nibh aliquam aliquet. In hac
        habitasse platea dictumst. Integer vitae lorem tincidunt, mattis felis
        in, hendrerit risus. Donec pellentesque arcu eget tristique malesuada.
        Sed at euismod massa. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Nullam
        pellentesque vel arcu a venenatis. Phasellus auctor sapien sed enim
        blandit venenatis. Sed luctus lectus diam, non imperdiet orci mattis et.
        Etiam lobortis nunc a luctus volutpat. Aliquam in eros commodo turpis
        suscipit aliquam. Maecenas interdum facilisis nulla, et posuere tortor
        pellentesque eget. Praesent sagittis, lectus at aliquet fermentum, diam
        ligula elementum odio, in vestibulum felis massa placerat purus. Ut at
        mi quis tortor lacinia pretium. Duis ultricies erat ac bibendum
        imperdiet. Mauris at nunc luctus, bibendum tellus eget, interdum purus.
        Phasellus nunc libero, accumsan ut feugiat nec, posuere dignissim enim.
        Donec at urna hendrerit sem varius semper vitae ut lectus. Pellentesque
        placerat odio diam, quis ultricies erat commodo nec. Vivamus a luctus
        nisl. Quisque a luctus nunc, convallis vulputate augue. Pellentesque
        ornare vel nulla vel consequat. Phasellus at tristique elit. Suspendisse
        a enim convallis, luctus neque at, porta lorem. Pellentesque eget arcu
        fringilla, interdum mi sed, ultricies dui. Pellentesque at luctus nunc.
        Sed ullamcorper rhoncus sem eget mollis. Maecenas vel elit maximus,
        porttitor ligula eu, finibus mi. Etiam ut lacus maximus, vulputate dolor
        non, lobortis turpis. Duis convallis felis quis hendrerit rutrum.
        Quisque eleifend dui neque, a ornare tellus pretium eu. Aenean eget
        metus ante. Vestibulum varius suscipit lectus, sed aliquet augue ornare
        a. Aliquam ornare pellentesque lobortis. Integer consequat euismod
        mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
        cursus sapien at tellus bibendum, quis tincidunt nulla auctor. Curabitur
        enim urna, auctor sed arcu quis, congue fermentum sem. Proin pulvinar ex
        at dolor mattis rutrum. Suspendisse auctor, ipsum vitae pellentesque
        accumsan, velit justo varius lectus, vel euismod arcu ante ac ex.
        Vestibulum non tristique nulla. Etiam fringilla tempor leo facilisis
        egestas.
      </p>
      <div className="flex justify-center items-center mt-6">
        <Button variant={"outline"}>Read More</Button>
      </div>
      <JoinComm />
      <FAQSec />
    </main>
  );
}
