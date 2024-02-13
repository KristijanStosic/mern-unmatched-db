import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "./ui/card.jsx";

export default function CharacterCarousel({ miniatures }) {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {miniatures.map((miniature, index) => (
                    <CarouselItem key={index}>
                            <CardContent className="flex aspect-square items-center justify-center h-52">
                                <img
                                    key={index}
                                    src={miniature}
                                    className="object-contain rounded h-full"
                                />
                            </CardContent>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}