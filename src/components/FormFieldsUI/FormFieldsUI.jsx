/* eslint-disable react/prop-types */
const FormFieldsUI = ({ data }) => {
  // console.log(data);
  if (!data || !data.fields) {
    console.error('Data or fields are undefined.');
    return null;
  }

  return (
    <form>
      {data.fields.map((field, index) => (
        <DynamicFormField key={index} field={field} />
      ))}
    </form>
  );
};

const DynamicFormField = ({ field }) => {
  const { label, required, type, errorMessage } = field;

  const renderInput = () => {
    switch (type) {
      case 'single':
        return <input type='text' placeholder={label} required={required} />;
      case 'multiline':
        return <textarea placeholder={label} required={required}></textarea>;
      case 'radio':
        return (
          <div>
            {field.options.map((option, index) => (
              <label key={index}>
                <input type='radio' name={label} required={required} />
                {option}
              </label>
            ))}
          </div>
        );
      case 'smiley':
        // Example rendering for smiley rating (you might use icons here)
        return <div>{/* Render smiley rating input */}</div>;
      case 'star':
        // Example rendering for star rating (you might use a star rating library)
        return <div>{/* Render star rating input */}</div>;
      case 'numeric':
        return <input type='number' placeholder={label} required={required} />;
      default:
        return null;
    }
  };

  return (
    <div className='form-group'>
      <label>
        {label} {required && '*'}
      </label>
      {renderInput()}
      {errorMessage && <span className='error'>{errorMessage}</span>}
    </div>
  );
};

export default FormFieldsUI;
