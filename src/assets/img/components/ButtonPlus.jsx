const ButtonPlus = ({ setCounter, counter }) => {
  return (
    <button
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      +
    </button>
  );
};
export default ButtonPlus;
