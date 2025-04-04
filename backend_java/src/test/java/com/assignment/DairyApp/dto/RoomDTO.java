//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.assignment.DairyApp.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import java.math.BigDecimal;
import java.util.List;
import lombok.Generated;

@JsonInclude(Include.NON_NULL)
public class RoomDTO {
    private Long id;
    private String roomType;
    private BigDecimal roomPrice;
    private String roomPhotoUrl;
    private String roomDescription;
    private List<BookingDTO> bookings;

    @Generated
    public RoomDTO() {
    }

    @Generated
    public Long getId() {
        return this.id;
    }

    @Generated
    public String getRoomType() {
        return this.roomType;
    }

    @Generated
    public BigDecimal getRoomPrice() {
        return this.roomPrice;
    }

    @Generated
    public String getRoomPhotoUrl() {
        return this.roomPhotoUrl;
    }

    @Generated
    public String getRoomDescription() {
        return this.roomDescription;
    }

    @Generated
    public List<BookingDTO> getBookings() {
        return this.bookings;
    }

    @Generated
    public void setId(final Long id) {
        this.id = id;
    }

    @Generated
    public void setRoomType(final String roomType) {
        this.roomType = roomType;
    }

    @Generated
    public void setRoomPrice(final BigDecimal roomPrice) {
        this.roomPrice = roomPrice;
    }

    @Generated
    public void setRoomPhotoUrl(final String roomPhotoUrl) {
        this.roomPhotoUrl = roomPhotoUrl;
    }

    @Generated
    public void setRoomDescription(final String roomDescription) {
        this.roomDescription = roomDescription;
    }

    @Generated
    public void setBookings(final List<BookingDTO> bookings) {
        this.bookings = bookings;
    }

    @Generated
    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof RoomDTO)) {
            return false;
        } else {
            RoomDTO other = (RoomDTO)o;
            if (!other.canEqual(this)) {
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

                Object this$roomType = this.getRoomType();
                Object other$roomType = other.getRoomType();
                if (this$roomType == null) {
                    if (other$roomType != null) {
                        return false;
                    }
                } else if (!this$roomType.equals(other$roomType)) {
                    return false;
                }

                Object this$roomPrice = this.getRoomPrice();
                Object other$roomPrice = other.getRoomPrice();
                if (this$roomPrice == null) {
                    if (other$roomPrice != null) {
                        return false;
                    }
                } else if (!this$roomPrice.equals(other$roomPrice)) {
                    return false;
                }

                Object this$roomPhotoUrl = this.getRoomPhotoUrl();
                Object other$roomPhotoUrl = other.getRoomPhotoUrl();
                if (this$roomPhotoUrl == null) {
                    if (other$roomPhotoUrl != null) {
                        return false;
                    }
                } else if (!this$roomPhotoUrl.equals(other$roomPhotoUrl)) {
                    return false;
                }

                Object this$roomDescription = this.getRoomDescription();
                Object other$roomDescription = other.getRoomDescription();
                if (this$roomDescription == null) {
                    if (other$roomDescription != null) {
                        return false;
                    }
                } else if (!this$roomDescription.equals(other$roomDescription)) {
                    return false;
                }

                Object this$bookings = this.getBookings();
                Object other$bookings = other.getBookings();
                if (this$bookings == null) {
                    if (other$bookings != null) {
                        return false;
                    }
                } else if (!this$bookings.equals(other$bookings)) {
                    return false;
                }

                return true;
            }
        }
    }

    @Generated
    protected boolean canEqual(final Object other) {
        return other instanceof RoomDTO;
    }

    @Generated
    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        Object $id = this.getId();
        result = result * 59 + ($id == null ? 43 : $id.hashCode());
        Object $roomType = this.getRoomType();
        result = result * 59 + ($roomType == null ? 43 : $roomType.hashCode());
        Object $roomPrice = this.getRoomPrice();
        result = result * 59 + ($roomPrice == null ? 43 : $roomPrice.hashCode());
        Object $roomPhotoUrl = this.getRoomPhotoUrl();
        result = result * 59 + ($roomPhotoUrl == null ? 43 : $roomPhotoUrl.hashCode());
        Object $roomDescription = this.getRoomDescription();
        result = result * 59 + ($roomDescription == null ? 43 : $roomDescription.hashCode());
        Object $bookings = this.getBookings();
        result = result * 59 + ($bookings == null ? 43 : $bookings.hashCode());
        return result;
    }

    @Generated
    public String toString() {
        Long var10000 = this.getId();
        return "RoomDTO(id=" + var10000 + ", roomType=" + this.getRoomType() + ", roomPrice=" + String.valueOf(this.getRoomPrice()) + ", roomPhotoUrl=" + this.getRoomPhotoUrl() + ", roomDescription=" + this.getRoomDescription() + ", bookings=" + String.valueOf(this.getBookings()) + ")";
    }
}

