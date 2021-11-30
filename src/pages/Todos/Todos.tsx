import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../GlobalContext'
import api from '../../api'
import styles from '../../App.module.scss'

interface TodosInterface extends Array<TodosInterface> {
    userId: number
    id: number
    title: string
    completed: boolean
}

function Todos() {
    const [todos, setTodos] = useState<TodosInterface | null>()
    const { users } = useContext(GlobalContext)

    useEffect(() => {
        async function getTodos() {
            const { data }: { data: TodosInterface } = await api.get('todos')
            setTodos(data)
            console.log(data)
        }
        getTodos()
    }, [])

    return (
        <section>
            <h1>My Todos</h1>
            {todos ? (
                <div className={styles.cards}>
                    {todos.map(({ title, userId, id }) => (
                        <div className={styles.card} key={id}>
                            <p className={styles.title}>{title}</p>
                            <div>
                                {users.map(
                                    (user) =>
                                        user.id === userId && (
                                            <div key={user.id}>{user.name}</div>
                                        ),
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Not found...</div>
            )}
        </section>
    )
}

export default Todos
