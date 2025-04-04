//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.assignment.DairyApp.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import java.util.List;
import lombok.Generated;

@JsonInclude(Include.NON_NULL)
public class Response {
    private int statusCode;
    private String message;
    private String token;
    private String role;
    private String expirationTime;
    private String bookingConfirmationCode;
    private UserDTO user;
    private RoomDTO room;
    private BookingDTO booking;
    private List<UserDTO> userList;
    private List<RoomDTO> roomList;
    private List<BookingDTO> bookingList;

    @Generated
    public Response() {
    }

    @Generated
    public int getStatusCode() {
        return this.statusCode;
    }

    @Generated
    public String getMessage() {
        return this.message;
    }

    @Generated
    public String getToken() {
        return this.token;
    }

    @Generated
    public String getRole() {
        return this.role;
    }

    @Generated
    public String getExpirationTime() {
        return this.expirationTime;
    }

    @Generated
    public String getBookingConfirmationCode() {
        return this.bookingConfirmationCode;
    }

    @Generated
    public UserDTO getUser() {
        return this.user;
    }

    @Generated
    public RoomDTO getRoom() {
        return this.room;
    }

    @Generated
    public BookingDTO getBooking() {
        return this.booking;
    }

    @Generated
    public List<UserDTO> getUserList() {
        return this.userList;
    }

    @Generated
    public List<RoomDTO> getRoomList() {
        return this.roomList;
    }

    @Generated
    public List<BookingDTO> getBookingList() {
        return this.bookingList;
    }

    @Generated
    public void setStatusCode(final int statusCode) {
        this.statusCode = statusCode;
    }

    @Generated
    public void setMessage(final String message) {
        this.message = message;
    }

    @Generated
    public void setToken(final String token) {
        this.token = token;
    }

    @Generated
    public void setRole(final String role) {
        this.role = role;
    }

    @Generated
    public void setExpirationTime(final String expirationTime) {
        this.expirationTime = expirationTime;
    }

    @Generated
    public void setBookingConfirmationCode(final String bookingConfirmationCode) {
        this.bookingConfirmationCode = bookingConfirmationCode;
    }

    @Generated
    public void setUser(final UserDTO user) {
        this.user = user;
    }

    @Generated
    public void setRoom(final RoomDTO room) {
        this.room = room;
    }

    @Generated
    public void setBooking(final BookingDTO booking) {
        this.booking = booking;
    }

    @Generated
    public void setUserList(final List<UserDTO> userList) {
        this.userList = userList;
    }

    @Generated
    public void setRoomList(final List<RoomDTO> roomList) {
        this.roomList = roomList;
    }

    @Generated
    public void setBookingList(final List<BookingDTO> bookingList) {
        this.bookingList = bookingList;
    }

