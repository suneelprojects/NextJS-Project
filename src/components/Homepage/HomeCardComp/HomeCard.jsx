import React from 'react';
import { data } from '@/app/courses/mainCoursePage/cardsSection/CardData';
import cardsCSS from '@/app/courses/mainCoursePage/cardsSection/Cards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
// import SignInForm from '../SignInForm/SignInform';
import calendar from '@/assets/courses/calendar-lines-pen.png';
import userPic from '@/assets/courses/usergroup.png';
// import { useWishlist } from '../../Dashboard/MenuBarComponents/WishListContext';
import { auth } from '../../../../firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const HomeCard = ({ selectedCategory }) => {
    // const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const user = auth.currentUser;
    // const [showSignInForm, setShowSignInForm] = useState(false);

    const router=useRouter();

    const filterCardsByCategory = data.filter((card) =>
        selectedCategory === 'All' || card.category === selectedCategory
    );

    const filteredCards = filterCardsByCategory.slice(0, 8);

    const handleCardTitleClick = (courseID) => {
        const selectedCard = data.find(card => card.courseID === courseID);
        if (selectedCard) {
            router.push(`/${selectedCard.slug}`, { state: { cardDetails: selectedCard } });
        }
    };

    return (
        <>
            <div className={cardsCSS.cardsSection}>
                {/* {showSignInForm && (
                    <>
                        <div className={`${cardsCSS.overlay} ${showSignInForm ? cardsCSS.show : ''}`} />
                        <SignInForm onClose={() => setShowSignInForm(false)} />
                    </>
                )} */}

                <div className={cardsCSS.cards}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" style={{ width: '100%' }}>
                        {filteredCards.length > 0 ? (
                            filteredCards.map((card, index) => {
                                // const isCardSaved = wishlist.some(wishlistCard => wishlistCard.courseID === card.courseID);

                                // const handleSaveIconClick = () => {
                                //     if (user) {
                                //         if (isCardSaved) {
                                //             removeFromWishlist(card.courseID);
                                //         } else {
                                //             addToWishlist(card);
                                //             router.push('/profile/wishlist');
                                //         }
                                //     } else {
                                //         router.push('/login');
                                //     }
                                // };

                                return (
                                    <div key={index} className="col mt-4">
                                        <div className={`card ${cardsCSS.card}`}>
                                            <div className={cardsCSS.cardImgContainer}>
                                                <Image src={card.imageSrc} className={cardsCSS.cardImgTop} style={{height:'155px'}}  alt="card Img" />
                                                {/* <FontAwesomeIcon
                                                    icon={faBookmark}
                                                    className={`${cardsCSS.saveIcon} ${isCardSaved ? cardsCSS.saved : ''}`}
                                                    onClick={handleSaveIconClick}
                                                    style={{ color: isCardSaved ? '#553cdf' : 'white' }}
                                                /> */}
                                            </div>
                                            <div className={cardsCSS.card_body}>
                                                <p className={cardsCSS.CardTitle}>{card.courseTitle}</p>
                                                <div className={cardsCSS.lessons}>
                                                    <div className={cardsCSS.calendar_pen}>
                                                        <Image src={calendar} alt="calendar" />
                                                        <p className={cardsCSS.lesson}>{card.Duration}</p>
                                                    </div>
                                                    <div className={cardsCSS.users}>
                                                        <Image src={userPic} alt="use pic" />
                                                        <p className={cardsCSS.students}>{card.students}</p>
                                                    </div>
                                                </div>
                                                <h5 className={cardsCSS.course_title} onClick={() => handleCardTitleClick(card.courseID)}>{card.text}</h5>
                                                <div className={cardsCSS.starPrice}>
                                                    <div className={cardsCSS.rating}>
                                                        {Array.from({ length: 5 }, (_, starIndex) => (
                                                            <FontAwesomeIcon
                                                                key={starIndex}
                                                                icon={faStar}
                                                                className={starIndex < card.rating ? cardsCSS.filledStar : cardsCSS.emptyStar}
                                                            />
                                                        ))}
                                                    </div>
                                                    <button
                                                        className="btn fw-bold shadow"
                                                        style={{ background: '#553cdf', color: 'white', position: 'relative', bottom: '10px', left: '-8px', border: '1px solid #212529' }}
                                                        onClick={() => handleCardTitleClick(card.courseID)}
                                                    >
                                                        Know More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p className={cardsCSS.noCardsMessage}>No cards available for this category.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeCard;
