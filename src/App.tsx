import './App.css'

function App() {
  // diff betewen dates in days

const inital = new Date('2023-11-20');
const today = new Date();

// Calculate the difference in milliseconds
const differenceInMilliseconds = inital - today;

// Convert milliseconds to days
const days = Math.trunc(Math.abs(differenceInMilliseconds / (1000 * 60 * 60 * 24)));


  return (
    <>
      <h1>Cristy, Te amo 🩷</h1>
      <div className="card">
        <p>
          <p>Tenemos {days} dias de novios</p>
        </p>
      </div>
    </>
  )
}

export default App
