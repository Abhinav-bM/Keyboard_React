const Key = ({
  alphabet,
  setVal,
  isUpper,
  setIsUpper,
  removeLastChar,
  entered,
  shift,
  isSpace,
}) => {
  const handleClick = () => {
    switch (alphabet) {
      case "Backspace":
        removeLastChar();
        break;
      case "Enter":
        entered();
        break;
      case "Shift":
        shift();
        break;
      case "CapsLock":
        setIsUpper((prev) => !prev);
        break;
      case "Space":
        setVal((prev) => (prev += " "));
        break;
      default:
        setVal((prev) => prev + (isUpper ? alphabet : alphabet.toLowerCase()));
        setIsUpper(false);
        break;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`key-button ${isSpace ? "space-button" : ""}`}
    >
      {alphabet}
    </button>
  );
};

export default Key;
