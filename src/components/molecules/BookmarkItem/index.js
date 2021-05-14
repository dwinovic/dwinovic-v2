import React from 'react';
import { setOnlyDate } from '../../../utils';
import TagCapsule from '../../atoms/TagCapsule';

const BookmarkItem = ({ title, desc, date, tags, image, href }) => {
  return (
    <a target="_blank" href={href} className="bookmark-item">
      <div>
        <h2 className="title">{title}</h2>
        <div className="tags-wrapper">
          {tags.map((tag) => (
            <TagCapsule textTag={tag.tag_names} key={tag.id} />
          ))}
        </div>
        <p className="desc">{desc}</p>
      </div>
      <div className="flex">
        <p className="date-upload">uploaded: {setOnlyDate(date)}</p>
      </div>
    </a>
  );
};

export default BookmarkItem;
