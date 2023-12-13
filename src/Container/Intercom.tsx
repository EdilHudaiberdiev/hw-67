import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {add, checkValue, deleteSymbol} from './IntercomSlice';
import {RootState} from "../app/store";

const Intercom = () => {

  const [buttons] = useState<(string)[]>(["0", "1","2","3","4","5","6","7","8","9", "Enter", "<"]);
  const Value = useSelector((state: RootState) => state.intercom.value);
  const checkCombResult = useSelector((state: RootState) => state.intercom.checkComb);
  const dispatch = useDispatch();
  const onClickHandler = (btn: string) => {

    if (btn === '<') {
      dispatch(deleteSymbol());
    } else if (btn === 'Enter') {
      dispatch(checkValue());
    } else {
      dispatch(add(btn));
    }
    console.log(btn);

  };

  return (

    <div>
        {checkCombResult !== null  ?
            <>
              {checkCombResult ? <p>Door open</p> : <p>Wrong password</p>}
             </>
            : null
        }
      <input type="password" value={Value} readOnly={true}/>

      <div className="d-flex" >
        {buttons.map(btn => (
          <button key={btn} type="button" onClick={() => onClickHandler(btn)} >{btn}</button>
        ))}
      </div>
    </div>
  );
};

export default Intercom;