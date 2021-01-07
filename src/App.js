import './App.css';
import ReCAPTCHA from 'react-google-recaptcha';

function onChange(value) {
  console.log('Captcha value:', value);
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <ReCAPTCHA
          sitekey='6LfsZiQaAAAAAHtMS431CrVG9xGtS5gZTSxgSUx8'
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default App;
