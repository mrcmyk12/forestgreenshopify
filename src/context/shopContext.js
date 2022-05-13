import React, { Component } from "react";
import Client from "shopify-buy";
// import { Blog } from "@shopify/shopify-api/dist/rest-resources/2022-04/index";
// import Shopify from "@shopify/shopify-api";

const ShopContext = React.createContext();

const client = Client.buildClient({
	domain: "forest-green-project.myshopify.com",
	storefrontAccessToken: "760d906d07c30f524b1fd94bb7b91b0a"
});

class ShopProvider extends Component {
	state = {
		product: {},
		products: [],
		checkout: {},
		homeCollection: [],
		bambooCollection: {},
		collections: [],
		isCartOpen: false,
		isMenuOpen: false
	};

	componentDidMount() {
		if (localStorage.checkout_id) {
			this.fetchCheckout(localStorage.checkout_id);
		} else {
			this.createCheckout();
		}
	}

	createCheckout = async () => {
		const checkout = await client.checkout.create();
		localStorage.setItem("checkout_id", checkout.id);
		this.setState({ checkout: checkout });
	};

	fetchCheckout = (checkoutId) => {
		client.checkout.fetch(checkoutId).then((checkout) => {
			this.setState({ checkout: checkout });
		});
	};

	// fetchBlog = async () => {
	// 	const test_session = await Shopify.Utils.loadCurrentSession(
	// 		request,
	// 		response
	// 	)

	// 	await Blog.all({
	// 		session: test_session
	// 	});
	// };

	addItemtoCheckout = async (variantId, quantity) => {
		const lineItemsToAdd = [
			{
				variantId: variantId,
				quantity: parseInt(quantity, 10)
			}
		];
		const checkout = await client.checkout.addLineItems(
			this.state.checkout.id,
			lineItemsToAdd
		);
		this.setState({ checkout: checkout });
			console.log(checkout)
		this.openCart();
	};

	removeLineItem = async (lineItemIdsToRemove) => {
		const checkout = await client.checkout.removeLineItems(
			this.state.checkout.id,
			lineItemIdsToRemove
		);
		this.setState({ checkout: checkout });
	};

	fetchAllProducts = async () => {
		const products = await client.product.fetchAll();
		this.setState({ products: products });
		console.log(products);
	};

	fetchCollections = async () => {
		const collections = await client.collection.fetchAllWithProducts();
		this.setState({ collections: collections });
		console.log(collections);
	};

	fetchBambooCollection = async () => {
		const collectionId = "gid://shopify/Collection/388931682561";

		const bambooCollection = await client.collection.fetchWithProducts(
			collectionId
		);
		this.setState({ bambooCollection: bambooCollection });
		console.log(bambooCollection);
	};

	fetchHomeCollection = async () => {
		const collectionId = "gid://shopify/Collection/388849533185";

		const homeCollection = await client.collection.fetchWithProducts(
			collectionId
		);
		this.setState({ homeCollection: homeCollection });
	};

	fetchProductWithHandle = async (handle) => {
		const product = await client.product.fetchByHandle(handle);
		this.setState({ product: product });
		console.log(product);
	};

	closeCart = () => {
		this.setState({ isCartOpen: false });
	};

	openCart = () => {
		this.setState({ isCartOpen: true });
	};

	closeMenu = () => {
		this.setState({ isMenuOpen: false });
	};

	openMenu = () => {
		this.setState({ isMenuOpen: true });
	};

	render() {
		return (
			<ShopContext.Provider
				value={{
					...this.state,
					fetchAllProducts: this.fetchAllProducts,
					fetchHomeCollection: this.fetchHomeCollection,
					fetchBambooCollection: this.fetchBambooCollection,
					fetchCollections: this.fetchCollections,
					fetchProductWithHandle: this.fetchProductWithHandle,
					addItemtoCheckout: this.addItemtoCheckout,
					removeLineItem: this.removeLineItem,
					closeCart: this.closeCart,
					openCart: this.openCart,
					closeMenu: this.openMenu
				}}>
				{this.props.children}
			</ShopContext.Provider>
		);
	}
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
