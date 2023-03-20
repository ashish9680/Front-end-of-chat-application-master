import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
	<div className='textContainer'>
		<div>
			<h1>
				Welcome to the Private Chat Application{" "}
				<span role='img' aria-label='emoji'>
					💬
				</span>
			</h1>
			<h2>
				Made with quarantined React, Express, Node and Socket.IO{" "}
				<span role='img' aria-label='emoji'>
					❤️
				</span>
			</h2>
			<h2>
				Try it out right now! Tell them your name and join to
				private chat{" "}
				<span role='img' aria-label='emoji'>
					⬅️
				</span>
			</h2>
		</div>
		{users ? (
			<div>
				<h1>People currently chatting:</h1>
				<div className='activeContainer'>
					<h2>
						{users.map(
							({ name }) => (
								console.log(name),
								(
									<div
										key={name}
										className='activeItem'
									>
										{name}
										<img
											alt='Online Icon'
											src={onlineIcon}
										/>
									</div>
								)
							)
						)}
					</h2>
				</div>
			</div>
		) : null}
	</div>
);

export default TextContainer;
