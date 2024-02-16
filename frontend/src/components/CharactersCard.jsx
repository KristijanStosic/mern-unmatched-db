import { Heart, Trash } from "lucide-react";

import { Link } from "react-router-dom";

import { Button } from "./ui/button.jsx";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card.jsx";

import {
    useAddCharacterToFavoriteMutation,
    useGetMyFavoriteCharactersQuery,
    useRemoveCharacterFromFavoriteMutation
} from "@/redux/slices/myFavoritesApiSlice.js";

import CharacterCarousel from "./CharacterCarousel.jsx";
import { useToast } from "./ui/use-toast.js";
import { useSelector } from 'react-redux';
import Tooltips from './Tooltips.jsx';

export default function CharactersGrid({ character }) {
    const { user } = useSelector((state) => state.auth);

    const { data: myFavoriteCharacters } = useGetMyFavoriteCharactersQuery();
    const isCharacterFavorite = user ? myFavoriteCharacters?.some((favChar) => favChar._id === character._id) : false;

    const { toast } = useToast();

    const [addCharacterToFavorite, { isLoading: isLoadingAddCharacter }] = useAddCharacterToFavoriteMutation();
    const [removeCharacterFromFavorite, { isLoading: isLoadingRemoveCharacter }] = useRemoveCharacterFromFavoriteMutation();

    async function addToFavoriteHandler(characterId) {
        try {
            const response = await addCharacterToFavorite(characterId).unwrap();
            toast({ variant: 'success', title: response.message });
        } catch (error) {
            toast({ variant: 'destructive', description: error?.data?.message || error?.error });
        }
    };

    async function removeFromFavoriteHandler(characterId) {
        try {
            const response = await removeCharacterFromFavorite(characterId).unwrap();
            toast({ variant: 'info', title: response.message });
        } catch (error) {
            toast({ variant: 'destructive', description: error?.data?.message || error?.error });
        }
    };

    return (
        <Card className="h-full flex flex-col bg-primary-foreground border-[1.5px] border-primary">
            <CardHeader>
                <CardTitle>{character.name}</CardTitle>
            </CardHeader>

            <hr className="border-1 border-primary" />

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
                    <strong className="text-primary">Strategy guide(s): </strong>
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
                    <strong className="text-primary">Set: </strong>
                    <Link className="underline" to={character.set.url}>
                        {character.set.name}
                    </Link>
                </div>
                <div className="flex gap-3">
                    <strong className="text-primary">Deck Details: </strong>
                    <Link className="underline" to={character.deck}>
                        Unmatched Database
                    </Link>
                </div>
                <div className="flex gap-3">
                    <strong className="text-primary">History: </strong>
                    <Link className="underline" to={character.lore}>
                        Wikipedia
                    </Link>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <Button asChild>
                    <Link to={`/character/${character._id}`}>View More Details</Link>
                </Button>
                {user && isCharacterFavorite ? (
                    <Tooltips tooltipText='Remove character from favorites'>
                        <Trash
                            className='cursor-pointer'
                            disabled={isLoadingRemoveCharacter}
                            onClick={() => removeFromFavoriteHandler(character._id)} /
                        >
                    </Tooltips>
                ) : (
                    <Tooltips tooltipText='Add character to favorites'>
                        <Heart
                            className='cursor-pointer'
                            disabled={isLoadingAddCharacter}
                            onClick={() => addToFavoriteHandler(character._id)} /
                        >
                    </Tooltips>
                )}
            </CardFooter>
        </Card>
    );
}