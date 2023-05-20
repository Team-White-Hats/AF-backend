const request = require("supertest");
const baseURL = "http://localhost:8000";

describe(`GET ${baseURL}/api/product/all`, () => {
	const newProduct = {
		productName: "Traditional Bridal Jewelry 2",
		productCategory: "Brass Metalwork 2",
		productPrice: "400",
		productImage:
			"https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		contacts:
			"Kandy is a very large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest.",
		entryPrice: "0716668613",
		quantity: "15",
		status: "Available",
		smallDes: "Sri Lankan brides traditional",
		longDes:
			"These sets often included a headpieoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
	};
	it("should return 200 OK", async () => {
		const response = await request(baseURL).get("/api/product/all");
		expect(response.statusCode).toBe(200);
	});
	it("should return data", async () => {
		const response = await request(baseURL).get(`/api/product/all`);
		expect(response.body.length >= 1).toBe(true);
	});
});

describe(`POST ${baseURL}/api/product/create`, () => {
	const newProduct = {
		productName: "Traditional Bridal Jewelry",
		productCategory: "Brass Metalwork",
		productPrice: "300",
		productImage:
			"https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		contacts:
			"Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest.",
		entryPrice: "0776668613",
		quantity: "10",
		status: "Available",
		smallDes: "Sri Lankan brides traditionally",
		longDes:
			"These sets often included a headpiecooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooe",
	};
	it("should add Product", async () => {
		const response = await request(baseURL)
			.post("/api/product/create")
			.send(newProduct);
		expect(response.statusCode).toBe(201);
		expect(response.body.productName).toBe(newProduct.longDes);
		expect(response.body.productCategory).toBe(
			newProduct.productCategory,
		);
		expect(response.body.productPrice).toBe(newProduct.productPrice);
		expect(response.body.productImage).toBe(newProduct.productImage);
		expect(response.body.contacts).toBe(newProduct.contacts);
		expect(response.body.entryPrice).toBe(newProduct.entryPrice);
		expect(response.body.quantity).toBe(newProduct.quantity);
		expect(response.body.status).toBe(newProduct.status);
		expect(response.body.smallDes).toBe(newProduct.smallDes);
		expect(response.body.longDes).toBe(newProduct.longDes);
	});
});

describe(`DELETE ${baseURL}/api/product/delete`, () => {
	const newProduct = {
		productName: "Traditional Bridal Jewelry",
		productCategory: "Brass Metalwork",
		productPrice: "300",
		productImage:
			"https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		contacts:
			"Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest.",
		entryPrice: "0776668613",
		quantity: "10",
		status: "Available",
		smallDes: "Sri Lankan brides traditionally",
		longDes:
			"These sets often included a headpieceooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
	};
	beforeAll(async () => {
		await request(baseURL)
			.post("/api/product/create")
			.send(newProduct);
	});
	it("should delete Product", async () => {
		const testRequest = await request(baseURL).get(`/api/product/all`);
		const testProduct = testRequest[testRequest.length - 1];
		console.log(testProduct);
		const response = await request(baseURL).delete(
			`/api/product/delete/${testProduct._id}`,
		);
		expect(response.statusCode).toBe(204);
		console.log(response);
		expect(response.productName).toBe(newProduct.productName);
		expect(response.productCategory).toBe(newProduct.productCategory);
		expect(response.productPrice).toBe(newProduct.productPrice);
		expect(response.productImage).toBe(newProduct.productImage);
		expect(response.contacts).toBe(newProduct.contacts);
		expect(response.entryPrice).toBe(newProduct.entryPrice);
		expect(response.quantity).toBe(newProduct.quantity);
		expect(response.status).toBe(newProduct.status);
		expect(response.smallDes).toBe(newProduct.smallDes);
		expect(response.longDes).toBe(newProduct.longDes);
	});
});
