webpackJsonp([0,4],{

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RecipequeryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipequeryService = (function () {
    function RecipequeryService(http) {
        var _this = this;
        this.http = http;
        this.getRecipeById = function (id) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
            var recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information';
            return _this.http.get(recipeUrl, options).map(function (resp) { return resp.json(); });
        };
        this.getSearchResults = function (params) {
            // add our own parameter to query
            // go through parameters and form a string that can be added to the http request url
            var parameters = '?instructionsRequired=true&';
            for (var key in params) {
                parameters = parameters + key.toString() + "=" + params[key] + "&";
            }
            ;
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
            var recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search' + parameters;
            return _this.http.get(recipeUrl, options).map(function (resp) { return resp.json(); });
        };
        this.getSearchResultsOffSet = function (params, ten) {
            // same than above but add offset-parameter and combine it with given value for 'ten'
            var parameters = '?instructionsRequired=true&';
            for (var key in params) {
                parameters = parameters + key.toString() + "=" + params[key] + "&";
            }
            ;
            parameters = parameters + 'offset=' + ten;
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
            var recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search' + parameters;
            return _this.http.get(recipeUrl, options).map(function (resp) { return resp.json(); });
        };
        this.getSimilarRecipe = function (id) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
            var recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/similar';
            return _this.http.get(recipeUrl, options).map(function (resp) { return resp.json(); });
        };
    }
    RecipequeryService.prototype.convertUnits = function (ingredients, targetUnit) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // go through the list of given ingredients
        // check if ingredient name contains unit that needs to be converted to either grams or litres 
        var _loop_1 = function(ingredient) {
            if (ingredient['unit'].indexOf('pound') >= 0 || ingredient['unit'].indexOf('oz') >= 0
                || ingredient['unit'].indexOf('ounce') >= 0 || ingredient['unit'].indexOf('lb') >= 0) {
                var name = ingredient['name'];
                var amount = ingredient['amount'];
                var unit = ingredient['unit'];
                var recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/convert?ingredientName=' + name + '&sourceAmount=' + amount + '&sourceUnit=' + unit + '&targetUnit=' + targetUnit;
                this_1.http.get(recipeUrl, options).map(function (resp) { return resp.json(); }).subscribe(function (resp) {
                    ingredient['unit'] = resp.targetUnit;
                    ingredient['amount'] = resp.targetAmount;
                });
            }
            else if (ingredient['unit'].indexOf('cup') >= 0) {
                ingredient['unit'] = 'dl';
                ingredient['amount'] = ingredient['amount'] * 2, 365;
            }
        };
        var this_1 = this;
        for (var _i = 0, ingredients_1 = ingredients; _i < ingredients_1.length; _i++) {
            var ingredient = ingredients_1[_i];
            _loop_1(ingredient);
        }
        return ingredients;
    };
    RecipequeryService.prototype.getFoodFact = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/trivia/random';
        return this.http.get(recipeUrl, options).map(function (resp) { return resp.json(); });
    };
    RecipequeryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], RecipequeryService);
    return RecipequeryService;
    var _a;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/recipequery.service.js.map

/***/ },

