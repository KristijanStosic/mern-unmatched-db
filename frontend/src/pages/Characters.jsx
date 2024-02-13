import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCharactersQuery } from "@/redux/slices/charactersApiSlice.js";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.jsx";
import CharactersCard from "@/components/CharactersCard.jsx";
import Container from "@/components/Container.jsx";
import Loading from "@/components/Loading.jsx";
import CharacterSearch from "@/components/CharacterSearch.jsx";

export default function Characters() {
    const [sort, setSort] = useState('name');

    const { keyword, page } = useParams();

    const { data, isLoading, isFetching, error } = useGetCharactersQuery({ keyword, page, sort });

    return (
        <>
            <Container>
                {isLoading || isFetching ? (
                    <Loading />
                ) : error ? (
                    <p>{error.data.message || error.error}</p>
                ) : (
                    <>
                        <div className="flex items-center justify-end gap-3 mb-3">
                            <CharacterSearch />
                            <Select onValueChange={(e) => setSort(e)} value={sort}>
                                <SelectTrigger className="w-[200px]">
                                    <SelectValue placeholder="Sort by"  />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="name">A - Z</SelectItem>
                                        <SelectItem value="-name">Z - A</SelectItem>
                                        <SelectItem value="health">Health Ascending</SelectItem>
                                        <SelectItem value="-health">Health Descending</SelectItem>
                                        <SelectItem value="-movement">
                                            Movement Ascending
                                        </SelectItem>
                                        <SelectItem value="movement">Movement Descending</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {data.characters.map((character) => (
                                <div key={character._id}>
                                    <CharactersCard character={character} />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </Container>
        </>
    );
}