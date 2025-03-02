import PropTypes from "prop-types"
function ImageWithText({imageUrl, text}){
    return(
        <div className="imageWithText">
            <img src={imageUrl} alt="" />
            <p>{text}</p>
        </div>
    )
}
ImageWithText.PropTypes = {
    imageUrl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
export default ImageWithText;