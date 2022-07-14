import React from 'react';
import TreeItem from './TreeItem';
import '../App.css';

const Tree = ({ data = [] }) => {
  return (
    <div className='d-tree'>
      <ul className='d-flex d-tree-container flex-column'>
        {data.map((tree) => {
          return <TreeItem key={tree.id} item={tree} />;
        })}
      </ul>
    </div>
  );
};

export default Tree;
