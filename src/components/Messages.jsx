import { useEffect, useState } from 'react';
import Message from './Message';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import {setEmails} from '../redux/appSlice'

const Messages = () => {
  const {SearchText,emails} = useSelector(store=> store.appSlice)
const dispatch = useDispatch()
const [temEmails, setTemEmails] = useState(emails)
  useEffect(() => {
    // for sorting of emails 
    const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))
      // console.log(allEmails);
      dispatch(setEmails(allEmails))
    })
    // cleanup
    return () => unsubscribe();
  },[]);
  useEffect(() => {
    const filteredEmail = emails?.filter((email) => {
      return email?.subject?.toLowerCase().includes(SearchText.toLowerCase()) || email?.to?.toLowerCase().includes(SearchText.toLowerCase()) || email?.message?.toLowerCase().includes(SearchText.toLowerCase())
    })
    setTemEmails(filteredEmail)
  },[SearchText, emails])

  return (
    <div>
      {
        temEmails && temEmails?.map((email) =>  <Message email={email}/>)
      }
        
    </div>
  )
}
export default Messages