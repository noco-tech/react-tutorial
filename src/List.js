export const List = ({ langs }) => {
  return (
    <div>
      <h4></h4>

      {langs.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
};
