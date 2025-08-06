"use client"
import React, { useRef, useState } from 'react';
import courseCSS from './MainCourse.module.css';
import banner from "@/assets/courses/course-banner.jpg";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ToggleBar from './togglebarSection/ToggleBar';
import Cards from './cardsSection/Cards';

export const items = [
    'Data Science',
    'Advanced Full Stack',
    'Python Development',
    'Java Development',
    'Analytics',
    'AWS DevOps',
    'Digital Marketing',
    'Artificial Intelligence',
    'Generative AI',
    'SnowFlake Course',
    'SalesForce',
];
export const Tag = ["Web Development", "Job Guarantee Programs", "Cloud"];
const mainCoursePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
     const [checked, setChecked] = useState(
       new Array(items.length).fill(false)
     );
     const [showUncheckedShadow, setShowUncheckedShadow] = useState(
       new Array(items.length).fill(false)
     );

     const [checkedTags, setCheckedTags] = useState(
       new Array(Tag.length).fill(false)
     );
     const [showUncheckedShadowTags, setShowUncheckedShadowTags] = useState(
       new Array(Tag.length).fill(false)
     );

      const clearFilters = () => {
        setChecked(new Array(items.length).fill(false));
        setCheckedTags(new Array(Tag.length).fill(false));
        setRefreshCards(true);
    };

    const handleClick = () => {
        clearFilters();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

     const [showButton, setShowButton] = useState(false);
     const [refreshCards, setRefreshCards] = useState([]);
     const [filteredCards, setFilteredCards] = useState([]);
     const containerRef = useRef(null);

    return (
        <>
          <div className={courseCSS.categorypage}>
                <div className={courseCSS.cover_img}>
                    <Image src={banner} className={courseCSS.thumbnail} alt="" />
                    <h1>Courses</h1>
                </div>

                <ToggleBar
                    items={items}
                    Tag={Tag}
                    checked={checked}
                    setChecked={setChecked}
                    showUncheckedShadow={showUncheckedShadow}
                    setShowUncheckedShadow={setShowUncheckedShadow}
                    checkedTags={checkedTags}
                    setCheckedTags={setCheckedTags}
                    showUncheckedShadowTags={showUncheckedShadowTags}
                    setShowUncheckedShadowTags={setShowUncheckedShadowTags}
                    clearFilters={clearFilters}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

               <div className={courseCSS.EntirePage}>
                    <div className={courseCSS.category}>
                        {/* Duplicate filter section for non-toggle bar view */}
                        <div className={courseCSS.checkbox}>
                            <div className={courseCSS.search}>
                                <p>Search</p>
                                <div className={courseCSS.searchBar}>
                                    <input type="text" placeholder='search' />
                                    <button className={courseCSS.searchIcon}><FontAwesomeIcon icon={faSearch} /></button>
                                </div>
                            </div>
                            <hr />
                            {/* Category part */}
                            <div className={courseCSS.categories}>
                                <h5>Course</h5>
                                {items.map((item, index) => (
                                    <div key={index} className={courseCSS.categorypart}>
                                        <input
                                            type="checkbox"
                                            id={`acc-${index}`}
                                            checked={checked[index]}
                                            onChange={() => handleCheckboxClick(index)}
                                            className={`${checked[index] ? courseCSS.shadow : showUncheckedShadow[index] ? courseCSS.unchecked_shadow : ''}`}
                                        />
                                        <label htmlFor={`acc-${index}`}><p>{item}</p></label>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            {/* Tag part */}
                            <div className={courseCSS.categories}>
                                <h5>Catogery</h5>
                                {Tag.map((tag, index) => (
                                    <div key={index} className={courseCSS.categorypart}>
                                        <input
                                            type="checkbox"
                                            id={`tag-${index}`}
                                            checked={checkedTags[index]}
                                            onChange={() => handleTagCheckboxClick(index)}
                                            className={`${checkedTags[index] ? courseCSS.shadow : showUncheckedShadowTags[index] ? courseCSS.unchecked_shadow : ''}`}
                                        />
                                        <label htmlFor={`tag-${index}`}><p>{tag}</p></label>
                                    </div>
                                ))}
                            </div>
                            <hr />

                            <div className={courseCSS.button}>
                                <button className={courseCSS.btn} onClick={handleClick}>&#x2715;&nbsp;&nbsp;&nbsp;&nbsp;Clear All Filters</button>
                            </div>
                        </div>
                    </div>
                    <div className={courseCSS.CardsSection}>
                        <Cards
                            filters={{
                                checkedCategories: checked,
                                checkedTags,

                            }} />
                    </div>
                    {showButton && (
                        <button className={courseCSS.scrollButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <span>&#10095;&#10095;</span>
                        </button>
                    )}
                </div>
            </div>
            
        </>
    );
};

export default mainCoursePage;