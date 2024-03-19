import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const products = [
    {
        title: "Vanilla Cake Flavour Oreo",
        href: "/cakes/cake.jpg",
        price: 1452.56 
    },
    {
        title: "Cake",
        href: "/cakes/cake2.jpg",
        price: 5300.56
    },
    {
        title: "Cake",
        href: "/cakes/cake3.jpg",
        price: 6575.56
    },
    {
        title: "Cake",
        href: "/cakes/cake4.jpg",
        price: 1457.56
    },
    {
        title: "Cake",
        href: "/cakes/cake5.jpg",
        price: 6754.56
    },
    {
        title: "Cake",
        href: "/cakes/cake6.jpg",
        price: 8975.56
    },
    {
        title: "Cake",
        href: "/cakes/cake7.jpg",
        price: 8975.56
    },
    {
        title: "Cake",
        href: "/cakes/cake8.jpg",
        price: 8975.56
    },
    {
        title: "Cake",
        href: "/cakes/cake9.jpg",
        price: 8975.56
    },
    {
        title: "Cake",
        href: "/cakes/cake10.jpg",
        price: 8975.56
    },
    {
        title: "Cake",
        href: "/cakes/cake11.jpg",
        price: 8975.56
    },
    {
        title: "Cake",
        href: "/cakes/cake12.jpg",
        price: 8975.56
    },
];
export default function ProductCard() {
    return (
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 p-[2px]">
            {
                products.map((product) => (
                    <Card key={product.title}>
                        <CardHeader>
                            <Image src={product.href} width={250} height={200} alt="pic" className="object-cover w-full rounded" />
                        </CardHeader>
                        <CardTitle className="text-center text-xl">{product.title}</CardTitle>
                        <CardFooter className="flex justify-between mt-5">
                            <p className="text-lg font-semibold  animate-pulse">Rs. {product.price} ₹</p>
                            <Button className=" animate-bounce">Buy Now</Button>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}