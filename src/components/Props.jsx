import PropTypes from 'prop-types';

//* Parent component  
// const Props = ()  => {
//   return <Greeting name="Pranav" />;
// };

//* Child component that receives props
// const Greeting = (props) => {
//   return <h1>Hello, {props.name}!</h1>;
// }

const Props = ({ name, age })  => {
  return <h1>Hello, {name}. You are {age} years old.</h1>;
}

Props.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

Props.defaultProps = {
  name: "Guest",
  age: 25,
};

export default Props;