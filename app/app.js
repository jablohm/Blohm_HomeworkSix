var ITEMS = [
    // ONE
    {
      itemType: "Backpack",
      itemPrice: "$90.00",
      itemImage: "1.png",
      itemDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   ONE
  

    // TWO
    {
        itemType: "Mug",
        itemPrice: "15.00",
        itemImage: "2.png",
        itemDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
      },
    //   TWO
  

    // THREE
    {
      itemType: "Kettle",
      itemPrice: "$20.00",
      itemImage: "3.png",
      itemDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   THREE
  

    // FOUR
    {
        itemType: "Thermos + Mug Bundle",
        itemPrice: "$25.00",
        itemImage: "4.png",
        itemDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
      },
    //   FOUR
  

    // FIVE
    {
      itemType: "Tent",
      itemPrice: "$113.00",
      itemImage: "5.png",
      itemDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   FIVE
  

    // SIX
    {
      itemType: "Portable Lantern",
      itemPrice: "$20.00",
      itemImage: "6.png",
      itemDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   SIX
  

    // SEVEN
    {
      itemType: "Multi-purpose Knife",
      itemPrice: "$35.00",
      itemImage: "7.png",
      itemDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   SEVEN
  

    // EIGHT
    {
      itemType: "Boots",
    itemPrice: "$75.00",
      itemImage: "8.png",
      itemDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   EIGHT
  

    // NINE
    {
      itemType: "Men's Sleeping Bag",
      itemPrice: "$50.00",
      itemImage: "9.png",
      itemDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    },
    //   NINE
  

    // TEN
    {
      itemType: "Women's Sleeping Bag",
      itemPrice: "$50.00",
      itemImage: "10.png",
      itemDesc: "Gear up for your next camping trip with the perfect all-in-one solution for outdoor enthusiasts.",
    }
    //   TEN
  ];

  
  function loadData() {
    $.each(ITEMS, function (index, item) {
      // console.log(item.itemType);
      $("#app").append(`<section id="${index}">
      <div class="row">
        <h1>${item.itemType}</h1>
        <div class="col">
          <div class="top">
            <div class="itemPrice">${item.itemPrice}</div>
            <br />
          </div>
    
          <div class="imgall">
            <div class="itemImage">
              <img src="img/${item.itemImage}" alt="" />
            </div>
    
            <div class="desc">
              <div class="itemDesc">${item.itemDesc}</div>
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
      let itemIndex = e.currentTarget.id;
      $("#app").html(`<section> 
      <div class="row">
        <h1>${ITEMS[itemIndex].itemType}</h1>
        <div class="col">
        <div class="top">
          <div class="itemPrice">${ITEMS[itemIndex].itemPrice}</div>
          <br />
        </div>
      
        <div class="imgall">
          <div class="itemImage">
            <img src="img/${ITEMS[itemIndex].itemImage}" alt="" />
          </div>
      
          <div class="desc">
            <div class="itemDesc">${ITEMS[itemIndex].itemDesc}</div>
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