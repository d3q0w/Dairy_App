//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.assignment.DairyApp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import lombok.Generated;

@Entity
@Table(
        name = "bookings"
)
public class Booking {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    private @NotNull(
            message = "check in date is required"
    ) LocalDate checkInDate;
    private @Future(
            message = "check out date must be in the future"
    ) LocalDate checkOutDate;
    private @Min(
            value = 1L,
            message = "Number of adults must not be less that 1"
    ) int numOfAdults;
    private @Min(
            value = 0L,
            message = "Number of children must not be less that 0"
    ) int numOfChildren;
    private int totalNumOfGuest;
    private String bookingConfirmationCode;
    @ManyToOne(
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "user_id"
    )
    private User user;
    @ManyToOne(
            fetch = FetchType.LAZY
    )
    @JoinColumn(
            name = "room_id"
    )
    private Room room;

    public void calculateTotalNumberOfGuest() {
        this.totalNumOfGuest = this.numOfAdults + this.numOfChildren;
    }

    public void setNumOfAdults(int numOfAdults) {
        this.numOfAdults = numOfAdults;
        this.calculateTotalNumberOfGuest();
    }

    public void setNumOfChildren(int numOfChildren) {
        this.numOfChildren = numOfChildren;
        this.calculateTotalNumberOfGuest();
    }

    public String toString() {
        Long var10000 = this.id;
        return "Booking{id=" + var10000 + ", checkInDate=" + String.valueOf(this.checkInDate) + ", checkOutDate=" + String.valueOf(this.checkOutDate) + ", numOfAdults=" + this.numOfAdults + ", numOfChildren=" + this.numOfChildren + ", totalNumOfGuest=" + this.totalNumOfGuest + ", bookingConfirmationCode='" + this.bookingConfirmationCode + "'}";
    }

    @Generated
    public Booking() {
    }

    @Generated
    public Long getId() {
        return this.id;
    }

    @Generated
    public LocalDate getCheckInDate() {
        return this.checkInDate;
    }

    @Generated
    public LocalDate getCheckOutDate() {
        return this.checkOutDate;
    }

    @Generated
    public int getNumOfAdults() {
        return this.numOfAdults;
    }

    @Generated
    public int getNumOfChildren() {
        return this.numOfChildren;
    }

    @Generated
    public int getTotalNumOfGuest() {
        return this.totalNumOfGuest;
    }

    @Generated
    public String getBookingConfirmationCode() {
        return this.bookingConfirmationCode;
    }

    @Generated
    public User getUser() {
        return this.user;
    }

    @Generated
    public Room getRoom() {
        return this.room;
    }

    @Generated
    public void setId(final Long id) {
        this.id = id;
    }

    @Generated
    public void setCheckInDate(final LocalDate checkInDate) {
        this.checkInDate = checkInDate;
    }

    @Generated
    public void setCheckOutDate(final LocalDate checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    @Generated
    public void setTotalNumOfGuest(final int totalNumOfGuest) {
        this.totalNumOfGuest = totalNumOfGuest;
    }

    @Generated
    public void setBookingConfirmationCode(final String bookingConfirmationCode) {
        this.bookingConfirmationCode = bookingConfirmationCode;
    }

    @Generated
    public void setUser(final User user) {
        this.user = user;
    }

    @Generated
    public void setRoom(final Room room) {
        this.room = room;
    }

    @Generated
    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof Booking)) {
            return false;
        } else {
            Booking other = (Booking)o;
            if (!other.canEqual(this)) {
                return false;
            } else if (this.getNumOfAdults() != other.getNumOfAdults()) {
                return false;
            } else if (this.getNumOfChildren() != other.getNumOfChildren()) {
                return false;
            } else if (this.getTotalNumOfGuest() != other.getTotalNumOfGuest()) {
                return false;
            } else {
                Object this$id = this.getId();
                Object other$id = other.getId();
                if (this$id == null) {
                    if (other$id != null) {
                        return false;
                    }
                } else if (!this$id.equals(other$id)) {
                    return false;
                }

                Object this$checkInDate = this.getCheckInDate();
                Object other$checkInDate = other.getCheckInDate();
                if (this$checkInDate == null) {
                    if (other$checkInDate != null) {
                        return false;
                    }
                } else if (!this$checkInDate.equals(other$checkInDate)) {
                    return false;
                }

                Object this$checkOutDate = this.getCheckOutDate();
                Object other$checkOutDate = other.getCheckOutDate();
                if (this$checkOutDate == null) {
                    if (other$checkOutDate != null) {
                        return false;
                    }
                } else if (!this$checkOutDate.equals(other$checkOutDate)) {
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

                return true;
            }
        }
    }

    @Generated
    protected boolean canEqual(final Object other) {
        return other instanceof Booking;
    }

    @Generated
    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        result = result * 59 + this.getNumOfAdults();
        result = result * 59 + this.getNumOfChildren();
        result = result * 59 + this.getTotalNumOfGuest();
        Object $id = this.getId();
        result = result * 59 + ($id == null ? 43 : $id.hashCode());
        Object $checkInDate = this.getCheckInDate();
        result = result * 59 + ($checkInDate == null ? 43 : $checkInDate.hashCode());
        Object $checkOutDate = this.getCheckOutDate();
        result = result * 59 + ($checkOutDate == null ? 43 : $checkOutDate.hashCode());
        Object $bookingConfirmationCode = this.getBookingConfirmationCode();
        result = result * 59 + ($bookingConfirmationCode == null ? 43 : $bookingConfirmationCode.hashCode());
        Object $user = this.getUser();
        result = result * 59 + ($user == null ? 43 : $user.hashCode());
        Object $room = this.getRoom();
        result = result * 59 + ($room == null ? 43 : $room.hashCode());
        return result;
    }
}

