import {useState} from 'react';

const Intercom = () => {

  const [buttons, setButtons] = useState<(string | number)[]>([1,2,3,4,5,6,7,8,9, "Enter", "<"]);

  const onClickHandler = (btn) => {
    console.log(btn);
  };

  return (

    <div>
      <input type="text"/>

      {buttons.map(btn => (
        <button key={btn} type="button" onClick={() => onClickHandler(btn)} >{btn}</button>
      ))}
    </div>
  );
};

export default Intercom;