/***/ 389:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(510);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/User/reseptikirja/src/main.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AdvancedSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvancedSearchComponent = (function () {
    function AdvancedSearchComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.searchAdvanced = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.dietArray = [
            'vegan',
            'vegetarian'
        ];
        this.intolerancesArray = [
            { value: 'dairy', checked: false },
            { value: 'gluten', checked: false },
            { value: 'egg', checked: false },
            { value: 'peanut', checked: false },
            { value: 'soy', checked: false },
            { value: 'seafood', checked: false },
            { value: 'shellfish', checked: false },
            { value: 'sulfite', checked: false },
            { value: 'tree nut', checked: false },
            { value: 'wheat', checked: false }
        ];
        this.typesArray = [
            'main course',
            'side dish',
            'dessert',
            'appetizer',
            'salad',
            'bread',
            'breakfast',
            'soup',
            'beverage',
            'sauce',
            'drink'
        ];
        this.searchQuery = {};
    }
    AdvancedSearchComponent.prototype.checkTypes = function () {
        this.chosenType = this.searchQuery['type'];
    };
    AdvancedSearchComponent.prototype.removeType = function () {
        this.searchQuery['type'] = '';
    };
    AdvancedSearchComponent.prototype.search = function (event) {
        event.preventDefault();
        // Check which intolerances have been checked and add those to the search array
        var iArray = [];
        this.intolerancesArray
            .filter(function (opt) { return opt.checked; })
            .map(function (opt) { return opt.value; })
            .map(function (opt) {
            iArray.push(opt);
        });
        this.searchQuery['intolerances'] = iArray;
        // add '+' to types of food that have multiple words in their name
        if (this.searchQuery['type']) {
            this.searchQuery['type'] = this.searchQuery['type'].replace(/ /, "+");
        }
        this.searchAdvanced.emit(this.searchQuery);
    };
    AdvancedSearchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]) === 'function' && _a) || Object)
    ], AdvancedSearchComponent.prototype, "searchAdvanced", void 0);
    AdvancedSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
            selector: 'app-advanced-search',
            template: __webpack_require__(693),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], AdvancedSearchComponent);
    return AdvancedSearchComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/advanced-search.component.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(694),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/app.component.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_likes_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recipe_card_detailed_recipe_card_detailed_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navigation_bar_navigation_bar_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__image_carousel_image_carousel_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__simple_search_simple_search_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__front_page_front_page_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__advanced_search_advanced_search_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_search_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__commentbox_commentbox_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cards_container_cards_container_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__favourites_favourites_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_rounding_pipe__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var routeConfig = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_13__front_page_front_page_component__["a" /* FrontPageComponent */]
    },
    {
        path: 'search/:query',
        component: __WEBPACK_IMPORTED_MODULE_15__search_search_component__["a" /* SearchComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_15__search_search_component__["a" /* SearchComponent */]
    },
    {
        path: 'favourites',
        component: __WEBPACK_IMPORTED_MODULE_18__favourites_favourites_component__["a" /* FavouritesComponent */]
    },
    {
        path: 'recipe/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__recipe_card_detailed_recipe_card_detailed_component__["a" /* RecipeCardDetailedComponent */]
    }];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__recipe_card_detailed_recipe_card_detailed_component__["a" /* RecipeCardDetailedComponent */],
                __WEBPACK_IMPORTED_MODULE_10__navigation_bar_navigation_bar_component__["a" /* NavigationBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__image_carousel_image_carousel_component__["a" /* ImageCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_12__simple_search_simple_search_component__["a" /* SimpleSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__front_page_front_page_component__["a" /* FrontPageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__advanced_search_advanced_search_component__["a" /* AdvancedSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_16__commentbox_commentbox_component__["a" /* CommentboxComponent */],
                __WEBPACK_IMPORTED_MODULE_17__cards_container_cards_container_component__["a" /* CardsContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__favourites_favourites_component__["a" /* FavouritesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_rounding_pipe__["a" /* RoundingPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routeConfig, { useHash: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */],
                __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__["a" /* RecipequeryService */], { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["a" /* APP_BASE_HREF */], useValue: '' }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/app.module.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_likes_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CardsContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsContainerComponent = (function () {
    function CardsContainerComponent(likes) {
        this.likes = likes;
        this.title = '';
        this.imageurl = 'https://spoonacular.com/recipeImages/';
        this.update = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.navigateTo = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
    }
    CardsContainerComponent.prototype.ngOnInit = function () {
    };
    CardsContainerComponent.prototype.ngOnChanges = function (recipes) {
        if (recipes) {
            this.update.emit(this.recipes);
        }
    };
    CardsContainerComponent.prototype.saveToFavourites = function (event) {
        // save needed values to an object that is then saved to favourites
        var recipe = {};
        recipe['id'] = event.id;
        recipe['title'] = event.title;
        recipe['readyInMinutes'] = event.readyInMinutes;
        recipe['image'] = event.image;
        this.likes.saveToFavourites(recipe);
        this.update.emit(this.recipes);
    };
    CardsContainerComponent.prototype.removeFromFavourites = function (event) {
        this.likes.removeFavourite(event);
        this.update.emit(this.recipes);
    };
    CardsContainerComponent.prototype.navigate = function (id) {
        this.navigateTo.emit(id);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], CardsContainerComponent.prototype, "recipes", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], CardsContainerComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], CardsContainerComponent.prototype, "imageurl", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]) === 'function' && _a) || Object)
    ], CardsContainerComponent.prototype, "update", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]) === 'function' && _b) || Object)
    ], CardsContainerComponent.prototype, "navigateTo", void 0);
    CardsContainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
            selector: 'app-cards-container',
            template: __webpack_require__(695),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */]) === 'function' && _c) || Object])
    ], CardsContainerComponent);
    return CardsContainerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/cards-container.component.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CommentboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentboxComponent = (function () {
    function CommentboxComponent() {
        this.url = 'http://212.24.98.139/#/recipe/';
    }
    CommentboxComponent.prototype.ngOnInit = function () {
        this.url = this.url + this.recipeURL;
    };
    CommentboxComponent.prototype.ngOnChanges = function (recipeUrl) {
        this.url = this.url + this.recipeURL;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], CommentboxComponent.prototype, "recipeURL", void 0);
    CommentboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-commentbox',
            template: __webpack_require__(696),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], CommentboxComponent);
    return CommentboxComponent;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/commentbox.component.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_likes_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FavouritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavouritesComponent = (function () {
    function FavouritesComponent(likes) {
        this.likes = likes;
        this.ownRecipes = [];
        this.title = '';
        this.showButton = false;
        this.imageurl = "https://spoonacular.com/recipeImages/";
    }
    FavouritesComponent.prototype.ngOnInit = function () {
        this.ownRecipes = this.likes.getFavourites();
        if (this.ownRecipes) {
            this.ownRecipes = this.likes.isFavourite(this.ownRecipes);
            console.log(this.ownRecipes);
            if (this.ownRecipes === null) {
                this.title = "No saved recipes found";
            }
            else {
                this.title = "Saved recipes";
                this.showButton = true;
            }
        }
    };
    FavouritesComponent.prototype.saveUpdate = function (event) {
        if (this.ownRecipes) {
            this.ownRecipes = this.likes.isFavourite(this.ownRecipes);
        }
    };
    FavouritesComponent.prototype.emptyFavourites = function () {
        this.likes.emptyFavourites();
        this.ownRecipes = this.likes.getFavourites();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], FavouritesComponent.prototype, "ownRecipes", void 0);
    FavouritesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
            selector: 'app-favourites',
            template: __webpack_require__(697),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */]) === 'function' && _a) || Object])
    ], FavouritesComponent);
    return FavouritesComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/favourites.component.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_likes_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FrontPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FrontPageComponent = (function () {
    function FrontPageComponent(router, recipeservice, likes) {
        this.router = router;
        this.recipeservice = recipeservice;
        this.likes = likes;
        // define parameter for the recommended recipe CommentboxComponent
        // one of the parameters will be picked randomly
        this.recommendedArray = [
            { 'cuisine': 'japanese' },
            { 'cuisine': 'french' },
            { 'cuisine': 'italian' },
            { 'query': 'cake' },
            { 'query': 'cupcakes' }
        ];
        this.recTitle = "Recommended recipes";
        this.ownTitle = "Your favourites";
        this.horizontal = true;
        this.imageurl = '';
        this.foodFact = '';
    }
    FrontPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.randomizeRec();
        console.log(this.recParams);
        this.sub = this.recipeservice.getSearchResults(this.recParams)
            .subscribe(function (res) {
            _this.recommendRecipes = res.results.slice(0, 4);
            _this.imageurl = res.baseUri;
            console.log(res.results);
        });
        this.ownRecipes = this.likes.getFavourites();
        if (this.ownRecipes) {
            this.ownRecipes = this.ownRecipes.slice(0, 4);
            this.ownRecipes = this.likes.isFavourite(this.ownRecipes);
            console.log(this.ownRecipes);
        }
        this.recipeservice.getFoodFact()
            .subscribe(function (res) { return _this.foodFact = res.text; });
    };
    FrontPageComponent.prototype.saveUpdate = function (event) {
        this.recommendRecipes = this.likes.isFavourite(event);
    };
    FrontPageComponent.prototype.saveFavourites = function (event) {
        this.ownRecipes = this.likes.isFavourite(event);
    };
    FrontPageComponent.prototype.randomizeRec = function () {
        var length = this.recommendedArray.length;
        var index = Math.floor((Math.random() * length) + 0.1);
        this.recParams = this.recommendedArray[index];
    };
    FrontPageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FrontPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_4" /* Component */])({
            selector: 'app-front-page',
            template: __webpack_require__(698),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__["a" /* RecipequeryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__["a" /* RecipequeryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */]) === 'function' && _c) || Object])
    ], FrontPageComponent);
    return FrontPageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/front-page.component.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ImageCarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageCarouselComponent = (function () {
    function ImageCarouselComponent() {
    }
    ImageCarouselComponent.prototype.ngOnInit = function () {
    };
    ImageCarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-image-carousel',
            template: __webpack_require__(699),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], ImageCarouselComponent);
    return ImageCarouselComponent;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/image-carousel.component.js.map

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationBarComponent = (function () {
    function NavigationBarComponent() {
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-navigation-bar',
            template: __webpack_require__(700),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/navigation-bar.component.js.map

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RoundingPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoundingPipe = (function () {
    function RoundingPipe() {
    }
    // Round ingredient amounts to nearest decimals, integers or tens
    RoundingPipe.prototype.transform = function (value, args) {
        if (value > 100) {
            return Math.round(value / 10) * 10;
        }
        else if (value > 1000) {
            return Math.round(value / 100) * 100;
        }
        else if (Math.floor(value) != value) {
            return value.toFixed(1);
        }
        else {
            return value;
        }
    };
    RoundingPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({
            name: 'rounding'
        }), 
        __metadata('design:paramtypes', [])
    ], RoundingPipe);
    return RoundingPipe;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/rounding.pipe.js.map

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_likes_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_recipequery_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ownjs__ = __webpack_require__(522);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RecipeCardDetailedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipeCardDetailedComponent = (function () {
    function RecipeCardDetailedComponent(recipequery, router, route, likes) {
        this.recipequery = recipequery;
        this.router = router;
        this.route = route;
        this.likes = likes;
        this.similarRecipes = [];
        this.recipesTitle = "Similar recipes";
        this.imageurl = 'https://spoonacular.com/recipeImages/';
        this.url = '';
    }
    RecipeCardDetailedComponent.prototype.ngOnInit = function () {
        var _this = this;
        // grab recipe id from url parameters
        this.sub = this.route.params.subscribe(function (params) {
            _this.activeId = params['id'];
        });
        if (this.activeId) {
            // get recipe info and list of similar recipes based on active id
            this.recipequery.getRecipeById(this.activeId)
                .subscribe(function (res) {
                _this.recipeInfo = res;
                _this.instructions = res.analyzedInstructions[0].steps;
                _this.ingredients = res.extendedIngredients;
                _this.imageurlFb = _this.imageurl + _this.recipeInfo.image;
                window.scrollTo(0, 0);
                _this.url = "http://212.24.98.139/#/recipe/" + _this.activeId;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ownjs__["a" /* initFacebook */])();
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ownjs__["b" /* refreshFacebook */])();
                _this.recipequery.getSimilarRecipe(_this.activeId)
                    .subscribe(function (res) {
                    _this.similarRecipes = res.slice(0, 4);
                });
            });
        }
    };
    RecipeCardDetailedComponent.prototype.saveToFavourites = function () {
        //save current active recipe to favourites after constructing an object with required information
        var recipe = {};
        recipe['id'] = this.activeId;
        recipe['title'] = this.recipeInfo.title;
        recipe['readyInMinutes'] = this.recipeInfo.readyInMinutes;
        // for some reason with compelete recipe query the API returns full url to image when in other
        // cases just image file name is returned, so we need to extract that as our container component only needs file name
        var urlCheck = /[^\/]+$/g;
        var imageUrl = this.recipeInfo.image.match(urlCheck);
        recipe['image'] = imageUrl;
        this.likes.saveToFavourites(recipe);
    };
    RecipeCardDetailedComponent.prototype.saveUpdate = function (event) {
        // save recipe to favourites
        this.similarRecipes = this.likes.isFavourite(event);
    };
    RecipeCardDetailedComponent.prototype.navigate = function (event) {
        // we need to assign new recipe's info to local variables as no router actions are taken when navigating to "same page"
        var _this = this;
        this.recipequery.getRecipeById(event)
            .subscribe(function (res) {
            _this.activeId = event;
            _this.recipeInfo = res;
            _this.instructions = res.analyzedInstructions[0].steps;
            _this.ingredients = res.extendedIngredients;
            _this.url = "http://212.24.98.139/#/recipe/" + _this.activeId;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ownjs__["a" /* initFacebook */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ownjs__["b" /* refreshFacebook */])();
            _this.recipequery.getSimilarRecipe(event)
                .subscribe(function (res) {
                _this.similarRecipes = res.slice(0, 4);
            });
        });
        window.scrollTo(0, 0);
    };
    RecipeCardDetailedComponent.prototype.convert = function () {
        this.ingredients = this.recipequery.convertUnits(this.ingredients, 'grams');
    };
    RecipeCardDetailedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_4" /* Component */])({
            selector: 'app-recipe-card-detailed',
            template: __webpack_require__(701),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_recipequery_service__["a" /* RecipequeryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_recipequery_service__["a" /* RecipequeryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */]) === 'function' && _d) || Object])
    ], RecipeCardDetailedComponent);
    return RecipeCardDetailedComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/recipe-card-detailed.component.js.map

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_likes_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(route, recipeservice, likes) {
        this.route = route;
        this.recipeservice = recipeservice;
        this.likes = likes;
        this.recipes = [];
        this.defaultResults = 0;
    }
    SearchComponent.prototype.searchNew = function (event) {
        var _this = this;
        // Perform a new search with fresh parameters
        this.defaultResults = 0;
        this.parameters = event;
        this.recipeservice.getSearchResults(event)
            .subscribe(function (res) {
            _this.recipes = res.results;
            _this.imageurl = res.baseUri;
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if using front page search, grab parameters from url
        this.route.params.subscribe(function (params) {
            _this.parameters = params;
        });
        this.recipeservice.getSearchResults(this.parameters)
            .subscribe(function (res) {
            _this.recipes = res.results;
            _this.imageurl = res.baseUri;
        });
    };
    SearchComponent.prototype.saveUpdate = function (event) {
        this.recipes = this.likes.isFavourite(event);
    };
    SearchComponent.prototype.nextPrevious = function (ten) {
        // grab next ten results. API only gives ten results at a time so in template the offset number is set to 10.
        // add new results to recipes array and add 10 to defaultResults variable, so we get correct offset when querying even more results
        var _this = this;
        this.defaultResults = this.defaultResults + ten;
        this.recipeservice.getSearchResultsOffSet(this.parameters, this.defaultResults.toString())
            .subscribe(function (res) {
            for (var _i = 0, _a = res.results; _i < _a.length; _i++) {
                var recipe = _a[_i];
                _this.recipes.push(recipe);
            }
            _this.recipes = _this.likes.isFavourite(_this.recipes);
            console.log(res);
        });
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_4" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(702),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__["a" /* RecipequeryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__["a" /* RecipequeryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */]) === 'function' && _c) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/search.component.js.map

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SimpleSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimpleSearchComponent = (function () {
    function SimpleSearchComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.searchForm = this.fb.group({
            query: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    SimpleSearchComponent.prototype.search = function (event) {
        // grab value, navigate to search
        var query = this.searchForm.value.query;
        event.preventDefault();
        this.router.navigate(['search', query]);
    };
    SimpleSearchComponent.prototype.ngOnInit = function () {
    };
    SimpleSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-simple-search',
            template: __webpack_require__(703),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], SimpleSearchComponent);
    return SimpleSearchComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/simple-search.component.js.map

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/User/reseptikirja/src/environment.js.map

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export WindowRef */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return initFacebook; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return refreshFacebook; });
function _window() {
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    WindowRef.get = function () {
        return _window();
    };
    return WindowRef;
}());
function initFacebook() {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1314240991952779";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}
function refreshFacebook() {
    try {
        WindowRef.get().FB.XFBML.parse();
    }
    catch (ex) { }
}

//# sourceMappingURL=C:/Users/User/reseptikirja/src/ownjs.js.map

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/User/reseptikirja/src/polyfills.js.map

/***/ },

/***/ 681:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\n.container {\n  padding: 2em; }\n\n.search {\n  display: block;\n  margin: auto;\n  width: 95%; }\n\n.advancedOptions {\n  display: block;\n  padding-left: 7%; }\n\nh4 {\n  font-family: \"Lora\", serif;\n  letter-spacing: 1px; }\n\nh6 {\n  font-family: \"PT Serif\", serif;\n  letter-spacing: 1px;\n  margin-left: 2em;\n  margin-bottom: 1em; }\n\n.col,\n.col-md-6,\n.isearch,\n.form-check,\n.advancedOptions,\nul,\n.foodtype {\n  font-family: \"Karla\", sans-serif; }\n\ninput {\n  margin-left: 1em; }\n\ntextarea:focus,\ninput:focus {\n  outline: none !important;\n  box-shadow: 0 0 20px #f4e8b8;\n  border: 2px solid #f4e8b8; }\n\n.isearch {\n  padding-left: 0.5em; }\n\n.form-check {\n  letter-spacing: 1px; }\n\nul {\n  letter-spacing: 1px;\n  margin-top: 5%; }\n\n.navbar > li {\n  padding-left: 3em;\n  padding-right: 3em; }\n\nli {\n  margin-top: -6%; }\n\n.foodtype {\n  letter-spacing: 1px;\n  margin-left: 2em;\n  margin-bottom: 0.5em; }\n\n.dietType {\n  padding-top: 2em;\n  padding-left: 2em; }\n\n/* ICONS */\n.fa-times {\n  color: #d65164; }\n\n/* BUTTONS */\n.btn-primary,\n.btn-options {\n  letter-spacing: 1px;\n  font-family: \"Karla\", sans-serif;\n  background-color: #DAC77B;\n  border: none;\n  color: white;\n  margin: 0.5em;\n  display: inline-block; }\n\n.btn-primary:hover,\n.btn-options:hover {\n  background-color: #CEB65A; }\n\n.btn-warning {\n  letter-spacing: 2px;\n  font-family: \"Karla\", sans-serif;\n  background-color: #84A16E;\n  border: none;\n  margin: auto;\n  text-transform: uppercase;\n  font-size: 1.2em; }\n\n.btn-warning:hover {\n  background-color: #65874B; }\n\n@media screen and (max-width: 560px) {\n  .btn-primary,\n  .btn-options {\n    margin: auto;\n    display: block; } }\n\n@media screen and (max-width: 742px) {\n  .dietType .h6 {\n    margin: 0 auto;\n    display: block; } }\n"

/***/ },

/***/ 682:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 683:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\n.container {\n  padding: 2%; }\n\n.card {\n  margin: 0.5%;\n  display: inline-block; }\n\na {\n  text-decoration: none;\n  color: #000; }\n\nh4,\np.card-text {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\np.card-text {\n  font-size: 12px;\n  display: inline-block; }\n\np.card-desc {\n  font-size: 14px;\n  font-family: \"PT Serif\", serif; }\n\np.card-title {\n  font-size: 18px;\n  font-family: \"Lora\", serif; }\n\n.card-img-top {\n  width: 100%;\n  height: auto; }\n\n.heartContainer {\n  position: absolute;\n  top: 1%;\n  right: 1.5%;\n  z-index: 700;\n  background-color: rgba(0, 0, 0, 0.24); }\n\n.likedHeart {\n  color: #d65164;\n  text-shadow: 2px 2px 3px #51002a; }\n\n.notLikedHeart {\n  color: #f2f2f2;\n  text-shadow: 2px 2px 3px #000; }\n\n.fa-clock-o {\n  display: inline-block; }\n\n.container-image {\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: center/cover;\n  height: auto;\n  width: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0 0 100% 0;\n  overflow: hidden;\n  position: relative; }\n  .container-image img {\n    position: absolute;\n    width: auto;\n    min-width: 100%;\n    min-height: 100%; }\n\n@media screen and (max-width: 560px) {\n  .card {\n    min-width: 90%; }\n  .card-group {\n    min-width: 90%;\n    text-align: center; } }\n"

/***/ },

/***/ 684:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\nh4 {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\n.container {\n  width: 80%; }\n\n.comment {\n  border: thin solid #84A16E;\n  padding: 2%;\n  margin-bottom: 2%;\n  font-family: \"Karla\", sans-serif; }\n\n.date {\n  font-family: \"Karla\", sans-serif;\n  font-size: 12px;\n  color: grey;\n  padding-top: 2%;\n  float: right; }\n\n.card {\n  margin: 3%;\n  display: inline-block; }\n\nh4,\np.card-text {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\np.card-text {\n  font-size: 12px; }\n\np.card-desc {\n  font-size: 14px;\n  font-family: \"PT Serif\", serif; }\n\np.card-title {\n  font-size: 18px;\n  font-family: \"Lora\", serif; }\n\n.card-img-top {\n  width: 100%;\n  height: auto; }\n\n.btn-warning {\n  letter-spacing: 1px;\n  font-family: \"Karla\", sans-serif;\n  background-color: #84A16E;\n  border: none; }\n\n.btn-warning:hover {\n  background-color: #65874B; }\n\ntextarea:focus,\ninput:focus {\n  outline: none !important;\n  border: thin solid #84A16E;\n  box-shadow: 0 0 10px #65874B; }\n"

/***/ },

/***/ 685:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\nh4,\np.card-text {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\n.norecipes {\n  text-align: center; }\n  .norecipes h4 {\n    font-family: \"Karla\", sans-serif;\n    text-transform: none;\n    font-size: 1em; }\n  .norecipes h3 {\n    font-family: \"Caveat\", cursive; }\n\n.btn {\n  margin: auto;\n  display: block;\n  letter-spacing: 1px;\n  font-family: \"Karla\", sans-serif;\n  background-color: #84A16E;\n  border: none; }\n\n.container {\n  padding: 2%; }\n"

/***/ },

/***/ 686:
/***/ function(module, exports) {

module.exports = "/** COLOURS */\n/* FONTS */\n.container {\n  padding: 1%; }\n\n.container-fact {\n  text-align: center;\n  width: 90%;\n  margin: 3% auto;\n  background-color: #f4e8b8; }\n\nh4 {\n  font-family: \"Caveat\", cursive; }\n\n@media screen and (min-width: 768px) {\n  .container-fact {\n    width: 70%; } }\n\n@media screen and (min-width: 1200px) {\n  .container-fact {\n    width: 40%; } }\n"

/***/ },

/***/ 687:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\n.carousel-inner > .carousel-item > img,\n.carousel-inner > .item > a > img {\n  margin: auto;\n  height: 100%;\n  width: 100%; }\n\n#kuvakaruselli {\n  position: relative; }\n\n.col {\n  margin: 0;\n  padding-right: 0px;\n  padding-left: 0px; }\n\n.searchbox {\n  position: absolute;\n  z-index: 9999999;\n  top: 45%;\n  width: 33em;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 4%;\n  letter-spacing: 1px;\n  box-shadow: 0 0 20px #fff; }\n  .searchbox .container {\n    background-color: rgba(255, 255, 255, 0); }\n\n@media screen and (max-width: 768px) {\n  .searchbox {\n    top: 5%;\n    width: 90%; } }\n"

/***/ },

/***/ 688:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\nnav {\n  background-color: #fff; }\n\n.navbar-brand img {\n  width: 60px;\n  height: 60px; }\n\n.navbar-collapse.collapse {\n  display: block !important; }\n\n.navbar-nav > li,\n.navbar-nav {\n  float: left !important; }\n\n.navbar-nav.navbar-right:last-child {\n  margin-right: -15px !important; }\n\n.navbar-right {\n  float: right !important; }\n\n.navitem,\n.myrecipes {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase;\n  padding-bottom: 1%;\n  font-size: 1.4em; }\n\n.navitem:hover {\n  background-color: rgba(168, 192, 149, 0.6); }\n\n.text-right {\n  float: right; }\n\nli {\n  width: 100%;\n  margin-left: 2%;\n  margin-right: 2%; }\n\nul {\n  white-space: nowrap; }\n\n.myrecipes {\n  display: inline-block; }\n  .myrecipes a {\n    display: inline-block; }\n\n.nav-icon {\n  display: inline-block; }\n\n.showheart,\n.showsearch,\n.showhome {\n  display: inline-block;\n  color: #fff;\n  z-index: 10000;\n  margin-right: 1%;\n  margin-top: 0; }\n\n.myrecipes:hover .showheart {\n  color: #d65164; }\n\n.mysearch:hover .showsearch {\n  color: #000; }\n\n.myhome:hover .showhome {\n  color: #000; }\n\n@media screen and (max-width: 576px) {\n  .navbar-brand img {\n    width: 40px;\n    height: 40px;\n    margin-left: 0.8em; }\n  .navitem {\n    font-size: 0.9em;\n    margin: auto 0; } }\n\n@media screen and (max-width: 768px) {\n  .nav-icon {\n    color: #7f7f7f;\n    margin-top: 50%; }\n  .searchbox {\n    top: 5%;\n    width: 90%; }\n  .nav-link {\n    display: inline-block;\n    padding-right: 2rem;\n    padding-left: 2rem; }\n  .nav-hide {\n    display: none; }\n  .nav-icon {\n    font-size: 1.3em; }\n  .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row; }\n  .navbar-toggleable-sm {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center; }\n  .shownext {\n    display: inline-block;\n    color: #d65164; } }\n\n@media screen and (max-width: 992px) {\n  .nav-item {\n    font-size: 1.3em; } }\n"

/***/ },

/***/ 689:
/***/ function(module, exports) {

module.exports = "h2 {\n  font-family: \"Lora\", serif;\n  line-height: 1.2em; }\n\nh6,\na {\n  font-family: \"PT Serif\", serif; }\n\n.container {\n  padding: 2%; }\n\nimg {\n  margin-bottom: 8%; }\n\nli,\nh5 {\n  font-family: \"Karla\", sans-serif;\n  padding-bottom: 0.5em; }\n\nli.ingrd {\n  font-family: \"Karla\", sans-serif; }\n\n/* BUTTONS */\n.btn-primary,\n.btn-options {\n  letter-spacing: 1px;\n  font-family: \"Karla\", sans-serif;\n  background-color: #DAC77B;\n  border: none;\n  color: white;\n  margin: 0.5em;\n  display: inline-block; }\n\n.btn-likes {\n  background-color: #d65164;\n  font-size: 1em; }\n\n.btn-primary:hover,\n.btn-options:hover {\n  background-color: #CEB65A; }\n\n.btn-warning {\n  letter-spacing: 2px;\n  font-family: \"Karla\", sans-serif;\n  background-color: #84A16E;\n  border: none;\n  margin: auto;\n  text-transform: uppercase;\n  font-size: 1.2em; }\n\n.btn-warning:hover {\n  background-color: #65874B; }\n\n.cursive-link {\n  font-family: \"Caveat\", cursive;\n  font-size: 1.7em;\n  color: #d65164; }\n\n.recipetitle {\n  background: rgba(168, 192, 149, 0.6);\n  padding: 5%;\n  box-shadow: 0 0 20px #A8C095; }\n\n.recipedesc {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\n.recipeIngredients {\n  border-left: thin solid #000;\n  border-right: thin solid #000;\n  padding-left: 12%;\n  margin-right: 5%;\n  padding-bottom: 1%; }\n\n.verticalLine {\n  border-left: thin solid #000;\n  border-right: thin solid #000;\n  padding-left: 12%;\n  font-family: \"PT Serif\", serif; }\n\n.like-button {\n  text-align: center; }\n  .like-button i,\n  .like-button h5 {\n    display: inline-block; }\n\n.like-container {\n  margin-top: 3%; }\n  .like-container .row {\n    width: 100%; }\n"

/***/ },

/***/ 690:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\n.container {\n  padding: 2%; }\n\n.show-more {\n  text-align: center;\n  width: 80%;\n  margin: 0 auto 2% auto;\n  border-radius: 3px;\n  background-clip: padding-box; }\n\n.btn-warning {\n  width: 100%;\n  padding: 1%;\n  display: block;\n  letter-spacing: 1px;\n  font-family: \"Karla\", sans-serif;\n  background-color: #84A16E;\n  border: none;\n  border-radius: 3px;\n  background-clip: padding-box;\n  font-family: \"Caveat\", cursive;\n  font-size: 2em;\n  color: #fff; }\n\n.btn-warning:hover {\n  background-color: #65874B; }\n\n.searchbox {\n  font-family: \"PT Serif\", serif; }\n\nh4,\np.card-text {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\n@media screen and (min-width: 768px) {\n  .show-more {\n    width: 40%; } }\n"

/***/ },

/***/ 691:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\n.isearch {\n  margin-right: 5%;\n  padding: 2%;\n  margin-top: 2%;\n  font-family: \"Karla\", sans-serif; }\n\ntextarea:focus,\ninput:focus {\n  outline: none !important;\n  box-shadow: 0 0 20px #65874B;\n  border: 2px solid #A8C095; }\n\n.btn-warning {\n  letter-spacing: 1px;\n  font-family: \"Karla\", sans-serif;\n  background-color: #84A16E;\n  border: none; }\n\n.btn-warning:hover {\n  background-color: #65874B; }\n\n.searchbox {\n  font-family: \"PT Serif\", serif; }\n\nh4 {\n  font-family: \"Lora\", serif; }\n\n@media screen and (max-width: 560px) {\n  .btn-warning {\n    font-size: 0.8em;\n    margin: 3% auto 0 auto;\n    display: block; }\n  input {\n    height: 50;\n    size: 20; }\n  h4 {\n    font-size: 1em; } }\n"

/***/ },

/***/ 693:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <h4><i class=\"fa fa-search\" aria-hidden=\"true\"></i> <b>Search for a recipe:</b></h4>\r\n    <hr>\r\n    <br>\r\n\r\n    <form class=\"search\" #f=\"ngForm\" (ngSubmit)=\"search($event)\">\r\n\r\n        <!-- Words queries -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <b>Include keywords:</b>\r\n                    <input size=\"30\" height=\"100\" class=\"isearch\" name=\"searchQuery.query\" [(ngModel)]=\"searchQuery.query\" minlength=\"3\" placeholder=\"i.e. chicken, bacon...\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <b>Exclude keywords:</b>\r\n                    <input size=\"30\" height=\"100\" class=\"isearch\" name=\"searchQuery.excludeIngredients\" [(ngModel)]=\"searchQuery.excludeIngredients\" minlength=\"3\" placeholder=\"i.e. tomato, almond...\"><br>\r\n                </div>\r\n                <br>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <!-- Intolerances button and modal -->\r\n            <div class=\"col-lg-4 col-sm-6 col-xs-12\">\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#allergensModal\">\r\n                  I am allergic to...\r\n                </button><br>\r\n\r\n                <div *ngFor=\"let intolerance of intolerancesArray\" class=\"foodtype\">\r\n                    <span *ngIf=\"intolerance.checked\" (click)=\"intolerance.checked = false\"> {{intolerance.value}} <i class=\"fa fa-times fa-lg\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n\r\n\r\n                <div class=\"modal optionsModal\" id=\"allergensModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n                    <div class=\"modal-dialog\" role=\"document\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-body\">\r\n                                <div class=\"advancedOptions\" *ngFor=\"let option of intolerancesArray\">\r\n                                    <label>\r\n                                        <input class=\"\" type=\"checkbox\"\r\n                                        name=\"option\"\r\n                                        value=\"{{option.value}}\"\r\n                                        [(ngModel)]=\"option.checked\"/>\r\n                                        {{option.value}}\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n                                <button type=\"button\" class=\"btn btn-secondary btn-options\" data-dismiss=\"modal\">Done!</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Type button and modal -->\r\n            <div class=\"col-lg-4 col-sm-6 col-xs-12\">\r\n\r\n                <button type=\"button\" class=\"btn btn-primary btn2\" data-toggle=\"modal\" data-target=\"#typesModal\">\r\n                    I want to make...\r\n                </button><br>\r\n                <div class=\"foodtype\" *ngIf=\"searchQuery.type\" (click)=\"removeType()\"> {{searchQuery.type}} <i class=\"fa fa-times fa-lg\" aria-hidden=\"true\"></i></div>\r\n                    <div class=\"modal optionsModal\" id=\"typesModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n                        <div class=\"modal-dialog\" role=\"document\">\r\n                            <div class=\"modal-content\">\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"advancedOptions\" *ngFor=\"let foodtype of typesArray\">\r\n                                        <label>\r\n                                        <input class=\"\" type=\"radio\" \r\n                                        value=\"{{foodtype}}\" [(ngModel)]=\"searchQuery.type\" name=\"searchQuery.type\">\r\n                                        {{foodtype}}\r\n                                    </label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-secondary btn-options\" data-dismiss=\"modal\" (click)=\"checkTypes()\">Done!</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            \r\n            <!-- Diet type options -->\r\n            <div class=\"col-lg-4 col-xs-12 dietType\">\r\n                <div class=\"form-group\">\r\n                    <h6><b>I am...</b></h6>\r\n                    <div class=\"form-check\" *ngFor=\"let diettype of dietArray\">\r\n                        <input class=\"form-check-input\" type=\"radio\" value=\"{{diettype}}\" [(ngModel)]=\"searchQuery.diet\" name=\"searchQuery.diet\"> {{diettype}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <div class=\"row\">\r\n            <button type=\"submit\" class=\"btn btn-warning\"><b>Search</b></button>\r\n        </div>\r\n    </form>\r\n\r\n\r\n</div>"

/***/ },

/***/ 694:
/***/ function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\r\n\r\n<router-outlet></router-outlet>"

/***/ },

/***/ 695:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div *ngIf=\"recipes\">\n\n        <h4>{{title}}</h4>\n        <br>\n\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12 recipecard\" *ngFor=\"let recipe of recipes\">\n                <div class=\"card-group\">\n                    <div class=\"card\">\n                        <a class=\"btn btn-default heartContainer\">\n\n                            <!-- check if the recipe has been added to favourites and display corresponding heart icon -->\n                            <i class=\"fa fa-heart fa-lg likedHeart\" aria-hidden=\"true\" *ngIf=\"recipe.isliked\" (click)=\"removeFromFavourites(recipe)\"></i>\n                            <i class=\"fa fa-heart fa-lg notLikedHeart\" aria-hidden=\"true\" *ngIf=\"!recipe.isliked\" (click)=\"saveToFavourites(recipe)\"></i></a>\n                        <a [routerLink]=\"['/recipe', recipe.id]\" (click)=\"navigate(recipe.id)\">\n                            <div class=\"row container-image\">\n                                <img class=\"img-fluid\" src=\"{{imageurl}}{{recipe.image}}\">\n                            </div>\n                            <div class=\"card-block\">\n                                <p class=\"card-title\">{{recipe.title}}</p>\n                                <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                                <p class=\"card-text align-middle\"><b> {{recipe.readyInMinutes}} min </b></p>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 696:
/***/ function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"background-color: #fff; padding: 2%;\">\n    <div *ngIf=\"url\">\n        <div class=\"fb-comments\" [attr.data-href]=\"url\" data-width=\"100%\" data-numposts=\"5\"></div>\n    </div>\n</div>"

/***/ },

