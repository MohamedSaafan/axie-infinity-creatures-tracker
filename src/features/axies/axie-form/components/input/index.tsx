interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  type: string;
}
const Input: React.FC<Props> = ({ value, handleChange, id, type }) => {
  return (
    <div className='mb-3 row'>
      <label htmlFor={id} className='col-sm-2 col-form-label'>
        Axie Number
      </label>
      <div className='col-sm-10'>
        <input
          className='form-control'
          type={type}
          value={value}
          onChange={handleChange}
          id={id}
        />
      </div>
    </div>
  );
};

export default Input;
