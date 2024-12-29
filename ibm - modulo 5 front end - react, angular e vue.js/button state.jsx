const statemanagent = () => {
 const[name, setName] = useState('juan');
 const [buttonClick,setbuttonclicked] = useState(false);
 const updatename = () => {
  setName('juan perri');
 setbuttonclicked(true);
  };
return (
 <>
 <h1>state managnet using useState</h1>
  <p>o nome e {juan}</p>
  <button onClick={updatename} disabled={buttonClick}> clique para a atualizarr</button>
</>
);
}

