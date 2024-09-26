import "./Timeline.css";
const Timeline = () => {
  return (
    <div className="relative py-20">
      <div className="timeline">
        <svg
          width="800"
          height="400"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            d="M 400 300 L 400 300 Q 650 350 700 200"
            stroke="black"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Timeline;
