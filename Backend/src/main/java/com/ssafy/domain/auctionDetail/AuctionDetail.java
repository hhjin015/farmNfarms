package com.ssafy.domain.auctionDetail;

import com.ssafy.domain.XXXauction.Auction;
import com.ssafy.domain.auctionResult.AuctionResult;
import com.ssafy.domain.auctionRoom.AuctionRoom;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class AuctionDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "AUCTION_ROOM_ID")
    private AuctionRoom auctionRoom;

    @Column
    private String productTitle;

    @Column
    private String grade;

    /*@Column
    private boolean auctioned;*/

//    @Column
//    private int initPrice;

    @Column
    private int bidIncrement;

    @Column
    private int auctionedPrice;

    @Column
    private int startingPrice;

    @Column
    private int quantity;


}