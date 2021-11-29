import React, { useContext, useEffect, useState } from 'react'
import api from '../../api'
import { GlobalContext } from '../../GlobalContext'

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
                <div>
                    {albums.map(({ title, userId }) => (
                        <div>
                            <p>{title}</p>
                            <div>
                                {users.map(
                                    (user) =>
                                        user.id === userId && (
                                            <div>{user.name}</div>
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
