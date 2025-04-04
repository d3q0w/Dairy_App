import axios from "axios"

export default class apiService {

    static BASE_URL = "http://localhost:8087"

    static getHeader() {
        const token = localStorage.getItem("token");
        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        };
    }

    /**AUTH */

    /* This  register a new user */
    static async registerFarmer(registration) {
        const response = await axios.post(`${this.BASE_URL}/auth/register`, registration)
        return response.data
    }

    /* This  login a registered user */
    static async loginFarmer(loginDetails) {
        const response = await axios.post(`${this.BASE_URL}/auth/login`, loginDetails)
        return response.data
    }

    /***USERS */


    /*  This is  to get the user profile */
    static async getAllFarmers() {
        const response = await axios.get(`${this.BASE_URL}/farmers/all`, {
            headers: this.getHeader()
        })
        return response.data
    }

    static async getFarmerProfile() {
        const response = await axios.get(`${this.BASE_URL}/farmers/get-logged-in-profile-info`, {
            headers: this.getHeader()
        })
        return response.data
    }


    /* This is the  to get a single user */
    static async getFarmer(farmerId) {
        const response = await axios.get(`${this.BASE_URL}/farmers/get-by-id/${farmerId}`, {
            headers: this.getHeader()
        })
        return response.data
    }

    /* This is the  to get user bookings by the user id */
    static async getFarmerBookings(farmerId) {
        const response = await axios.get(`${this.BASE_URL}/farmers/get-farmer-bookings/${farmerId}`, {
            headers: this.getHeader()
        })
        return response.data
    }


    /* This is to delete a user */
    static async deleteFarmer(farmerId) {
        const response = await axios.delete(`${this.BASE_URL}/users/delete/${farmerId}`, {
            headers: this.getHeader()
        })
        return response.data
    }

    /**ROOM */
    /* This  adds a new location location to the database */
    static async addLocation(formData) {
        const result = await axios.post(`${this.BASE_URL}/locations/add`, formData, {
            headers: {
                ...this.getHeader(),
                'Content-Type': 'multipart/form-data'
            }
        });
        return result.data;
    }

    /* This  gets all availavle locations */
    static async getAllAvailableLocations() {
        const result = await axios.get(`${this.BASE_URL}/locations/all-available-locations`)
        return result.data
    }


    /* This  gets all availavle by dates locations from the database with a given date and a location type */
    static async getAvailableLocationsByDateAndType(checkInDate, checkOutDate, locationType) {
        const result = await axios.get(
            `${this.BASE_URL}/locations/available-locations-by-date-and-type?checkInDate=${checkInDate}
		&checkOutDate=${checkOutDate}&locationType=${locationType}`
        )
        return result.data
    }

    /* This  gets all location types from thee database */
    static async getLocationTypes() {
        const response = await axios.get(`${this.BASE_URL}/locations/types`)
        return response.data
    }
    /* This  gets all locations from the database */
    static async getAllLocations() {
        const result = await axios.get(`${this.BASE_URL}/locations/all`)
        return result.data
    }
    /* This funcction gets a location by the id */
    static async getLocationById(locationId) {
        const result = await axios.get(`${this.BASE_URL}/locations/location-by-id/${locationId}`)
        return result.data
    }

    /* This  deletes a location by the Id */
    static async deleteLocation(locationId) {
        const result = await axios.delete(`${this.BASE_URL}/locations/delete/${locationId}`, {
            headers: this.getHeader()
        })
        return result.data
    }

    /* This updates a location */
    static async updateLocation(locationId, formData) {
        const result = await axios.put(`${this.BASE_URL}/locations/update/${locationId}`, formData, {
            headers: {
                ...this.getHeader(),
                'Content-Type': 'multipart/form-data'
            }
        });
        return result.data;
    }


    /**BOOKING */
    /* This  saves a new booking to the databse */
    static async bookLocation(locationId, farmerId, booking) {

        console.log("FARMER ID IS: " + farmerId)

        const response = await axios.post(`${this.BASE_URL}/bookings/book-location/${locationId}/${farmerId}`, booking, {
            headers: this.getHeader()
        })
        return response.data
    }

    /* This  gets alll bokings from the database */
    static async getAllBookings() {
        const result = await axios.get(`${this.BASE_URL}/bookings/all`, {
            headers: this.getHeader()
        })
        return result.data
    }

    /* This  get booking by the cnfirmation code */
    static async getBookingByrecordConfirmationCode(bookingCode) {
        const result = await axios.get(`${this.BASE_URL}/bookings/get-by-confirmation-code/${bookingCode}`)
        return result.data
    }

    /* This is the  to cancel user booking */
    static async cancelBooking(bookingId) {
        const result = await axios.delete(`${this.BASE_URL}/bookings/cancel/${bookingId}`, {
            headers: this.getHeader()
        })
        return result.data
    }


    /**AUTHENTICATION CHECKER */
    static logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    static isAuthenticated() {
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin() {
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }

    static isFarmer() {
        const role = localStorage.getItem('role')
        return role === 'USER'
    }
}
// export default new ApiService();