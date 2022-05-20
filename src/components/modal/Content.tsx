import React, { FC, useState } from 'react'
import Modal from './Modal'

import './style.css'

const Content: FC = () => {
    const [modalActive, setModalActive] = useState(false)

    const openModal = (active: boolean) => {
        console.log(modalActive);
        setModalActive(active)
    }

    return (
    <section className='container'>
        <article className='content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas amet corporis quidem ut provident modi voluptate deleniti ad? Inventore modi ut vel architecto quibusdam nobis. Reiciendis, quisquam praesentium? Earum, nemo dolorum asperiores optio corrupti inventore dolore repudiandae soluta fuga illo accusamus libero quo atque quaerat reiciendis nisi, magnam tenetur.</p>
            <button className='open-btn' onClick={() => openModal(true)}>Open Modal</button>
        </article>
        <Modal active={modalActive} setActive={openModal}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos facilis, reprehenderit ab aspernatur sequi.</p>
        </Modal>
    </section>
    )
}

export default Content