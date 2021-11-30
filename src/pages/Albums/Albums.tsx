import React, { useContext, useEffect, useState } from 'react'
import api from '../../api'
import { GlobalContext } from '../../GlobalContext'
import styles from '../../App.module.scss'

interface AlbumsInterface extends Array<AlbumsInterface> {
    userId: number
    id: number
    title: string
}

function Albums() {
    const [albums, setAlbums] = useState<AlbumsInterface | null>()
    const { users } = useContext(GlobalContext)

    useEffect(() => {
        async function getAlbums() {
            const { data }: { data: AlbumsInterface } = await api.get('albums')
            setAlbums(data)
            console.log(data)
        }
        getAlbums()
    }, [])

    return (
        <section>
            <h1>My Albums</h1>
            {albums ? (
                <div className={styles.cards}>
                    {albums.map(({ title, userId, id }) => (
                        <div className={styles.card} key={id}>
                            <p className={styles.title}>
                                {title.substring(0, 30)}
                            </p>
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

export default Albums
