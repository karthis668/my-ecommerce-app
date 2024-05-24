/* eslint-disable react/prop-types */
import ReactStarsRating from 'react-awesome-stars-rating';

function Rating(props) {
  return (
    <ReactStarsRating
    className="rating"
    isEdit={false}
    // eslint-disable-next-line react/prop-types
    value={props.value}
    selectedValue={props.value}
  />
  )
}

export default Rating