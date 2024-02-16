import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination.jsx";

export default function Paginate({ page, pages, isAdmin = false, keyword = '' }) {
    return (
        pages > 1 && (
            <Pagination>
                <PaginationContent>
                    {[...Array(pages).keys()].map((x) => (
                        <PaginationLink
                            key={x + 1}
                            isActive={x + 1 === page}
                            to={
                                !isAdmin
                                    ? keyword
                                        ? `/search/${keyword}/page/${x + 1}`
                                        : `/page/${x + 1}`
                                    : `/admin/productlist/${x + 1}`
                            }
                        >
                            <PaginationItem>
                                {x + 1}
                            </PaginationItem>
                        </PaginationLink>
                    ))}
                </PaginationContent>
            </Pagination>
        )
    );
}