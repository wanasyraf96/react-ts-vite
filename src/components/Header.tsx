import React from 'react'
import { Link } from 'react-router-dom'
import { SearchOutlined, ShoppingBasket } from '@mui/icons-material'
import '../styles/Header.scss'

function NavItem() {
	return <>
		<ul className="ul-items">
			<li className="li-items">
				<Link to='/women'>Women</Link>
				<Link to='/men'>Men</Link>
				<Link to='/denim'>Denim</Link>
				<Link to='/shop'>The Gift Shop</Link>
				<Link to='/about'>About</Link>
			</li>
		</ul>
	</>
}

function Logo() {
	return <>
		<div className="logo">
			<h1>eshopland</h1>
		</div>
	</>
}

const Header = () => {
	return (
		<>
			<div className="header">
				<nav>
					<NavItem />
					<Logo />
					<div className="right">
						<div className="search">
							<SearchOutlined className='search-icons' />
							<button className='search-btn'>Search</button>
						</div>
						<div className="right-button">
							<button>
								<Link to='/login'>Log In</Link>
							</button>
							<button>
								<Link to='/sign-up'>Sign Up</Link>
							</button>

							<ShoppingBasket className='basket' />
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}

export default Header