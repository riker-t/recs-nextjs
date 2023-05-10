import ListHeader from "./ListHeader";
import GridView from './GridView';
import ListView from './ListView';
import React, { useState, useRef, useEffect } from 'react';
import Gallery from "./Gallery";
import ClothingList from "./ClothingList";



export default function List() {
    const [isGridView, setIsGridView] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef(null);

    const updateHeaderHeight = () => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    };

    useEffect(() => {
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, []);

    const handleToggle = (newView) => {
        setIsGridView(newView);
    };
    const metadata = {
        user: 'Teddy Riker',
        profilePhoto: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/117200473_10214234374532366_3438579644135079384_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NQjaxtI_jOAAX-P1at1&_nc_ht=scontent-lga3-2.xx&oh=00_AfDQsyUerw3gwOmfoUpRHcdlj56lT8jH5uMBNRerxlGdbw&oe=64824ED1',
        title: 'Mexico City Recs',
        description: 'A collection of my favorite clothing items from various online stores. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        likes: 120,
        saves: 75,
    };

    return (
        <>
            <ListHeader
                ref={headerRef}
                photoUrl={metadata.profilePhoto}
                listTitle={metadata.title}
                authorName={metadata.user}
                handleToggle={handleToggle}

            />
            <div style={{ marginTop: headerHeight }}>
                {isGridView ? (
                    <Gallery />
                ) : (
                    <ClothingList />
                )}

            </div>
        </>
    )
}