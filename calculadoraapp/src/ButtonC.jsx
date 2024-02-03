const ButtonC = ({text = "0", color="secundary" }) => {

    return(
      <button className={`w-100 m-2  btn btn-${color}`}>
        {text}
      </button>
    )
}

  export default ButtonC;

