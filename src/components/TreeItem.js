import React, { useState } from 'react';
import Tree from './Tree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/fontawesome-free-solid';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid';
import { faCircle } from '@fortawesome/fontawesome-free-solid';
import '../App.css';

const TreeItem = ({ item }) => {
  // state to check if child is visible or not
  const [childVisible, setChildVisible] = useState(false);

  // to check if the tree node has a child or not
  const hasChild = item.children ? true : false;

  return (
    <li className='d-tree-node border-8'>
      <div
        className='d-flex '
        onClick={(e) => setChildVisible((child) => !child)}
      >
        {hasChild && (
          <div className={`d-inline ${childVisible ? 'active' : ''}`}>
            <FontAwesomeIcon
              className='liFont'
              icon={childVisible ? faCaretDown : faCaretRight}
            />
          </div>
        )}
        {!hasChild && (
          <div className=''>
            <FontAwesomeIcon className='liFont fa-2xs' icon={faCircle} />
          </div>
        )}

        <div className='d-inline'>{item.name}</div>
      </div>

      {/* this will render till the last child */}
      {hasChild && childVisible && (
        <div className='d-tree-content'>
          <ul className='d-flex d-tree-container flex-column'>
            <Tree data={item.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default TreeItem;
