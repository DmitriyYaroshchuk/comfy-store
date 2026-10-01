import {useLoaderData, useLocation} from "react-router-dom";
import type {OrdersResponse} from "@/utils";
import {constructPrevOrNextUrl, constructUrl} from "@/utils/pagination.ts";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import type {ReactNode} from "react";

function ComplexPaginationContainer() {
    const {meta} = useLoaderData() as OrdersResponse;
    const {page, pageCount} = meta.pagination;
    const {search, pathname} = useLocation();
    // const pages = Array.from({length: pageCount}).map((_, i) => i + 1);
    // if (pageCount < 2) return null;

    // const renderPagination = pages.map((pageNumber) => {
    //     const isActive = pageNumber === pageCount;
    //     const url = constructUrl({pageNumber, search, pathname});
    //
    //     return (
    //         <PaginationItem>
    //             <PaginationLink to={url} isActive={isActive}>
    //                 {pageNumber}
    //             </PaginationLink>
    //         </PaginationItem>
    //     )
    // });

    const constructButton = ({ pageNumber, isActive } : { pageNumber: number, isActive: boolean }) : ReactNode => {
        const url = constructUrl({ pageNumber, search, pathname });
        return (
            <PaginationItem key={pageNumber}>
                <PaginationLink to={url} isActive={isActive}>{pageNumber}</PaginationLink>
            </PaginationItem>
        )
    }

    const constructEllipsis = (key: string) : ReactNode => {
        return (
            <PaginationItem key={key}>
                <PaginationEllipsis/>
            </PaginationItem>
        )
    }

    const renderPagination = () => {
        const pages : ReactNode[] = [];
        pages.push(constructButton({ pageNumber: 1, isActive: page === 1 }));
        pages.push(constructButton({ pageNumber: 2, isActive: page === 2 }));
        if (page > 3) {
            pages.push(constructEllipsis('dots-1'));
        }
        if(page !== 1 && page !== 2 && page !== pageCount &&  page !== pageCount - 1) {
            pages.push(constructButton({ pageNumber: page, isActive: true }))
        }
        if (page < pageCount - 2) {
            pages.push(constructEllipsis('dots-2'));
        }
        pages.push(constructButton({ pageNumber: pageCount - 1, isActive: page === pageCount - 1 }))
        pages.push(constructButton({ pageNumber: pageCount, isActive: page === pageCount }));
        return pages;
    }
    const { prevUrl, nextUrl } = constructPrevOrNextUrl({
        currentPage: page,
        pageCount,
        search,
        pathname
    });

    return (
        <Pagination className="mt-16">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious to={prevUrl}/>
                </PaginationItem>
                {renderPagination()}
                <PaginationItem>
                    <PaginationNext to={nextUrl}/>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
export default ComplexPaginationContainer;