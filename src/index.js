import React from 'react';
import ReactDom from 'react-dom';

//css
import './index.css';
//Setup Vars
const books = [
    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/71Ih2rWClAL._AC_UL200_SR200,200_.jpg',
        title: 'Harry Potter and the Goblet of Fire',
        author: 'JK. Rowlling',
    },
    {
        id: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg',
        title: 'Humans',
        author: 'Brandon Stanton',
    }, 
    {
        id: 3,
        img: 'https://images-na.ssl-images-amazon.com/images/I/9147oFAfHlL._AC_UL200_SR200,200_.jpg',
        title: 'Rhythm of War (The Stormlight Archive, 4)',
        author: 'Brandon Sanderson',
    }
];

function BookList(){
    return (
        <section className='booklist'>{books.map((book)=>{
            return (
                <Book key ={book.id} {...book}></Book>
            );
            })}
        </section>
    );
}
const Book = ({img, title, author}) => {
    //const {img, title, author} = props;
    return (
        <article className='book'>
            <img src={img} alt=""/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick></button>
        </article>
    );
};





ReactDom.render(<BookList/>,document.getElementById('root'));