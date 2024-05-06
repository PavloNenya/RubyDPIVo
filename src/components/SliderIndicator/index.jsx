import "./index.scss";

// eslint-disable-next-line react/prop-types
const SliderIndicator = ({ totalCards, startIndex, cardsInView }) => {
  const progress = ((startIndex + cardsInView) / totalCards) * 100;

  return (
    <div className="slider-indicator">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default SliderIndicator;
