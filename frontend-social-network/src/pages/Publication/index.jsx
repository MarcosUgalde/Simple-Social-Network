import NavBar from "../../components/Navbar"
import { useLocation } from 'wouter';
import { useDelete, useId, useLike, useOnePublication, useUser } from "../../hooks"
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal";

const Publication = () => {
    const id = useId()
    const [, setLocation] = useLocation();
    const publication = useOnePublication({ publicationId: id})

    const user = useUser().data?.username

    const isAuthor = () => {
        if(user === publication?.data?.content[0]?.username) return true
        return false
    }

    const doLike = useLike({ publicationId: id })

    const handleLikeClick = async() => { 
        await doLike()
    }

    const handleUpdateClick = () => {
        setLocation(`/update/${id}`);
      };

    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false)
    const [publicationToDelete, setPublicationToDelete] = useState(null)
    
    const doDelete = useDelete()

    const opdenDeleteModal = (id) => {
        setPublicationToDelete(id)
        setDeleteModalVisible(true)
        return id
    }

    const handleDelete = () => {
        if(publicationToDelete) {
            doDelete(publicationToDelete)
        }
        setDeleteModalVisible(false)
    }

    return (
        <>
            <NavBar />
            <h1>{publication?.data?.content[0]?.title}</h1>
            <p>{publication?.data?.content[0]?.post_text}</p>
            <p>Liked by {publication?.data?.content[0]?.likes} people</p>
            <p>{publication?.data?.content[0]?.username}</p>
            <button onClick={handleLikeClick}>Like</button>
            {isAuthor() && (
               <button onClick={handleUpdateClick}>Update</button>
            )}
            {isAuthor() && (
                <button onClick={() => opdenDeleteModal(id)}>Delete</button>
            )}
            {isDeleteModalVisible && (
                <DeleteModal publicationId={publicationToDelete} isVisible={isDeleteModalVisible} onClose={() => setDeleteModalVisible(false)} onDelete={handleDelete} />
            )}
        </>
    )
}

export default Publication