import { useState } from "react"
import ReactPaginate from "react-paginate"

interface Props {
    total: number | any
    setCurrentPage: any
    currentPage: number
    windowWidth: number
}

const RPaginate = ({total, setCurrentPage, currentPage, windowWidth}: Props) => {

    const [itemOffset, setItemOffset] = useState(0);

    const handlePrev = () => {
        {currentPage <= 0 ?
            setCurrentPage(1)
        :
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        {currentPage >= total ?
            setCurrentPage(total)
        :
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = event.selected + 1;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        setCurrentPage(newOffset);
      };

    return (
        <>  
            {windowWidth > 600 ?
                <ReactPaginate
                    className={`pagination flex justify-center gap-5`}
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageCount={total}
                    previousLabel="< previous"
                    containerClassName="pagination"
                />
            : 
                <div className="flex justify-center gap-5">
                    <button className="mobile-pagination" onClick={() => handlePrev()}>Prev</button>
                    <button className="mobile-pagination" onClick={() => handleNext()}>Next</button>
                </div>
            }
        </>
    )
}

export default RPaginate