import recommendations from '../recommendations-mxc.json'
import ListMetadata from "@components/ListMetadata";
import styles from './ClothingList.module.css'
import ListToggle from '@components/ListToggle';
import React, { useState } from 'react';

import GridView from './GridView';
import ListView from './ListView';


export default function ClothingList() {
  const [isGridView, setIsGridView] = useState(true);

  const handleToggle = (newView) => {
    setIsGridView(newView);
  };





  const metadata = {
    user: 'Jane Doe',
    profilePhoto: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5mbHVlbmNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    title: 'My Favorite Clothing Recommendations',
    description: 'A collection of my favorite clothing items from various online stores. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    likes: 120,
    saves: 75,
  };

  return (
    <div className={styles.container}>
      <ListMetadata {...metadata} />
      <div>
        <ListToggle onToggle={handleToggle} />
        {isGridView ? (
          <GridView />
        ) : (
          <ListView />
        )}

      </div>
    </div>
  );
};
