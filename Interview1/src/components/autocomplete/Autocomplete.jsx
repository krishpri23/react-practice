/** Autocomplete search bar */

import { useEffect, useState } from 'react';

export default function Autocomplete() {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [showContainer, setShowContainer] = useState(false);
  const [cache, setCache] = useState(new Map());

  const fetchData = async () => {
    // has cache
    if (cache.has(inputVal)) {
      console.log('using cache data');
      setData(cache.get(inputVal));
      return;
    }

    console.log('using api call');
    const data = await fetch(
      'https://dummyjson.com/recipes/search?q=' + inputVal
    );
    const result = await data.json();
    setData(result.recipes);

    //set cache
    setCache((prev) => {
      const newCache = new Map(prev);
      newCache.set(inputVal, result.recipes);
      return newCache;
    });
  };

  // debouncing
  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [inputVal]);

  const handleChangeInput = (val) => {
    setInputVal(val);
    setShowContainer(val);
  };
  const handleSuggestionClick = (name) => {
    setInputVal(name);
    setShowContainer(false);
  };

  const handleBlur = () => {
    setShowContainer(false);
  };
  return (
    <div>
      <h1>Autocomplete search bar</h1>
      <input
        type="text"
        name="search"
        className="search-input"
        value={inputVal}
        onBlur={handleBlur}
        onChange={(e) => handleChangeInput(e.target.value)}
        onFocus={() => setShowContainer(true)}
      />

      {showContainer && inputVal && (
        <div className="matching-container">
          {data.length > 0 ? (
            data?.map((item) => (
              <span
                className="matching-item"
                key={item.id}
                onClick={() => handleSuggestionClick(item.name)}
              >
                {' '}
                {item.name}{' '}
              </span>
            ))
          ) : (
            <p> No matches found </p>
          )}
        </div>
      )}
    </div>
  );
}
