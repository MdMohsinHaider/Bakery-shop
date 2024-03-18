import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <AspectRatio ratio={16 / 9} className="bg-muted ">
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                    <h1 className="mt-20 md:mt-0 tesx-4xl md:text-7xl font-bold bg-clip-text ">Baker Shop</h1>
                    <p className=" mt-4 font-normal text-base md:text-lg max-w-lg mx-auto">Discover the latest trends and best deals on electronics, fashion, and more.</p>
                    <Button variant="destructive" className=" mt-4">Shop Now</Button>
                </div>
            </div>
        </AspectRatio>
        </div>
    )
}