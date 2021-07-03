import React from 'react';
import { Container } from './styles';
import { categories } from '../../utils/categories';
import Category from '../Category';

const CategorySelect = ({ categorySelect, setCategory }) => {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          Icon={category.icon}
          checked={category.id == categorySelect}
          onPress={() => setCategory(category.id)}
        />
      ))
      }
    </Container>
  );
}

export default CategorySelect;