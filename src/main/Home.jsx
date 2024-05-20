import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Notacces from '../components/Notacces'
const Home = () => {
  const [status, setStatus] = useState(localStorage.statusLogin ? localStorage.getItem('statusLogin') : false)
  // const statusLogin=localStorage.getItem('statusLogin')

  return (
    <div className='overflow-x-hidden'>{status ?
      <div>
        <Navbar link='/vila'/>
        <div className='h-[200vh] pt-[180px] wrapper'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis officiis libero esse! Odio excepturi recusandae, laborum tempora, labore asperiores sed inventore accusamus illum optio exercitationem distinctio voluptas corrupti repellendus!
          Tenetur labore at doloribus omnis, suscipit eos nihil minima optio modi distinctio, maiores deleniti. Pariatur, consequatur explicabo ex similique quae distinctio minus vel, quasi atque ratione adipisci molestias nostrum repellendus!
          Officiis eius recusandae provident, est porro aspernatur doloribus? Officia animi nesciunt quibusdam qui? Suscipit, odit alias qui nulla recusandae a, sit, officiis iste delectus animi adipisci eveniet! Reiciendis, consequuntur soluta?
          Impedit ut suscipit perferendis. Accusamus ullam repudiandae aperiam possimus reiciendis quaerat animi eum, saepe, esse reprehenderit cupiditate deleniti! Beatae, nemo laboriosam impedit sint et molestiae aliquid amet commodi sequi quam.
          Ducimus, temporibus. Quos similique molestias natus eveniet quam consequatur repudiandae, autem perferendis fuga maxime possimus itaque iste architecto blanditiis doloremque, fugit quis voluptates adipisci officiis necessitatibus in. Soluta, provident expedita!
          Quasi in fugiat facere suscipit, laborum minus? Sit impedit commodi eveniet? Itaque totam voluptates iste earum asperiores dignissimos ea iusto minima? Esse nobis facilis dolores voluptates a saepe, nostrum rerum.
          Iste sunt perspiciatis dolorum esse, dolores, excepturi possimus officiis, aspernatur assumenda perferendis quas reprehenderit molestiae accusamus sapiente. Magni, obcaecati! Aliquam, deleniti! Rerum facilis laudantium vero nemo recusandae earum sunt dolorem?
        </div>
      </div>
      : <Notacces />}</div>
  )
}

export default Home
