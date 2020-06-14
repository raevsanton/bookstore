import React from "react";
import "./ItemBook.scss"
import { ItemBookProps } from "./ItemBookTypes";

const ItemBook: React.FC<ItemBookProps> = ({
    book
}) => {
    return (
        <div className="book__item">
            <div>
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="cover" />
            </div>
            <div className="book__info">
                <h4>{book.volumeInfo.title}</h4>
                {book.volumeInfo.authors.map((author : string, index : number) => {
                    return <p key={index}>{author}</p>
                })}
            </div>
        </div>
    );
};

export default ItemBook;