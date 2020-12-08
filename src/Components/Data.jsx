import { useSelector, useDispatch } from 'react-redux';
import { updateValue } from './actions';
const Data = () => {

    const initialData = useSelector(state => state.inputValues);
    
    const dispatch = useDispatch();

    const inputData = (val) => {
        if(!isNaN(val))  {
            const estimate =  parseFloat((val/100)*(-1.16)).toFixed(2);
            const fees = parseFloat(estimate/10).toFixed(2);
            dispatch(
                updateValue(
                    {
                        input : val, 
                        estimated:estimate,
                        fees : fees
                    }
                )
            )
        }
    }
    return (
        <div className="text_class">
            with { initialData.input !=='' && initialData.input !=='0'  ? <span>€</span> : ''}
            <input type="text" className="input_text" value={initialData.input !=='0' ? `${initialData.input}` : ''} onChange={(e) => inputData(e.target.value)} />
            <span>
                your estimated earnings could be {initialData.estimated !=='' && initialData.estimated !=='0.00'  ? <span>€</span> : ''}
            </span>
            <input type="text" className="input_text" value={initialData.estimated !=='0.00' ? `${initialData.estimated}` : ''} onChange={() => console.log()} />
            <span>
                * per year with fees of just { initialData.fees !=='' && initialData.fees !=='0.00' ? <span>€</span> : ''}
            </span>
            <input type="text" className="input_text" value={initialData.fees !=='0.00' ? initialData.fees : ''} onChange={() => console.log() }/>
            <span>
                 per year
            </span>
        </div>
    );
}

export default Data;