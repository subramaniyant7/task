import { useSelector, useDispatch } from 'react-redux';
import { updateValue } from './actions';
import { initialRange, endRange } from '../Config'

const Slider = () => {

    const initialData = useSelector(state => state.inputValues);

    const dispatch = useDispatch();

    const updateSlider = (value) => {

        const estimate =  parseFloat((value/100)*(-1.16)).toFixed(2);
        const fees = parseFloat(estimate/10).toFixed(2);
        dispatch(
            updateValue(
                {
                    input :value, 
                    estimated:estimate,
                    fees : fees,
                }
            )
        )
    }
    return (
        <div className="slidecontainer">
            <span>€{initialData.input !=='' ? initialData.input : initialRange}</span>
            <input type="range" min="0" max="250000" 
                value={initialData.input !=='' ? initialData.input : '0'} className="slider" 
                onChange={(e)=>updateSlider(e.target.value)}/>
            <span>€{endRange}</span>
        </div>
    );
}

export default Slider;