/***/ 697:
/***/ function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"ownRecipes\">\n\n    <h4>{{title}}</h4>\n\n    <app-cards-container (update)=\"saveUpdate($event)\" [recipes]=\"ownRecipes\" [imageurl]=\"imageurl\" *ngIf=\"ownRecipes\"></app-cards-container>\n\n    <button class=\"btn btn-warning\" (click)=\"emptyFavourites()\" *ngIf=\"showButton\">Clear favourites</button>\n\n</div>\n\n<div *ngIf=\"!ownRecipes\">\n    <div class=\"container norecipes\">\n        <h3>Nothing found.</h3><br>\n        <h4> Favourite a recipe by clicking the heart icon or text \"add to favourites\".</h4>\n    </div>\n</div>"

/***/ },

/***/ 698:
/***/ function(module, exports) {

module.exports = "<app-image-carousel></app-image-carousel>\r\n\r\n<br>\r\n\r\n<app-cards-container (update)=\"saveUpdate($event)\" [imageurl]=\"imageurl\" [recipes]=\"recommendRecipes\" [title]=\"recTitle\" *ngIf=\"recommendRecipes\"></app-cards-container>\r\n\r\n<div class=\"container container-fact\">\r\n    <h4><b>Did you know?</b></h4>\r\n    <p> {{foodFact}} </p>\r\n</div>\r\n\r\n<app-cards-container (update)=\"saveFavourites($event)\" [recipes]=\"ownRecipes\" [title]=\"ownTitle\" *ngIf=\"ownRecipes\"></app-cards-container>"

/***/ },

