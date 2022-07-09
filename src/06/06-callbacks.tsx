import React from 'react';

const User = () => {
   const deleteUser = () => {
      alert(`удаляем пользователя `)
   }

   const SaveeUser = () => {
      alert(`сохраняем пользователя `)
   }

   return (
     <div>
        <div>Dumuch</div>
        <button onClick={deleteUser}>delete</button>
        <button onClick={SaveeUser}>save</button>

     </div>
   )
}

export default User