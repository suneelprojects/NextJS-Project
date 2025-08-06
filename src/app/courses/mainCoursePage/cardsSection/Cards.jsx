/** @format */

"use client";
import React, {useState, useRef,useEffect } from "react";
import { useRouter } from "next/navigation";
import { data } from './CardData';
import GridSymbol from '@/assets/courses/gridSymbol.png';
import cardsCSS from './Cards.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import OneCard from "./OneCard";

const cards = ({filters}) => {
  const { checkedCategories, checkedTags } = filters;
  const matchesFilters = (card) => {
    const categoryMatch =
      checkedCategories[card.categoryIndex] || !checkedCategories.some(Boolean);
    const tagMatch = checkedTags[card.tagIndex] || !checkedTags.some(Boolean);
    return categoryMatch && tagMatch;
  };
  const filteredCards = data.filter(matchesFilters);

  // DropDown menu
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState(
    "Release Date(newest first)"
  );
  const [options] = useState([
    "Release Date(newest first)",
    "Release Date(oldest first)",
    "Course Title(a-z)",
    "Course Title(z-a)",
  ]);

  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Buttons for Grid and List View
  const [selectedButton, setSelectedButton] = useState("grid");
  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  // Pagination
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const currentCards = filteredCards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const showPagination = totalPages > 1;
 const router = useRouter();
  const handleCardTitleClick = (courseID) => {
    const selectedCard = data.find(card => card.courseID === courseID);
    if (selectedCard) {
      router.push(`/${selectedCard.slug}`);
    }
  };

  return (
    <div>
      <div className={cardsCSS.cardsSection}>
        <div className={cardsCSS.cardfilter}>
          <div className={cardsCSS.Form_buttons}>
            <button
              className={`${
                selectedButton === "grid" ? cardsCSS.selected : ""
              }`}
              onClick={() => handleButtonClick("grid")}
            >
              <Image
                src={GridSymbol}
                alt="Grid"
                className={`${cardsCSS.icon} ${
                  selectedButton === "grid" ? cardsCSS.selectedIcon : ""
                }`}
              />
              Grid
            </button>
            <button
              className={`${
                selectedButton === "list" ? cardsCSS.selected : ""
              }`}
              onClick={() => handleButtonClick("list")}
            >
              <FontAwesomeIcon icon={faList} />
              List
            </button>
          </div>
        </div>

        <div className={cardsCSS.cards}>
          <div
            className={`row ${
              selectedButton === "list" ? cardsCSS.listview : cardsCSS.gridView
            }`}
          >
            {currentCards.map((card, index) => (
              <OneCard
                key={index}
                card={card}
                selectedButton={selectedButton}
                handleCardTitleClick={handleCardTitleClick}
              />
            ))}
          </div>
        </div>

        {showPagination && (
          <div className={cardsCSS.pagination}>
            {!isFirstPage && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`${cardsCSS.pageButton} ${cardsCSS.arrowButton}`}
              >
                &#10094;
              </button>
            )}
            {Array.from({ length: totalPages }, (_, pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => handlePageChange(pageIndex + 1)}
                className={`${cardsCSS.pageButton} ${
                  currentPage === pageIndex + 1 ? cardsCSS.activePageButton : ""
                }`}
              >
                {pageIndex + 1}
              </button>
            ))}
            {!isLastPage && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`${cardsCSS.pageButton} ${cardsCSS.arrowButton}`}
              >
                &#10095;
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default cards;
