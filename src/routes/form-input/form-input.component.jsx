import './form-input.styles.scss'
const FormInput =({label,inputoption})=>{
return(<>
<div className="group">
<input className="form-input"{...inputoption} />
{label && (
<label className={`${inputoption.value.length?'shrink':''}   form-input-label`}>
    {label}
    </label>

)}
</div>
</>)
}

export default FormInput