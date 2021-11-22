import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { signUp } from '../../actions';

const SignUp = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const onSubmit = (formProps) => {
    dispatch(
      signUp(formProps, () => {
        navigate('/feature');
      })
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        {/*autocomplate dont working for v8+ or for my browser(google setting) */}
        <Field name='email' type='text' component='input' autoComplete='off' />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name='password'
          type='password'
          component='input'
          autoComplete='something-unsupported'
        />
      </fieldset>
      <div>{error}</div>
      <button>Sign up</button>
    </form>
  );
};

export default reduxForm({ form: 'signup' })(SignUp);
