import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

/** Modal should close when clicked outside of the window
 *
 *
 */
export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const node = useRef(null);

  const handleClick = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleOutsideClick = (e) => {
    console.log(e, 'inside outside click ');
    if (node.current && node.current.contains(e.target)) {
      handleClick();
    }
  };
  useEffect(() => {
    if (showModal) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showModal]);

  return (
    <div>
      <h1> Modal example</h1>
      <div>
        <button onClick={handleClick}> Open Modal </button>
      </div>

      {showModal && (
        <div className="modal-overlay" ref={node}>
          <h2> This is a modal </h2>
          <button onClick={handleClick}>Close MOdal </button>
        </div>
      )}
    </div>
  );
}
