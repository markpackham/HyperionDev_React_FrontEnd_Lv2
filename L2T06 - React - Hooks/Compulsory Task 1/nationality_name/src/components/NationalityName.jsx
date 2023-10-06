import { useEffect, useRef, useState } from "react";
import FetchCountryId from "./FetchCountryId";

export default function NationalityName() {
  const [username, setUsername] = useState("Neil");
  const inputRef = useRef();

  // Input focus on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        defaultValue={username}
        id="userInputField"
        // Alternate solution to using the Button if I wanted the app to be more dynamic as the user types
        // Pay attention to what the user types in the input field & any changes
        // onChange={(e) => setUsername(e.target.value)}
      />

      {/* Change the username once the input field has been filled and the button clicked */}
      <button
        onClick={() =>
          setUsername(document.getElementById("userInputField").value)
        }
      >
        Fetch most likely country
      </button>

      {/* FetchCountryId is a function component so must be passed as a prop rather than as a regular hook or normal function */}
      <h1>Most likely country for that name: {FetchCountryId({ username })}</h1>
    </div>
  );
}
