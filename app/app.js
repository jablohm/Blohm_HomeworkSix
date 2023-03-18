var PRODS = [
    // ONE
    {
      prodType: "Backpack",
      prodPrice: "$90.00",
      prodImage: "1.png",
      prodDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   ONE
  

    // TWO
    {
        prodType: "Mug",
        prodPrice: "15.00",
        prodImage: "2.png",
        prodDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
      },
    //   TWO
  

    // THREE
    {
      prodType: "Kettle",
      prodPrice: "$20.00",
      prodImage: "3.png",
      prodDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   THREE
  

    // FOUR
    {
        prodType: "Thermos + Mug Bundle",
        prodPrice: "$25.00",
        prodImage: "4.png",
        prodDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
      },
    //   FOUR
  

    // FIVE
    {
      prodType: "Tent",
      prodPrice: "$113.00",
      prodImage: "5.png",
      prodDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   FIVE
  

    // SIX
    {
      prodType: "Portable Lantern",
      prodPrice: "$20.00",
      prodImage: "6.png",
      prodDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   SIX
  

    // SEVEN
    {
      prodType: "Multi-purpose Knife",
      prodPrice: "$35.00",
      prodImage: "7.png",
      prodDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   SEVEN
  

    // EIGHT
    {
      prodType: "Boots",
      prodPrice: "$75.00",
      prodImage: "8.png",
      prodDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   EIGHT
  

    // NINE
    {
      prodType: "Men's Sleeping Bag",
      prodPrice: "$50.00",
      prodImage: "9.png",
      prodDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   NINE
  

    // TEN
    {
      prodType: "Women's Sleeping Bag",
      prodPrice: "$50.00",
      prodImage: "10.png",
      prodDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    }
    //   TEN
  ];

  
  function loadData() {
    $.each(PRODS, function (index, prod) {
      // console.log(prod.prodType);
      $("#app").append(`<section id="${index}">
      <div class="row">
        <h1>${prod.prodType}</h1>
        <div class="col">
          <div class="top">
            <div class="itemPrice">${prod.prodPrice}</div>
            <br />
          </div>
    
          <div class="imgall">
            <div class="itemImage">
              <img src="img/${prod.prodImage}" alt="" />
            </div>
    
            <div class="desc">
              <div class="itemDesc">${prod.prodDesc}</div>
              <br />
            </div>
            
          </div>
        </div>
      </div>
    </section>
    
    `);
    });

        initListeners();

  }
  
  function initListeners() {
    $(".col").click(function (e) {
      let prodIndex = e.currentTarget.id;
      $("#app").html(`<section> 
      <div class="row">
        <h1>${PRODS[prodIndex].prodType}</h1>
        <div class="col">
        <div class="top">
          <div class="itemPrice">${PRODS[prodIndex].prodPrice}</div>
          <br />
        </div>
      
        <div class="imgall">
          <div class="itemImage">
            <img src="img/${PRODS[prodIndex].prodImage}" alt="" />
          </div>
      
          <div class="desc">
            <div class="itemDesc">${PRODS[prodIndex].prodDesc}</div>
            <br />
          </div>
        </div>
      </div>
      </div>

      <div class="back">BACK</div>
    </section>
    
    `)
    addBackListener();
    });
  }

function addBackListener() {
  $(".back").click(function(){
    $("#app").html("");
    loadData();
  })
}

  
  $(document).ready(function () {
    loadData();
  });