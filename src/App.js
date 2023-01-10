import Compose from './Compose';
import Emaillist from './Emaillist';
import Header from './Header';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux'
import { selectIsOpen } from './features/mailslice'
import Emaildetail from './Emaildetail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import { selectUser, signIn, signOut } from './features/userslice';
import { useEffect } from 'react';
import { authen } from './Firebase';
import Mailbox from './Mailbox';

function App() {
  const isMsgOpen = useSelector(selectIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    authen.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email
        }))
      } else {
        dispatch(signOut())
      }
    })
  }, [])
  return (
    <Router>
      {user ? <div>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Emaillist />} />
            <Route exact path='/inbox' element={<Mailbox />} />
            <Route path='/mail' element={<Emaildetail />} />
          </Routes>
        </div>
        {isMsgOpen && <Compose />}</div>
        : <Login />}

    </Router>
  );
}

export default App;