/***/ 699:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n        <div id=\"kuvakaruselli\" class=\"carousel slide\" data-ride=\"carousel\" style=\"align-content: center;\">\r\n            <div class=\"carousel-inner\" role=\"listbox\">\r\n                <div class=\"searchbox\">\r\n                <app-simple-search></app-simple-search>\r\n                </div>\r\n                <div class=\"carousel-item active\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/9umx9az.jpg\" alt=\"First slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/v3Oeehk.jpg\" alt=\"Second slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/Cz6B8xf.jpg\" alt=\"Third slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/T3tM5rp.jpg\" alt=\"Fourth slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/bwFrm6t.jpg\" alt=\"Fifth slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/Gj4Ey6O.jpg\" alt=\"Sixth slide\">\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 700:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <nav class=\"navbar navbar-toggleable-sm navbar-light\">\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n\r\n            <ul class=\"navbar-nav mr-auto nav\">\r\n                <li class=\"nav-item navitem\">\r\n                    <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n                        <img src=\"https://trello-attachments.s3.amazonaws.com/588727fd73d9c03b796b7e16/306x282/1c03784ed78a3c26c554d8d85430b643/logo.png\" class=\"d-inline-block align-top\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item navitem myhome\">\r\n                    <a [routerLink]=\"['/']\" class=\"nav-link\"><i class=\"fa fa-home nav-icon showhome\" aria-hidden=\"true\"></i><span class=\"nav-hide\"><b>Home</b></span></a>\r\n                </li>\r\n\r\n                <li class=\"nav-item navitem mysearch\">\r\n                    <a [routerLink]=\"['/search']\" class=\"nav-link\"><i class=\"fa fa-search nav-icon showsearch\" aria-hidden=\"true\"></i><span class=\"nav-hide\">Recipe search</span></a>\r\n                </li>\r\n\r\n                <li class=\"nav-item navitem myrecipes\">\r\n                    <a [routerLink]=\"['/favourites']\" class=\"nav-link\"><i class=\"fa fa-heart nav-icon showheart\" aria-hidden=\"true\"></i><span class=\"nav-hide\">My recipes</span></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</div>"

