const request = require("supertest")
const baseURL = "http://localhost:8000";

// describe(`GET ${baseURL}/api/tourtrip/all`, () => {
//     const newTourTrip = {
//         placeName: "Kandy",
//         startLocation: "Colombo",
//         endLocation: "Kandy",
//         transportType: "Van",
//         description: "Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest.",
//         entryPrice: "500",
//         products: "Handicrafts",
//         productImages: "https://media.timeout.com/images/101852777/380/285/image.jpg",
//         statusType: "Available",
//         route: "123",
//     }
//     it("should return 200 OK", async () => {
//         const response = await request(baseURL).get("/api/tourtrip/all");
//         expect(response.statusCode).toBe(200);
//     });
//     it("should return data", async () => {
//         const response = await request(baseURL).get(`/api/tourtrip/all`);
//         expect(response.body.length >= 1).toBe(true);
//     });
// });

// describe(`POST ${baseURL}/api/tourtrip/create`, () => {
//     const newTourTrip = {
//         placeName: "Kandy",
//         startLocation: "Colombo",
//         endLocation: "Kandy",
//         transportType: "Van",
//         description: "Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest.",
//         entryPrice: "500",
//         products: "Handicrafts",
//         productImages: "https://media.timeout.com/images/101852777/380/285/image.jpg",
//         statusType: "Available",
//         route: "123",
//             }
//     it("should add Tour Trip", async () => {
//         const response = await request(baseURL).post("/api/tourtrip/create").send(newTourTrip);
//         expect(response.statusCode).toBe(201);
//         expect(response.body.placeName).toBe(newTourTrip.placeName);
//         expect(response.body.startLocation).toBe(newTourTrip.startLocation);
//         expect(response.body.endLocation).toBe(newTourTrip.endLocation);
//         expect(response.body.transportType).toBe(newTourTrip.transportType);
//         expect(response.body.description).toBe(newTourTrip.description);
//         expect(response.body.entryPrice).toBe(newTourTrip.entryPrice);
//         expect(response.body.products).toBe(newTourTrip.products);
//         expect(response.body.productImages).toBe(newTourTrip.productImages);
//         expect(response.body.statusType).toBe(newTourTrip.statusType);
//         expect(response.body.route).toBe(newTourTrip.route);
//     })

// });

describe(`DELETE ${baseURL}/api/tourtrip/delete`, () => {
    const newTourTrip = {
        placeName: "Kandy",
        startLocation: "Colombo",
        endLocation: "Kandy",
        transportType: "Van",
        description: "Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest.",
        entryPrice: "500",
        products: "Handicrafts",
        productImages: "https://media.timeout.com/images/101852777/380/285/image.jpg",
        statusType: "Available",
        route: "123",
    }
    beforeAll(async () => {
        await request(baseURL).post("/api/tourtrip/create").send(newTourTrip);
    });
    it("should delete Tour Trip", async () => {
        const testRequest = await request(baseURL).get(`/api/tourtrip/all`);
        const testTourTrip = testRequest[testRequest.length - 1];
        console.log(testTourTrip);
        const response = await request(baseURL).delete(`/api/tourtrip/delete/${testTourTrip._id}`);
        expect(response.statusCode).toBe(204);
        console.log(response);
        expect(response.placeName).toBe(newTourTrip.placeName);
        expect(response.startLocation).toBe(newTourTrip.startLocation);
        expect(response.endLocation).toBe(newTourTrip.endLocation);
        expect(response.transportType).toBe(newTourTrip.transportType);
        expect(response.description).toBe(newTourTrip.description);
        expect(response.entryPrice).toBe(newTourTrip.entryPrice);
        expect(response.products).toBe(newTourTrip.products);
        expect(response.productImages).toBe(newTourTrip.productImages);
        expect(response.statusType).toBe(newTourTrip.statusType);
        expect(response.route).toBe(newTourTrip.route);
    })
});