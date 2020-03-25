import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';

import BookCard from '../containers/BookCard';

import Menu from '../containers/Menu';

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
<<<<<<< HEAD
    axios.get('/books.json').then(({ data }) => {
=======
    axios.get('/gh-pages/books.json').then(({ data }) => {
      console.log(data);
>>>>>>> parent of 054f8ab... herznaet
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;
      return (
      <Container>
        <Menu />
     
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