/***/ },

/***/ 701:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"recipeInfo\" class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-12\">\r\n            <img class=\"img-fluid\" src=\"{{recipeInfo.image}}\">\r\n            <br>\r\n            <div class=\"recipeIngredients\">\r\n                <ul *ngIf=\"ingredients\">\r\n                    <h5>Ingredients:</h5>\r\n                    <li *ngFor=\"let foodthing of ingredients\" class=\"ingrd\">\r\n                        <b>{{foodthing.amount | rounding}} {{foodthing.unit}}</b> {{foodthing.name}}\r\n                    </li>\r\n                </ul>\r\n\r\n                <button class=\"btn btn-primary btn-convert\" (click)=\"convert()\">Convert to grams and litres</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"recipetitle\">\r\n                <h2>{{recipeInfo.title}}</h2>\r\n                <hr>\r\n                <div class=\"recipedesc\">\r\n                    <b>Preparing time:</b> {{recipeInfo.readyInMinutes}} minutes</div>\r\n            </div>\r\n            <br>\r\n\r\n            <ol *ngIf=\"instructions\">\r\n                <h5>Instructions:</h5>\r\n                <li *ngFor=\"let phase of instructions\">{{phase.step}}</li>\r\n                <br>\r\n\r\n                <p><a class=\"cursive-link\" href=\"{{recipeInfo.sourceUrl}}\">Original recipe: {{recipeInfo.sourceName}}</a></p>\r\n            </ol>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row justify-content-center align-items-center like-container\">\r\n        <div class=\"col-md-4 col-sm-12 like-button\">\r\n            <button class=\"btn btn-primary btn-likes\" (click)=\"saveToFavourites()\">Add to favourites <i class=\"fa fa-heart\" aria-hidden=\"true\"></i></button>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-12 like-button\">\r\n            <div class=\"fb-like\" [attr.data-href]=\"url\" data-layout=\"button_count\" data-action=\"like\" data-size=\"large\" data-show-faces=\"true\" data-share=\"true\"></div>\r\n            <div class=\"fb-save\" [attr.data-uri]=\"url\" data-size=\"large\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <app-cards-container (navigateTo)=\"navigate($event)\" (update)=\"saveUpdate($event)\" [recipes]=\"similarRecipes\" [imageurl]=\"imageurl\" [title]=\"recipesTitle\"></app-cards-container>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <app-commentbox [recipeURL]=\"activeId\"></app-commentbox>\r\n</div>"

