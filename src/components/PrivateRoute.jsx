/** @format */

import React from "react";
import { Route,Navigate } from "react-router-dom";

import  {authenticationService}  from "services";

export const PrivateRoute = ({children,role}) => {

			const currentUser = authenticationService.currentUserValue;
			
				
			if (!currentUser) {
				// not logged in so redirect to login page with the return url
				
				return (
					<Navigate
						to={{ pathname: "/" }}
					/>
				);
			}

			if(role && currentUser.role !== role) {
				// not logged in so redirect to login page with the return url
				
				return (
					<Navigate
						to={{ pathname: "/" }}
					/>
				);
			}

			// authorised so return component
			return children;
	
		};
