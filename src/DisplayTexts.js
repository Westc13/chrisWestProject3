function DisplayTexts({ character }) {
  return (
      <div className='textBox'>
      <h2>Films</h2>
      {character.films.length === 0 ? <p>no film appearances!</p> : <p>{character.films}</p> }
      <h2>TV shows</h2>
      {character.tvShows.length === 0 ?
        <p>no tv show appearances!</p>
       :
        <p>{character.tvShows}</p>
      }
    </div>
  );
}
export default DisplayTexts;
