import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';

const Booklist = () => {
 return (
  <section className="booklist">
   return <h2 style={{ color: 'Yellow', fontSize: '4rem', marginTop: '.5rem' , padding: '0 rem'}}>Book Lists</h2>;
   <Book />
   <Book />
   <Book />
   <Book />
   <Book />
   <Book />
  </section>
 );
};

const Book = () => {
 return <article className="book">
  
  <Image />
  <Title />
  <Author />
 </article>
}


const Image = () => <img src = './images/book.jpg' alt ="Atomic Habits" />;
const Title = () => <h2>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h2>;
const Author = () => {
 return <h4>James Clear </h4>;
};


const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);