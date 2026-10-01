import {useLoaderData, useLocation} from "react-router-dom";
import type {ProductsResponseWithParams} from "@/utils";
import {constructPrevOrNextUrl, constructUrl} from "@/utils/pagination.ts";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";

function PaginationContainer() {
    const { meta } = useLoaderData() as ProductsResponseWithParams;
    const { page, pageCount } = meta.pagination;
    const { search, pathname } = useLocation();
    const pages = Array.from({ length: pageCount }).map((_, i) => i + 1);
    if (pageCount < 2) return null;
    const renderPagination = pages.map((pageNumber) => {
        const isActive = pageNumber === page;
        const url = constructUrl({ pageNumber, search, pathname });

        return (
            <PaginationItem>
                <PaginationLink to={url} isActive={isActive}>
                    {pageNumber}
                </PaginationLink>
            </PaginationItem>
        )
    });
    const { prevUrl, nextUrl } = constructPrevOrNextUrl({
        currentPage: page,
        pageCount,
        search,
        pathname
    })
    return (
        <Pagination className="mt-16">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious to={prevUrl}/>
                </PaginationItem>
                {renderPagination}
                <PaginationItem>
                    <PaginationNext to={nextUrl}/>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
export default PaginationContainer;