    @Generated
    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof Response)) {
            return false;
        } else {
            Response other = (Response)o;
            if (!other.canEqual(this)) {
                return false;
            } else if (this.getStatusCode() != other.getStatusCode()) {
                return false;
            } else {
                Object this$message = this.getMessage();
                Object other$message = other.getMessage();
                if (this$message == null) {
                    if (other$message != null) {
                        return false;
                    }
                } else if (!this$message.equals(other$message)) {
                    return false;
                }

                Object this$token = this.getToken();
                Object other$token = other.getToken();
                if (this$token == null) {
                    if (other$token != null) {
                        return false;
                    }
                } else if (!this$token.equals(other$token)) {
                    return false;
                }

                Object this$role = this.getRole();
                Object other$role = other.getRole();
                if (this$role == null) {
                    if (other$role != null) {
                        return false;
                    }
                } else if (!this$role.equals(other$role)) {
                    return false;
                }

                Object this$expirationTime = this.getExpirationTime();
                Object other$expirationTime = other.getExpirationTime();
                if (this$expirationTime == null) {
                    if (other$expirationTime != null) {
                        return false;
                    }
                } else if (!this$expirationTime.equals(other$expirationTime)) {
                    return false;
                }

                Object this$bookingConfirmationCode = this.getBookingConfirmationCode();
                Object other$bookingConfirmationCode = other.getBookingConfirmationCode();
                if (this$bookingConfirmationCode == null) {
                    if (other$bookingConfirmationCode != null) {
                        return false;
                    }
                } else if (!this$bookingConfirmationCode.equals(other$bookingConfirmationCode)) {
                    return false;
                }

                Object this$user = this.getUser();
                Object other$user = other.getUser();
                if (this$user == null) {
                    if (other$user != null) {
                        return false;
                    }
                } else if (!this$user.equals(other$user)) {
                    return false;
                }

                Object this$room = this.getRoom();
                Object other$room = other.getRoom();
                if (this$room == null) {
                    if (other$room != null) {
                        return false;
                    }
                } else if (!this$room.equals(other$room)) {
                    return false;
                }

                Object this$booking = this.getBooking();
                Object other$booking = other.getBooking();
                if (this$booking == null) {
                    if (other$booking != null) {
                        return false;
                    }
                } else if (!this$booking.equals(other$booking)) {
                    return false;
                }

                Object this$userList = this.getUserList();
                Object other$userList = other.getUserList();
                if (this$userList == null) {
                    if (other$userList != null) {
                        return false;
                    }
                } else if (!this$userList.equals(other$userList)) {
                    return false;
                }

                Object this$roomList = this.getRoomList();
                Object other$roomList = other.getRoomList();
                if (this$roomList == null) {
                    if (other$roomList != null) {
                        return false;
                    }
                } else if (!this$roomList.equals(other$roomList)) {
                    return false;
                }

                Object this$bookingList = this.getBookingList();
                Object other$bookingList = other.getBookingList();
                if (this$bookingList == null) {
                    if (other$bookingList != null) {
                        return false;
                    }
                } else if (!this$bookingList.equals(other$bookingList)) {
                    return false;
                }

                return true;
            }
        }
    }

    @Generated
    protected boolean canEqual(final Object other) {
        return other instanceof Response;
    }

    @Generated
    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        result = result * 59 + this.getStatusCode();
        Object $message = this.getMessage();
        result = result * 59 + ($message == null ? 43 : $message.hashCode());
        Object $token = this.getToken();
        result = result * 59 + ($token == null ? 43 : $token.hashCode());
        Object $role = this.getRole();
        result = result * 59 + ($role == null ? 43 : $role.hashCode());
        Object $expirationTime = this.getExpirationTime();
        result = result * 59 + ($expirationTime == null ? 43 : $expirationTime.hashCode());
        Object $bookingConfirmationCode = this.getBookingConfirmationCode();
        result = result * 59 + ($bookingConfirmationCode == null ? 43 : $bookingConfirmationCode.hashCode());
        Object $user = this.getUser();
        result = result * 59 + ($user == null ? 43 : $user.hashCode());
        Object $room = this.getRoom();
        result = result * 59 + ($room == null ? 43 : $room.hashCode());
        Object $booking = this.getBooking();
        result = result * 59 + ($booking == null ? 43 : $booking.hashCode());
        Object $userList = this.getUserList();
        result = result * 59 + ($userList == null ? 43 : $userList.hashCode());
        Object $roomList = this.getRoomList();
        result = result * 59 + ($roomList == null ? 43 : $roomList.hashCode());
        Object $bookingList = this.getBookingList();
        result = result * 59 + ($bookingList == null ? 43 : $bookingList.hashCode());
        return result;
    }

    @Generated
    public String toString() {
        int var10000 = this.getStatusCode();
        return "Response(statusCode=" + var10000 + ", message=" + this.getMessage() + ", token=" + this.getToken() + ", role=" + this.getRole() + ", expirationTime=" + this.getExpirationTime() + ", bookingConfirmationCode=" + this.getBookingConfirmationCode() + ", user=" + String.valueOf(this.getUser()) + ", room=" + String.valueOf(this.getRoom()) + ", booking=" + String.valueOf(this.getBooking()) + ", userList=" + String.valueOf(this.getUserList()) + ", roomList=" + String.valueOf(this.getRoomList()) + ", bookingList=" + String.valueOf(this.getBookingList()) + ")";
    }
}
