import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';

import BookCard from '../containers/BookCard';

import Menu from '../containers/Menu';
// import books from './books.json';


class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/MotoShop/books.json').then(({ data }) => {
      console.log(data);
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
