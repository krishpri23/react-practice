import { useEffect } from 'react';
import { useRef, useState } from 'react';

/** OTP accepts number, entering 1 number moves to next box and on. when deleting one number it moves back to the previous box
 * For each inputArr, we need to bind the input to each number
 * loop through the inputArr and create a input node
 * when page is refreshed, input focus on the 1st input box
 * one number per box, so when i type next num move to next box
 */
export default function OTP({ count }) {
  const [inputArr, setInputArr] = useState(new Array(count).fill(''));
  const inputRef = useRef([]); // ref for each input

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleOnChange = (val, index) => {
    console.log(val);
    if (isNaN(val)) {
      return;
    }

    const newVal = val.trim();
    const newArr = [...inputArr];
    newArr[index] = newVal;
    setInputArr(newArr);

    // move the focus to next input box
    if (newVal !== '' && index < count - 1) {
      // delaying to give time for react to update
      setTimeout(() => {
        inputRef.current[index + 1]?.focus();
      }, 0);
    }
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value) {
      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <section>
      <h1> OTP </h1>
      <div>
        {inputArr.map((num, i) => (
          <input
            style={{
              width: '30px',
              height: '20px',
              textAlign: 'center',
              margin: '0px 5px',
              background: 'whitesmoke',
              border: 'none',
              color: 'black',
            }}
            type="text"
            value={inputArr[i]}
            key={i}
            minLength={1}
            maxLength={1}
            onKeyDown={(e) => handleOnKeyDown(e, i)}
            onChange={(e) => handleOnChange(e.target.value, i)}
            ref={(el) => (inputRef.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
}
