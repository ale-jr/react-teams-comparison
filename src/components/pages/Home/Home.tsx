const HomePage: React.FC = () => {
  return (
    <>
      {Array.from(Array(50)).map((_, key) => (
        <p key={key}>Scroll me! {key}</p>
      ))}
    </>
  );
};

export default HomePage;