/***/ },

/***/ 702:
/***/ function(module, exports) {

module.exports = "<app-advanced-search (searchAdvanced)=\"searchNew($event)\"></app-advanced-search>\r\n\r\n<app-cards-container (update)=\"saveUpdate($event)\" [imageurl]=\"imageurl\" [recipes]=\"recipes\" [title]=\"recTitle\" *ngIf=\"recipes.length\"></app-cards-container>\r\n\r\n<!-- if ten results are returned from search, give option to search for more. \r\nAPI doesn't give info about total result amount so we can only guess that if maximum amount, ten, were returned, then there might be more -->\r\n<div class=\"show-more\" *ngIf=\"recipes.length>=10\" (click)=\"nextPrevious(10)\">\r\n    <button class=\"btn-warning\">Show more...  <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i></button>\r\n</div>\r\n\r\n<div *ngIf=\"!recipes.length\">\r\n    <div class=\"container\">\r\n        <h4>No recipes found. Try something else!</h4>\r\n    </div>\r\n</div>"

/***/ },

/***/ 703:
/***/ function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n\r\n  <h4><b>Search for a recipe:</b></h4>\r\n\r\n  <form class=\"search\" [formGroup]=\"searchForm\" (ngSubmit)=\"search($event)\">\r\n  <input size=\"30\" height=\"100\" class=\"isearch\" formControlName=\"query\" minlength=\"3\" placeholder=\"i.e. chicken, bacon...\" required>\r\n  <button type=\"submit\" class=\"btn btn-warning\">Submit</button>\r\n  </form>\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LikesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LikesService = (function () {
    function LikesService() {
    }
    LikesService.prototype.saveToFavourites = function (recipe) {
        // save given recipe to favourites, construct new array if no previous favs have been set.
        // The recipe object has been constructed in parent component and only displays
        // info we want, which is same than what a common recipe search query would give.
        var likes;
        if (localStorage.getItem('likes') === null) {
            likes = [];
        }
        else {
            likes = JSON.parse(localStorage.getItem('likes'));
        }
        // check if recipe already is saved
        if (!this.recipeExists(recipe, likes)) {
            likes.push(recipe);
            localStorage.setItem('likes', JSON.stringify(likes));
        }
    };
    LikesService.prototype.getFavourites = function () {
        var likes;
        likes = JSON.parse(localStorage.getItem('likes'));
        return likes;
    };
    LikesService.prototype.isFavourite = function (recipes) {
        if (!recipes.length) {
        }
        else {
            // check if a recipe already exists in localStorage, using recipeExists() function
            var favs = JSON.parse(localStorage.getItem('likes'));
            if (favs) {
                for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                    var recipe = recipes_1[_i];
                    if (this.recipeExists(recipe, favs)) {
                        recipe['isliked'] = true;
                    }
                    else {
                        recipe['isliked'] = false;
                    }
                }
            }
        }
        return recipes;
    };
    LikesService.prototype.recipeExists = function (obj, list) {
        // go through given list/array and check if given object's(obj) id matches any existing array object
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                return true;
            }
        }
        return false;
    };
    LikesService.prototype.removeFavourite = function (recipe) {
        // remove favourite from localStorage list
        var favs = JSON.parse(localStorage.getItem('likes'));
        favs = this.removeByAttr(favs, 'id', recipe['id']);
        console.log(favs);
        localStorage.setItem('likes', JSON.stringify(favs));
    };
    LikesService.prototype.removeByAttr = function (arr, attr, value) {
        // this has been copied straight from stackoverflow
        // go through given array, check if array item has given property
        // check if the property matches what was given as 'value'
        // if yes, splice the array on corresponsing index ,removing the array item
        var i = arr.length;
        while (i--) {
            if (arr[i]
                && arr[i].hasOwnProperty(attr)
                && (arguments.length > 2 && arr[i][attr] === value)) {
                arr.splice(i, 1);
            }
        }
        return arr;
    };
    LikesService.prototype.emptyFavourites = function () {
        // wipe them all!
        localStorage.removeItem('likes');
    };
    LikesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LikesService);
    return LikesService;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/likes.service.js.map

/***/ }

},[724]);
//# sourceMappingURL=main.bundle.map