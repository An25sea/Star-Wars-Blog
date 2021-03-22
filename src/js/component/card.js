import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div
				className="card "
				style={{ color: "white", width: "20rem", height: "20rem", backgroundColor: "rgb(121, 104, 9)" }}>
				<img className="card-img-top" src={rigoImage} alt="Card image cap" height="125" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text margen">
						Gender:
						{props.gender}
						<br />
						Hair color: {props.url}
						<br />
						Hair color: {props.eye}
						<br />
					</p>

					<Link to={"/peoplesprofile/" + props.uid}>
						<button className="btn btn-primary pos1">Learn More</button>
					</Link>

					<i
						className="fa fa-heart pos2"
						onClick={() => actions.Favorite(props.uid, props.title, props.url)}
					/>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	gender: PropTypes.string,
	hair: PropTypes.string,
	eye: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string
};