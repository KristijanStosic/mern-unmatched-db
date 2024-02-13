import { useDispatch } from "react-redux";

import { Heart } from "lucide-react";

import { Link } from "react-router-dom";

import { Button } from "./ui/button.jsx";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card.jsx";

import CharacterCarousel from "./CharacterCarousel.jsx";

export default function CharactersGrid({ character }) {
    const dispatch = useDispatch();

    const addToFavoriteHandler = () => {

    };

    return (
        <Card className="h-full flex flex-col bg-slate-50 border-[1.5px] border-slate-700">
            <CardHeader>
                <CardTitle>{character.name}</CardTitle>
            </CardHeader>

            <hr className="border-1 border-slate-700" />

            <CardContent className="flex-1">
                <div className="flex mt-3">
                    <img
                        width={150}
                        className="object-contain rounded h-full"
                        src={character.back}
                        alt={character.name}
                    />
                    <div className="ml-16">
                        {character.miniatures.length > 1 ? (
                            <CharacterCarousel miniatures={character.miniatures} />
                        ) : (
                            <img
                                width={150}
                                className="object-contain rounded h-full"
                                src={character.miniatures[0]}
                                alt={character.name}
                            />
                        )}
                    </div>
                </div>

                <div className="flex gap-2 mt-2">
                    <strong className="text-stone-700">Strategy guide(s): </strong>
                    <div className="flex gap-3 underline">
                        <Link to={character?.guides[0]?.url}>
                            {character?.guides[0]?.name},
                        </Link>
                        <Link to={character?.guides[1]?.url}>
                            {character?.guides[1]?.name},
                        </Link>
                        <Link to={character?.guides[2]?.url}>
                            {character?.guides[2]?.name}
                        </Link>
                    </div>
                </div>
                <div>
                    <strong className="text-stone-700">Set: </strong>
                    <Link className="underline" to={character.set.url}>
                        {character.set.name}
                    </Link>
                </div>
                <div className="flex gap-3">
                    <strong className="text-stone-700">Deck Details: </strong>
                    <Link className="underline" to={character.deck}>
                        Unmatched Database
                    </Link>
                </div>
                <div className="flex gap-3">
                    <strong className="text-stone-700">History: </strong>
                    <Link className="underline" to={character.lore}>
                        Wikipedia
                    </Link>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <Button asChild>
                    <Link to={`/character/${character._id}`}>View More Details</Link>
                </Button>
                <Heart />
            </CardFooter>
        </Card>
    );
}