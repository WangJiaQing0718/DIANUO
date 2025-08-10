/**
 * 可复用页码组件
 */
import React, { useState } from 'react';
import './index.scss';

const Pagination = ({ pageIndex, totalPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(pageIndex);
    
    // 同步父组件和本地状态
    React.useEffect(() => {
        setCurrentPage(pageIndex);
    }, [pageIndex]);

    const handlePrevPage = () => {
        if (currentPage > 0) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            onPageChange(newPage);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPage - 1) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            onPageChange(newPage);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
        onPageChange(page);
    };

    const handleJumpPage = (e) => {
        if (e.key === 'Enter') {
            const pageNum = parseInt(e.target.value) - 1;
            if (!isNaN(pageNum) && pageNum >= 0 && pageNum < totalPage) {
                setCurrentPage(pageNum);
                onPageChange(pageNum);
                e.target.value = '';
            }
        }
    };

    return (
        <div className="pagination-container">
            <ul className="pagination">
                <li>
                    <button onClick={handlePrevPage} disabled={currentPage === 0}>
                        «
                    </button>
                </li>
                
                {Array.from({ length: totalPage }, (_, index) => (
                    <li key={index}>
                        <button
                            className={currentPage === index ? 'active' : ''}
                            onClick={() => handlePageClick(index)}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                
                <li>
                    <button 
                        onClick={handleNextPage} 
                        disabled={currentPage === totalPage - 1}
                    >
                        »
                    </button>
                </li>
            </ul>
            
            <div className="page-jump">
                <span>前往</span>
                <input
                    type="number"
                    className="page-input"
                    min="1"
                    max={totalPage}
                    onKeyPress={handleJumpPage}
                />
                <span>页</span>
            </div>
        </div>
    );
};

export default Pagination;