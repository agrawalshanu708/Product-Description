import "./styles.css";

function ProductDescription() {
  const pDescription = [
    {
      id: 101,
      type: "T-shirt",
      brand: "HRX",
      sponser: "by hrithik roshan",
      tag: "Men Teal Blue Printed T-shirt",
      rating: {
        number: 4.3,
        icon: "",
        totalRating: `33k Ratings`
      },

      price: `Rs. 349`,
      off: `(45% OFF)`,
      oPrice: `Rs.699`,
      taxTag: "inclusive of all taxes",
      sizeHead: "SELECT SIZE",
      sizechart: [
        { type: "S", description: "" },
        { type: "M", description: "" },
        { type: "L", description: "" },
        { type: "XL", description: "" },
        { type: "XXL", description: "" },
        { type: "S", description: "" }
      ],
      bagButton: <button className="card-btn card-add">Add to Cart</button>,
      wishButton: <button className="card-btn">Wishlist</button>,
      delivery: {
        deliveryHead: "DELIVERY OPTIONS",
        icon: "",
        pincodeCheck: <input />,
        checkBtn: <button placeholder="Enter a PIN Code">Check</button>,
        checkTag:
          "Please enter PIN code to check delivery time & Pay on Delivery Availability",
        deliveryCondition: [
          `100% Original Products`,
          `Pay on delivery might be available`,
          `Easy 30 days returns and exchanges`,
          `Try & Buy might be available`
        ]
      },

      offerHead: {
        headline: "BEST OFFER",
        icon: ""
      },
      offers: {
        tag: "Best Price",
        offerPrice: `Rs. 134`,
        condition: [
          "Applicable on: Orders above Rs. 1599 (only on first purchase)",
          "Coupon Discount: Rs. 250 off (check cart for final savings)",
          ""
        ]
      },
      EMITAG: "EMI option available",
      EMIDDes: "EMI starting from Rs.18/month",
      productDes: {
        phead: "PRODUCT DETAILS",
        icon: "",
        descrip:
          "This season set a sporty fashion trend with the HRX Men's Athleisure T-shirt. This striped casual T-shirt can be worn on its own or layered under a jacket or a hoodie."
      },
      feature: {
        desc: "Athleisure T-shirt can be paired with tracks, khakis or jeans",
        style: "Round Neck",
        sleeve: "Short Sleeves",
        color: "Teal",
        Print: "Geometric",
        Fit: "Regular"
      },
      sizefit: "The model (height 6') is wearing a size M",
      material: [`100% cotton`, `Machine-wash`]
    }
  ];
  return (
    <>
      {pDescription.map((item) => (
        <div key={item.id}>
          <h1 className="card-brand"> {item.brand} </h1>
          <h1 className="card-sponser"> {item.sponser}</h1>
          <span className="card-tag"> {item.tag}</span>
          <div className="card-rating-box">
            <p> {item.rating.number} </p>
            <span> icon</span>
            <div style={{ margin: "0.3rem", border: "1px solid black" }}> </div>
            <p> {item.rating.totalRating}</p>
          </div>
          <div className="card-line"> </div>
          <h1 className="card-price"> {item.price}</h1>
          <h4 className="card-off">{item.off}</h4>
          <span class="card-taxTag"> {item.taxTag} </span>
          <h3> {item.sizeHead}</h3>
          <div class="card-box">
            {" "}
            {item.sizechart.map((item) => (
              <div class="card-size-box">
                <span className="card-size">{item.type}</span>
              </div>
            ))}
          </div>
          <span className="">{item.bagButton}</span>
          <span className="">{item.wishButton}</span>
          <h3> {item.delivery.deliveryHead} </h3>
          <span> {item.delivery.icon}</span>
          <span> {item.delivery.pincodeCheck}</span>
          <span> {item.delivery.checkBtn}</span>
          <p className="card-checktag">{item.delivery.checkTag} </p>
          <div class="card-condition-box">
            {" "}
            {item.delivery.deliveryCondition.map((item) => (
              <li> {item}</li>
            ))}
          </div>
          <h3> {item.offerHead.headline} </h3>
          <span> {item.offerHead.icon}</span>
          <h4 className="card-offers-list"> {item.offers.tag}</h4>
          <span className="card-offer-price"> {item.offers.offerPrice}</span>
        </div>
      ))}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <ProductDescription />
    </div>
  );
}
