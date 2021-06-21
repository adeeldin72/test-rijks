
// Way 1 and Way 2
// const PieceOfArt = (props) => {

// Way 3
const PieceOfArt = ({ longTitle, imgPath, alt }) => {

    return (
        <div>
            {/* Way 1 */}
            {/* <h2>{props.longTitle}</h2>
            <img src={props.imgPath} alt={props.title} /> */}

            {/* Way 2 */}
            {/* <h2>{props.imgData.longTitle}</h2> */}
            {/* <img src={props.imgData.webImage.url} alt={props.imgData.title} /> */}

            {/* Way 3 */}
            <h2>{longTitle}</h2>
            <img src={imgPath} alt={alt} />
        </div>
    )
}


export default PieceOfArt;