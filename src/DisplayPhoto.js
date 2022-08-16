function DisplayPhoto({ character }) {

    return (
        <section className='photoBox'>
            {character.imageUrl === "" ? (
                <h2>No photos found!</h2>) : (
                    <>
                        <h2>Photo</h2>
                        <div className="photoContainer" key={character._id}>
                        <img src={character.imageUrl} alt={character.name} />
                        </div>
                    </>
                )
            }
        </section>
    )
}
export default DisplayPhoto;