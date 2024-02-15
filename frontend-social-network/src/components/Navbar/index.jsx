import { Link, useRoute } from 'wouter'
import Styled from './styles'
import { useUser, useLogout } from '../../hooks'
import { useState } from 'react'

const CustomLink = ({ href, children }) => {
    const [isActive] = useRoute(href)

    return (
        <Link {...{ href }}>
            <Styled.Anchor {...{ href, isActive }}>{children}</Styled.Anchor>
        </Link>
    )
}

const NavBar = () => {
    const { data } = useUser()
    const handleLogout = useLogout()
    const [isDropDOwnOpen, setIsDropDownOpen] = useState(false)

    const toggleDropDown = () => {
        setIsDropDownOpen((prev) => !prev)
    }
    const handleLogoutClick = () => {
        handleLogout()
        setIsDropDownOpen(false)
    }

    return (
        <Styled.Nav>
            <CustomLink href='/' >Main</CustomLink>
            <CustomLink href='/create-post'>New Post</CustomLink>
            {data && (
                <Styled.Userlogout>
                <Styled.User onClick={toggleDropDown}>{data?.username}</Styled.User>
                {isDropDOwnOpen && (
                    <Styled.Dropdown>
                        <CustomLink href='/my-profile'>View profile</CustomLink>
                        <li onClick={handleLogoutClick}>Logout</li>
                    </Styled.Dropdown>
                )}
            </Styled.Userlogout>
            )}
        </Styled.Nav>
    )
}

export default NavBar