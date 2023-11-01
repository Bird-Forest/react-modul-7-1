import React, { useEffect } from 'react';
import { ReactComponent as IconSearch } from '../components/search.svg';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import Loader from 'components/Loader';
import ErrorMessage from 'components/Error';
import { useDispatch, useSelector } from 'react-redux';
import { requestPosts } from 'redux/thunkAPI';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // postData- це ім'я ред'юсера в стори,  posts - ім'я слайсу
  const posts = useSelector(state => state.postsData.posts);
  const isLoading = useSelector(state => state.postsData.isLoading);
  const error = useSelector(state => state.postsData.error);
  const location = useLocation();
  // console.log(location);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!query) return;

    dispatch(requestPosts(query));
  }, [query, dispatch]);

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.currentTarget.elements.search.value;
    console.log(searchValue);
    setSearchParams({ query: searchValue });
  };
  // if (!posts) return;
  // console.log(posts);
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <p>SearchPage</p>
        <input type="text" name="search" required />
        <button type="submit">
          <IconSearch />
        </button>
      </form>
      <section>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {posts !== null && (
          <Link
            state={{ from: location }}
            to={`/post-details/${posts.id}`}
            key={posts.id}
          >
            <span>Post Id: {posts.id}</span>
            <h2>Post Title: {posts.title}</h2>
            <p>Post Body: {posts.body}</p>
          </Link>
        )}
      </section>
    </div>
  );
}
