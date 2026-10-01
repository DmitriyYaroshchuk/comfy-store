type ConstructUrlParams = {
    pageNumber: number;
    search: string;
    pathname: string;
}
type ConstructPrevOrNextParams = {
    currentPage: number;
    pageCount: number;
    search: string;
    pathname: string;
}

export const constructUrl = ({ pageNumber, search, pathname }: ConstructUrlParams) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber.toString());
    // Go to page 3
    // → '/products?category=Chairs&page=3'
    return `${pathname}?${searchParams.toString()}`;
}


export const constructPrevOrNextUrl = ({ currentPage, pageCount, search, pathname }: ConstructPrevOrNextParams) : { prevUrl: string; nextUrl: string } => {
    let prevPage = currentPage - 1;
    if (prevPage < 1) prevPage = pageCount;
    const prevUrl = constructUrl({ pageNumber: prevPage, search, pathname });

    let nextPage = currentPage + 1;
    if (nextPage > pageCount) nextPage = 1;
    const nextUrl = constructUrl({ pageNumber: nextPage, search, pathname });
    // Now on the page 2 from 5
    // → { prevUrl: '/products?page=1', nextUrl: '/products?page=3' }
    return {prevUrl, nextUrl}
}