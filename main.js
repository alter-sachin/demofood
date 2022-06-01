    function buildMenu(tags) {
      const categoriesArray = tags.restaurant.categories;

      const categoriesContainer = document.createElement('div');

      categoriesArray.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.innerText = category.categoryName;
        categoriesContainer.appendChild(categoryElement);
      });

      document.getElementById("main").appendChild(categoriesContainer);
    }

        


    function buildChatButtons(dish){
        const buttonArray = dish.ingredients;
        const buttonUrl = dish.processes;
        const mainVideoUrl = dish.flavours;
        //const buttonContainer = document.createElement('button');

        buttonArray.forEach((button,i) =>{
            const buttonElement = document.createElement('button');
            buttonElement.setAttribute('class','button-5');
            buttonElement.setAttribute('role','button');
            console.log(i);
            console.log(buttonUrl[i]);
            buttonElement.addEventListener('click',function onclick(event){
            	var player = document.getElementById('bot');
            	var mp4Vid = document.getElementById('mp4source');
            if(player){
                   player.pause();
            try{
            	console.log("check me",mp4Vid.src)
                mp4Vid.src = buttonUrl[i];
                player.load();
                player.play();
                console.log(buttonUrl[i]);
                document.getElementById("bot").setAttribute('src',buttonUrl[i]);
            }
            catch(e){
                 console.log(e);
            }

            }
        	});
            buttonElement.textContent = button;
            document.getElementById("buttonlist").appendChild(buttonElement);
        }
        )

    }


    function getDishElement(dish) {
      const dishContainer = document.createElement('div');
      dishContainer.setAttribute('id','card');
      const modelViewer = document.createElement('model-viewer');
      modelViewer.setAttribute('src', dish.modelLocation);
      modelViewer.setAttribute('ios-src', dish.modelLocationios);
      modelViewer.setAttribute('poster', dish.imageLocation);
      modelViewer.setAttribute('shadow-intensity', 1);
      modelViewer.setAttribute('camera-controls', '');
      modelViewer.setAttribute('auto-rotate', '');
      modelViewer.setAttribute('camera-orbit', '45deg 55deg 2.5m');
      modelViewer.setAttribute('max-camera-orbit','65 65.5deg auto')

      modelViewer.setAttribute('ar', '');

      const section = document.createElement('section');
      section.classList.add('attribution');

      const title = document.createElement('h1');
      title.innerText = dish.name;

      section.appendChild(title);
      const price = document.createElement('h3');
      price.innerText = dish.price+" INR";
      price.style.color = "green";
      price.style.opacity = .5;


      section.appendChild(price);
      const chatlogo = document.createElement('img');
      chatlogo.setAttribute('id','chatlogo');
      chatlogo.setAttribute('onClick',buildChatButtons(dish))
      //chatlogo.src = './chatbot.png';
      //section.appendChild(chatlogo);

      dishContainer.appendChild(modelViewer);
      dishContainer.appendChild(section);

      return dishContainer;
    }

    function getCategoryElement(category) {
      const section = document.createElement('section');
      section.setAttribute('id', category.categoryName);

      const title = document.createElement('h1');
      title.innerText = category.categoryName;
      section.appendChild(title);
      

      category.dishes.forEach(dish => {
        const dishElement = getDishElement(dish);
        section.appendChild(dishElement);
      });

      return section;
    }

    function showDishes(tags) {
      const dishesContainer = document.createElement('div');
      tags.restaurant.categories.forEach(category => {
        const categoryElement = getCategoryElement(category);
        dishesContainer.appendChild(categoryElement);
      });

      document.getElementById('main').appendChild(dishesContainer);
    }


    function loadPage() {
          var tags = {
    "status": 0,
    "restaurant": {
        "categories": [
            {
                "categoryName": "Mains",
                "dishes": [
                    {
                        "id": "11be52ac-29d0-4d38-88d2-4cedc9b5c855",
                        "name": "Golden Roll",
                        "description": "Deep fried chicken marinated with cantonese sauce and garnished with crisp batter",
                        "category": "mains",
                        "price": 290,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/golden_roll.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/golden_roll.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/golden_roll.png",
                        "steam": true,
                        "createdAt": "2022-04-17T16:39:04.000Z",
                        "updatedAt": "2022-04-19T07:56:30.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": ['option1','option2','option3'],
                        "processes": ['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4','http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'],
                        "flavours": []
                    },
                    {
                        "id": "349f4997-7092-459f-b321-6bd6a940e194",
                        "name": "Gourmet Breakfast",
                        "description": "A gourmet classic with fruit puree and strawberry",
                        "category": "mains",
                        "price": 790,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/gourmet_breakfast.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/gourmet_breakfast.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/gourmet_breakfast.png",
                        "steam": true,
                        "createdAt": "2022-04-17T17:18:47.000Z",
                        "updatedAt": "2022-04-19T07:58:57.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    },
                    {
                        "id": "408b0b9e-8020-42ca-ad01-5a5c57fe5f0e",
                        "name": "Croissant",
                        "description": "Fresh baked Croissant with chicken slices and mayo",
                        "category": "mains",
                        "price": 990,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/croissant.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/croissant.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/croissant.png",
                        "steam": true,
                        "createdAt": "2022-04-17T17:07:52.000Z",
                        "updatedAt": "2022-04-19T09:36:33.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    },
                    {
                        "id": "8694b9d2-0530-4c33-82c6-b8914ac75956",
                        "name": "Pulled Pork Burger",
                        "description": "Fat burger with pulled Pork",
                        "category": "mains",
                        "price": 990,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/pulled_pork.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/pulled_pork.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/pulled_pork.png",
                        "steam": true,
                        "createdAt": "2022-04-17T17:13:12.000Z",
                        "updatedAt": "2022-04-19T09:37:43.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    },
                    {
                        "id": "ae4f1a64-930b-4db5-add4-51068b71b5a4",
                        "name": "Bread Eggs",
                        "description": "Sunny Side up eggs with fresh loafy bread",
                        "category": "mains",
                        "price": 990,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/breade_eggs.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/bread_eggs.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/bread_eggs.png",
                        "steam": true,
                        "createdAt": "2022-04-17T17:00:45.000Z",
                        "updatedAt": "2022-04-19T09:41:44.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    },
                    {
                        "id": "c6cfe68f-10df-4444-b6fb-71f73a00644f",
                        "name": "Prosciutto and cheeseboard",
                        "description": "Huge dullops of cheese with pulled marinated meat",
                        "category": "mains",
                        "price": 790,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/prosciutto_and_cheese_board.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/prosciutto_and_cheese_board.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/prosciutto_and_cheese_board.png",
                        "steam": true,
                        "createdAt": "2022-04-17T17:24:43.000Z",
                        "updatedAt": "2022-04-19T09:42:41.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    },
                    {
                        "id": "ce548b72-d321-4193-b00e-b4b7d1109947",
                        "name": "Sashimi Plate",
                        "description": "Fresh Sashimi Sliced to perfection and served with garnished vegetables",
                        "category": "mains",
                        "price": 990,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/sashimi_plate.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/sashimi_plate.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/sashimi_plate.png",
                        "steam": true,
                        "createdAt": "2022-04-17T16:54:16.000Z",
                        "updatedAt": "2022-04-19T09:43:58.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    }
                ]
            },
            {
                "categoryName": "Dessert",
                "dishes": [
                    {
                        "id": "5de501a0-13d0-4653-9eab-783afcac888f",
                        "name": "Fig Tart",
                        "description": "Freshly cut fig fruit Tart",
                        "category": "Dessert",
                        "price": 290,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/fig_tart.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/fig_tart.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/fig_tart.png",
                        "steam": true,
                        "createdAt": "2022-04-17T18:01:27.000Z",
                        "updatedAt": "2022-04-19T09:45:12.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    },
                    {
                        "id": "88310d9b-f10d-47dd-adf5-0d89fb693539",
                        "name": "Somloi Torta",
                        "description": "Cake with chocolate and vanilla icing with tiramisu chocolate pieces",
                        "category": "Dessert",
                        "price": 1390,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/somloi_torta.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/somloi_torta.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/somloi_torta.png",
                        "steam": true,
                        "createdAt": "2022-04-17T17:52:46.000Z",
                        "updatedAt": "2022-04-19T09:46:44.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    },
                    {
                        "id": "f98d5e2e-6720-4883-a219-abc68ff6eb91",
                        "name": "Strawberry Cake",
                        "description": "Cake with Strawberry pieces and and vanilla icing",
                        "category": "Dessert",
                        "price": 1290,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/strawberry_cake.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/strawberry_cake.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/strawberry_cake.png",
                        "steam": true,
                        "createdAt": "2022-04-17T17:57:37.000Z",
                        "updatedAt": "2022-04-19T09:48:22.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    }
                ]
            },
            {
                "categoryName": "Starters",
                "dishes": [
                    {
                        "id": "d5b179b1-a3cb-404d-b4a8-7ef38218ba23",
                        "name": "Cappucino",
                        "description": "Marshmalow filled cup of coffee",
                        "category": "starters",
                        "price": 290,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/cappucino.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/cappucinno.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/cappucino.png",
                        "steam": true,
                        "createdAt": "2022-04-17T16:27:13.000Z",
                        "updatedAt": "2022-04-19T09:50:37.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    },
                    {
                        "id": "f798985d-edef-4c1d-a53c-6e8c4902eccd",
                        "name": "Fresh Salad",
                        "description": "Salad with garden fresh ingredients for a healthy start to your meal",
                        "category": "starters",
                        "price": 500,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/fresh_salad.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/fresh_salad.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/fresh_salad.png",
                        "steam": false,
                        "createdAt": "2022-04-17T15:41:16.000Z",
                        "updatedAt": "2022-04-19T09:51:10.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    },
                    {
                        "id": "fa92312c-3126-4e78-ae8d-0d6e05c0a2e9",
                        "name": "Salmon Tartine",
                        "description": "Chunks of Salmon baked on fresh bread",
                        "category": "starters",
                        "price": 690,
                        "modelLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/salmon_tartine.glb",
                        "modelLocationios": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/salmon_tartine.usdz",
                        "imageLocation": "https://foodassets.s3.ap-south-1.amazonaws.com/menu/final/salmon_tartine.png",
                        "steam": true,
                        "createdAt": "2022-04-17T16:21:43.000Z",
                        "updatedAt": "2022-04-19T09:52:17.000Z",
                        "restaurantId": "f3af79c6-3691-4784-b9d9-8d88f360557a",
                        "ingredients": [],
                        "processes": [],
                        "flavours": []
                    }
                ]
            }
        ],
        "id": "f3af79c6-3691-4784-b9d9-8d88f360557a",
        "name": "La Italia",
        "address": "Z - 9, Metro Pillar No. 421, Block J, Rajouri Garden Extension, Rajouri Garden, New Delhi, Delhi 110027",
        "phoneNumbers": "096969 67050",
        "latitude": 28.5469,
        "longitude": 77.1858,
        "introModel": "102/102",
        "introImage": "https://foodassets.s3.ap-south-1.amazonaws.com/restaurant/la_italia.png",
        "createdAt": "2022-04-17T14:08:48.000Z",
        "updatedAt": "2022-04-17T14:08:48.000Z",
        "userId": null,
        "dishes": null
    }
};
          //buildMenu(tags);
          showDishes(tags);
          
         

        }

   