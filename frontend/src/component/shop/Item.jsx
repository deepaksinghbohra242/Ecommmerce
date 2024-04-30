import React from "react";
import ItemCard from "./ItemCard";

function Item() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <ItemCard
          itemName="Product 1"
          itemType="Type 1"
          rate="$10"
          brand="Brand A"
          description="Description for Product 1"
          img_path="https://images.search.yahoo.com/images/view;_ylt=AwrOp.MFZjBm9zYPbEyJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzA0ZWRiNjkwNWEzYzY5ZmE0YjM0NzdlNmUyOTljZTIwBGdwb3MDMTM1BGl0A2Jpbmc-?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Ddefault%2Bimage%26type%3DE211US714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D135&w=640&h=640&imgurl=projectable.org%2Fwp-content%2Fuploads%2F2017%2F01%2Fdefault-avatar_male.png&rurl=https%3A%2F%2Fprojectable.org%2Fwho-we-are%2Fdefault-avatar_male%2F&size=+7.1KB&p=default+image&oid=04edb6905a3c69fa4b3477e6e299ce20&fr2=piv-web&fr=mcafee&tt=default-avatar_male+-+Project+ABLE&b=121&ni=21&no=135&ts=&tab=organic&sigr=XDqc0_HK7ZiH&sigb=bFYlmxLJNYPC&sigi=ZsAiLqf3RudM&sigt=8UquZs355aR_&.crumb=1QSXzM56b9d&fr=mcafee&fr2=piv-web&type=E211US714G0"
        />
      </div>
    </>
  );
}

export default Item;
