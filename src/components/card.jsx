import React, { useState } from "react";

export default function Card({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get current page data
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPageData = data.slice(startIndex, startIndex + itemsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <div className="cardcontainer">
                {currentPageData.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.urlToImage} alt="image is missing" />
                        <div className="cardContent">
                            <a href="" className="title" onClick={() =>  window.open(item.url)}>{item.title}</a>
                            <p>{item.description}</p>
                            <button onClick={() =>  window.open(item.url)}>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrev} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </>
    );
}