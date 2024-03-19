import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <AspectRatio ratio={16 / 9} className="bg-muted ">
                <img src="/cakes/back.jpg" alt="" className=" opacity-40 h-156 w-full object-cover object-center" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                    <h1 className="mt-19 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text animate-pulse">Bakery Shop</h1>
                    <p className=" mt-1 font-normal text-base md:text-lg max-w-lg mx-auto">"Welcome to our bakery shop! Indulge in freshly baked treats, artisanal bread, and custom cakes. Experience delight in every bite!"</p>
                    <Link href="/shop">
                        <Button variant="default" className=" mt-4 animate-bounce">Shop Now</Button>
                    </Link>
                </div>
            </div>
        </AspectRatio>
        </div>
    )
}