import WithCounter from "../hoc/with-counter";

const HoverCounter = (props) => {
  return (
    <>
      <h2 onMouseOver={props.increment}>Count: {props.count} </h2>
      Created By:{props.createdBy}
    </>
  );
};

export default WithCounter(HoverCounter);
