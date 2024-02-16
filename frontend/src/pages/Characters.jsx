import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCharactersQuery } from "@/redux/slices/charactersApiSlice.js";

import CharactersCard from "@/components/CharactersCard.jsx";
import Container from "@/components/Container.jsx";
import Loading from "@/components/Loading.jsx";
import CharacterSearch from "@/components/CharacterSearch.jsx";
import CharacterSort from "@/components/CharacterSort.jsx";
import Paginate from "@/components/Paginate.jsx";

export default function Characters() {
    const [sort, setSort] = useState('name');

    const { keyword, page } = useParams();

    const { data, isLoading, isFetching, error } = useGetCharactersQuery({
        keyword,
        page,
        sort
    });

    function handleChangeSort(e) {
        setSort(e);
    }

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
                            <CharacterSort sort={sort} handleChangeSort={(e) => handleChangeSort(e)} />
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
                <div className="mt-3">
                    <Paginate
                        pages={data?.pages}
                        page={data?.page}
                        keyword={keyword ? keyword : ''}
                    />
                </div>
            </Container>
        </>
    );
}