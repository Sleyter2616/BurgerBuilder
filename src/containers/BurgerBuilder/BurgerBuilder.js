import React, {Component} from "react";
import {connect} from "react-redux";
import Auxillary from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
	state = {
		//UI STATE Stuff
		purchasing: false,
		loading: false,
		error: false,
	};

	componentDidMount() {
		axios
			.get(
				"https://react-burger-builder-3fdde-default-rtdb.firebaseio.com/ingredients.json"
			)
			.then((response) => {
				this.setState({ingredients: response.data});
			})
			.catch((error) => {
				this.setState({error: true});
			});
	}
	purchaseHandler = () => {
		this.setState({purchasing: true});
	};
	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		return sum > 0;
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false});
	};
	purchaseContinueHandler = () => {
		this.props.history.push("/checkout");
	};
	render() {
		const disabledInfo = {
			...this.props.ings,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		//Sets up orderSummary and burger
		let orderSummary = null;
		let burger = this.state.error ? (
			<p>ingredients can't be loaded</p>
		) : (
			<Spinner />
		);
		//after fetch happens this runs
		if (this.props.ings) {
			burger = (
				<Auxillary>
					<Burger ingredients={this.props.ings} />
					<BuildControls
						ingredientAdded={this.props.onIngredientAdded}
						ingredientRemoved={this.props.onIngredientRemoved}
						disabled={disabledInfo}
						purchasable={this.updatePurchaseState(this.props.ings)}
						ordered={this.purchaseHandler}
						price={this.props.price}
					/>
				</Auxillary>
			);
			this.props.ings;
			orderSummary = (
				<OrderSummary
					ingredients={this.props.ings}
					purchaseCanceled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinueHandler}
					price={this.props.price}
				/>
			);
		}

		if (this.state.loading) {
			orderSummary = <Spinner />;
		}
		return (
			<Auxillary>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					{orderSummary}
				</Modal>
				{burger}
			</Auxillary>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		ings: state.ingredients,
		price: state.totalPrice,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onIngredientAdded: (ingName) =>
			dispatch({
				type: actionTypes.ADD_INGREDIENT,
				ingredientName: ingName,
			}),
		onIngredientRemoved: (ingName) =>
			dispatch({
				type: actionTypes.REMOVE_INGREDIENT,
				ingredientName: ingName,
			}),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
