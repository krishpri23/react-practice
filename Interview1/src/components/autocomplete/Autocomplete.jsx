/** Autocomplete search bar */

import { useRef } from 'react';
import { useEffect, useState } from 'react';

export default function Autocomplete() {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [showContainer, setShowContainer] = useState(false);
  const [cache, setCache] = useState(new Map());
  const inputRef = useRef(null);
  const containerRef = useRef(null);

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
  const handleSuggestionClick = (e) => {
    const clickedName = e.target.textContent;
    setInputVal(clickedName);
    setShowContainer(false);
  };

  const handleBlur = (e) => {
    console.log(e, 'blyr gabdke');
    // if focus moving to suggestions container,
    if (
      containerRef.current &&
      containerRef.current.contains(e.relatedTarget)
    ) {
      console.log(e.relatedTarget, 'related target');
      return;
    }
    setShowContainer(false);
  };

  //* this will usually trigger an onblur, but we are negating it

  const handleMouseDown = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Autocomplete search bar</h1>
      <input
        type="text"
        name="search"
        ref={inputRef}
        className="search-input"
        value={inputVal}
        onBlur={(e) => handleBlur(e)}
        onChange={(e) => handleChangeInput(e.target.value)}
        onFocus={() => setShowContainer(true)}
      />

      {showContainer && inputVal && (
        <div
          ref={containerRef}
          className="matching-container"
          onClick={(e) => handleSuggestionClick(e)}
        >
          {data.length > 0 ? (
            data?.map((item) => (
              <span
                className="matching-item"
                key={item.id}
                onMouseDown={handleMouseDown}
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
