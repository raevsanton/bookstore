import React from "react";
import "./ItemBook.scss"
import { ItemBookProps } from "./ItemBookTypes";

const ItemBook: React.FC<ItemBookProps> = ({
    book
}) => {
    return (
        <div className="book__item">
            <div>
                {/* <img src={book.cover} alt="cover" /> */}
            </div>
            <div className="book__info">
                <h4>{book.title}</h4>
                {book.authors.map((author : string, index : number) => {
                    return <p key={index}>{author}</p>
                })}
            </div>
        </div>
    );
};

export default ItemBook;