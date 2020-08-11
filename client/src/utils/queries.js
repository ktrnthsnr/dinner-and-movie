import gql from 'graphql-tag';

export const QUERY_MOVIES = gql`
  query getMovies($category: ID) {
    movies(category: $category) {
      _id
      name
      description
      time
      select
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_MOVIES = gql`
  {
    movies {
      _id
      name
      description
      time
      select
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    orders {
      _id
      selectDate
      movies {
        _id
        name
        description
        time
        select
        image
      }
    }
  }
}
`;