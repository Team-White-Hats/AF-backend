const request = require("supertest");
const baseURL = "http://localhost:8000";

describe(`GET ${baseURL}/api/review/all`, () => {
	const newReview = {
		name: "Roy Dya",
		email: "roy@gmail.com",
		reviewHeader: "Admire Your Service",
		review: "Sri Lanka exceeded my expectations in every way. The cultural sites such as Sigiriya Rock Fortress and the ancient city of Anuradhapura were simply awe-inspiring. The people were incredibly friendly and welcoming, and their deep-rooted traditions and customs were a delight to witness. I highly recommend exploring the cultural triangle and immersing yourself in the beauty of Sri Lanka's heritage",
		rating: "2",
	};
	it("should return 200 OK", async () => {
		const response = await request(baseURL).get("/api/review/all");
		expect(response.statusCode).toBe(200);
	});
	it("should return data", async () => {
		const response = await request(baseURL).get(`/api/review/all`);
		expect(response.body.length >= 1).toBe(true);
	});
});

describe(`POST ${baseURL}/api/review/create`, () => {
	const newReview = {
		name: "Roy Dya",
		email: "roy@gmail.com",
		reviewHeader: "Admire Your Service",
		review: "Sri Lanka exceeded my expectations in every way. The cultural sites such as Sigiriya Rock Fortress and the ancient city of Anuradhapura were simply awe-inspiring. The people were incredibly friendly and welcoming, and their deep-rooted traditions and customs were a delight to witness. I highly recommend exploring the cultural triangle and immersing yourself in the beauty of Sri Lanka's heritage",
		rating: "2",
	};
	it("should add review details ", async () => {
		const response = await request(baseURL)
			.post("/api/review/create")
			.send(newReview);
		expect(response.statusCode).toBe(201);
		expect(response.body.name).toBe(newReview.name);
		expect(response.body.email).toBe(newReview.email);
		expect(response.body.reviewHeader).toBe(newReview.reviewHeader);
		expect(response.body.review).toBe(newReview.review);
		expect(response.body.rating).toBe(newReview.rating);
	});
});

describe(`DELETE ${baseURL}/api/review/delete`, () => {
	const newReview = {
		name: "Roy Dya",
		email: "roy@gmail.com",
		reviewHeader: "Admire Your Service",
		review: "Sri Lanka exceeded my expectations in every way. The cultural sites such as Sigiriya Rock Fortress and the ancient city of Anuradhapura were simply awe-inspiring. The people were incredibly friendly and welcoming, and their deep-rooted traditions and customs were a delight to witness. I highly recommend exploring the cultural triangle and immersing yourself in the beauty of Sri Lanka's heritage",
		rating: "2",
	};
	beforeAll(async () => {
		await request(baseURL).post("/api/review/create").send(newReview);
	});
	it("should delete Review", async () => {
		const testRequest = await request(baseURL).get(`/api/review/all`);
		const testReview = testRequest[testRequest.length - 1];
		console.log(testReview);
		const response = await request(baseURL).delete(
			`/api/review/delete/${testReview._id}`,
		);
		expect(response.statusCode).toBe(204);
		console.log(response);
		expect(response.name).toBe(newReview.name);
		expect(response.email).toBe(newReview.email);
		expect(response.reviewHeader).toBe(newReview.reviewHeader);
		expect(response.review).toBe(newReview.review);
		expect(response.rating).toBe(newReview.rating);
	});
});
