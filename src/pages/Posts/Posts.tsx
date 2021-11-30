import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../GlobalContext'
import api from '../../api'
import styles from '../../App.module.scss'

interface PostsInterface extends Array<PostsInterface> {
    userId: number
    id: number
    title: string
    body: string
}

function Posts() {
    const [posts, setPosts] = useState<PostsInterface | null>()
    const { users } = useContext(GlobalContext)

    useEffect(() => {
        async function getPosts() {
            const { data }: { data: PostsInterface } = await api.get('posts')
            setPosts(data)
        }
        getPosts()
    }, [])

    return (
        <section>
            <h1>My Posts</h1>
            {posts ? (
                <div className={styles.cards}>
                    {posts.map(({ title, userId, id }) => (
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

export default Posts
