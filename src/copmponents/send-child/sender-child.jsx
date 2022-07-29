
const SenderChild = (props) => {
  return ( 
        <>
    <h3>Sender Child</h3>
        <button  onClick={() =>props.onSend("This msg is sent from child to parent component") }>
            Send data to parent
            </button>
           
         
            
        
        </>
     );
}
 
export default SenderChild