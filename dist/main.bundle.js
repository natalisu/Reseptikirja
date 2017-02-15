webpackJsonp([0,4],{

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(239);
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
        this.foodUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random';
        this.getFoodFact = function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
            return _this.http.get(_this.foodUrl, options).map(function (resp) { return resp.json(); });
        };
        this.getRecipeById = function (id) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
            var recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information';
            return _this.http.get(recipeUrl, options).map(function (resp) { return resp.json(); });
        };
        this.getSearchResults = function (params) {
            var parameters = '?instructionsRequired=true&';
            for (var key in params) {
                parameters = parameters + key.toString() + "=" + params[key] + "&";
            }
            ;
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
            console.log(parameters);
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
    RecipequeryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], RecipequeryService);
    return RecipequeryService;
    var _a;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/recipequery.service.js.map

/***/ },

/***/ 336:
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
        var likes;
        if (localStorage.getItem('likes') === null) {
            likes = [];
        }
        else {
            likes = JSON.parse(localStorage.getItem('likes'));
        }
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
    LikesService.prototype.recipeExists = function (obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                return true;
            }
        }
        return false;
    };
    LikesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LikesService);
    return LikesService;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/likes.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(522);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(198);
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
        this.chosenType = '';
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
    AdvancedSearchComponent.prototype.search = function () {
        console.log();
        var iArray = [];
        this.intolerancesArray
            .filter(function (opt) { return opt.checked; })
            .map(function (opt) { return opt.value; })
            .map(function (opt) {
            iArray.push(opt);
        });
        this.searchQuery['intolerances'] = iArray;
        if (this.searchQuery['type']) {
            this.searchQuery['type'] = this.searchQuery['type'].replace(/ /, "+");
        }
        // console.log(query);
        event.preventDefault();
        this.router.navigate(['search', this.searchQuery]);
    };
    AdvancedSearchComponent.prototype.ngOnInit = function () {
    };
    AdvancedSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
            selector: 'app-advanced-search',
            template: __webpack_require__(692),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AdvancedSearchComponent);
    return AdvancedSearchComponent;
    var _a, _b;
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
            template: __webpack_require__(693),
            styles: [__webpack_require__(679)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_likes_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recipe_card_detailed_recipe_card_detailed_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navigation_bar_navigation_bar_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__image_carousel_image_carousel_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__simple_search_simple_search_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_results_search_results_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__front_page_front_page_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__advanced_search_advanced_search_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__search_search_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__front_page_rec_front_page_rec_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__commentbox_commentbox_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_recipes_my_recipes_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__cards_container_cards_container_component__ = __webpack_require__(511);
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
        component: __WEBPACK_IMPORTED_MODULE_14__front_page_front_page_component__["a" /* FrontPageComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_14__front_page_front_page_component__["a" /* FrontPageComponent */]
    },
    {
        path: 'search/:query',
        component: __WEBPACK_IMPORTED_MODULE_16__search_search_component__["a" /* SearchComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_16__search_search_component__["a" /* SearchComponent */]
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
                __WEBPACK_IMPORTED_MODULE_13__search_results_search_results_component__["a" /* SearchResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__front_page_front_page_component__["a" /* FrontPageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__advanced_search_advanced_search_component__["a" /* AdvancedSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_16__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_17__front_page_rec_front_page_rec_component__["a" /* FrontPageRecComponent */],
                __WEBPACK_IMPORTED_MODULE_18__commentbox_commentbox_component__["a" /* CommentboxComponent */],
                __WEBPACK_IMPORTED_MODULE_19__my_recipes_my_recipes_component__["a" /* MyRecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__cards_container_cards_container_component__["a" /* CardsContainerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routeConfig)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_likes_service__ = __webpack_require__(336);
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
        this.recipes = [];
        this.horizontal = true;
        this.title = '';
    }
    CardsContainerComponent.prototype.ngOnInit = function () {
    };
    CardsContainerComponent.prototype.saveToFavourites = function (event) {
        var recipe;
        recipe['id'] = event.id;
        recipe['title'] = event.title;
        recipe['readyInMinutes'] = event.readyInMinutes;
        this.likes.saveToFavourites(recipe);
        console.log(localStorage.getItem('likes'));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], CardsContainerComponent.prototype, "recipes", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], CardsContainerComponent.prototype, "horizontal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], CardsContainerComponent.prototype, "title", void 0);
    CardsContainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
            selector: 'app-cards-container',
            template: __webpack_require__(694),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_likes_service__["a" /* LikesService */]) === 'function' && _a) || Object])
    ], CardsContainerComponent);
    return CardsContainerComponent;
    var _a;
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
    }
    CommentboxComponent.prototype.ngOnInit = function () {
    };
    CommentboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-commentbox',
            template: __webpack_require__(695),
            styles: [__webpack_require__(681)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FrontPageRecComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrontPageRecComponent = (function () {
    function FrontPageRecComponent() {
    }
    FrontPageRecComponent.prototype.ngOnInit = function () {
    };
    FrontPageRecComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-front-page-rec',
            template: __webpack_require__(696),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], FrontPageRecComponent);
    return FrontPageRecComponent;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/front-page-rec.component.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_recipequery_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
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
    function FrontPageComponent(router, recipeservice) {
        this.router = router;
        this.recipeservice = recipeservice;
        this.recParams = { 'cuisine': 'nordic' };
        this.recommendRecipes = [];
        this.recTitle = "Recommended recipes";
        this.horizontal = true;
    }
    FrontPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeservice.getSearchResults(this.recParams)
            .subscribe(function (res) {
            _this.recommendRecipes = res.results.slice(0, 4);
            console.log(res);
        });
    };
    FrontPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_4" /* Component */])({
            selector: 'app-front-page',
            template: __webpack_require__(697),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_recipequery_service__["a" /* RecipequeryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_recipequery_service__["a" /* RecipequeryService */]) === 'function' && _b) || Object])
    ], FrontPageComponent);
    return FrontPageComponent;
    var _a, _b;
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
            template: __webpack_require__(698),
            styles: [__webpack_require__(684)]
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
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MyRecipesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyRecipesComponent = (function () {
    function MyRecipesComponent() {
    }
    MyRecipesComponent.prototype.ngOnInit = function () {
    };
    MyRecipesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-my-recipes',
            template: __webpack_require__(699),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], MyRecipesComponent);
    return MyRecipesComponent;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/my-recipes.component.js.map

/***/ },

/***/ 517:
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
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/navigation-bar.component.js.map

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
    function RecipeCardDetailedComponent(recipequery, router, route) {
        this.recipequery = recipequery;
        this.router = router;
        this.route = route;
        this.similarRecipes = [];
        this.recipesTitle = "Similar recipes";
    }
    RecipeCardDetailedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.activeId = params['id'];
            console.log(_this.activeId);
        });
        if (this.activeId) {
            this.recipequery.getRecipeById(this.activeId)
                .subscribe(function (res) {
                _this.recipeInfo = res;
                _this.instructions = res.analyzedInstructions[0].steps;
                _this.ingredients = res.extendedIngredients;
                console.log(res);
                console.log(_this.activeId);
                _this.recipequery.getSimilarRecipe(_this.activeId)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.similarRecipes = res.slice(0, 3);
                });
            });
        }
    };
    RecipeCardDetailedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_4" /* Component */])({
            selector: 'app-recipe-card-detailed',
            template: __webpack_require__(701),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__["a" /* RecipequeryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_recipequery_service__["a" /* RecipequeryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], RecipeCardDetailedComponent);
    return RecipeCardDetailedComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/recipe-card-detailed.component.js.map

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_recipequery_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultsComponent = (function () {
    function SearchResultsComponent(recipeservice, router, route) {
        this.recipeservice = recipeservice;
        this.router = router;
        this.route = route;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.recipeservice.getSearchResults(params);
        })
            .subscribe(function (res) {
            _this.imageurl = res.baseUri;
            _this.recipes = res.results;
            console.log(res);
        });
    };
    SearchResultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
            selector: 'app-search-results',
            template: __webpack_require__(702),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_recipequery_service__["a" /* RecipequeryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_recipequery_service__["a" /* RecipequeryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], SearchResultsComponent);
    return SearchResultsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/search-results.component.js.map

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    function SearchComponent(route) {
        this.route = route;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(703),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/search.component.js.map

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
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
        var query = this.searchForm.value.query;
        event.preventDefault();
        this.router.navigate(['search', query]);
    };
    SimpleSearchComponent.prototype.ngOnInit = function () {
    };
    SimpleSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-simple-search',
            template: __webpack_require__(704),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], SimpleSearchComponent);
    return SimpleSearchComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/User/reseptikirja/src/simple-search.component.js.map

/***/ },

/***/ 522:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/User/reseptikirja/src/polyfills.js.map

/***/ },

/***/ 678:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\n.container {\n  padding: 2%; }\n\n.search {\n  display: block;\n  margin: auto;\n  width: 95%; }\n\n.advancedOptions {\n  display: block;\n  padding-left: 7%; }\n\n.btn-options {\n  margin: auto; }\n"

/***/ },

/***/ 679:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 680:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\n.container {\n  padding: 2%; }\n\n.card {\n  margin: 3%;\n  display: inline-block;\n  min-width: 200px; }\n  .card .row {\n    padding: 0%; }\n    .card .row .col {\n      padding: 1%; }\n\nh4, p.card-text {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\np.card-text {\n  font-size: 12px; }\n\np.card-desc {\n  font-size: 14px;\n  font-family: \"PT Serif\", serif; }\n\np.card-title {\n  font-size: 18px;\n  font-family: \"Lora\", serif; }\n\n.card-img-top {\n  width: 100%;\n  height: auto; }\n"

/***/ },

/***/ 681:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\nh4 {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\n.comment {\n  border: thin solid #84A16E;\n  padding: 2%;\n  margin-bottom: 2%;\n  font-family: \"Karla\", sans-serif; }\n\n.date {\n  font-family: \"Karla\", sans-serif;\n  font-size: 12px;\n  color: grey;\n  padding-top: 2%;\n  float: right; }\n\n.card {\n  margin: 3%;\n  display: inline-block; }\n\nh4, p.card-text {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\np.card-text {\n  font-size: 12px; }\n\np.card-desc {\n  font-size: 14px;\n  font-family: \"PT Serif\", serif; }\n\np.card-title {\n  font-size: 18px;\n  font-family: \"Lora\", serif; }\n\n.card-img-top {\n  width: 100%;\n  height: auto; }\n\n.btn-warning {\n  letter-spacing: 1px;\n  font-family: \"Karla\", sans-serif;\n  background-color: #84A16E;\n  border: none; }\n\n.btn-warning:hover {\n  background-color: #65874B; }\n\ntextarea:focus, input:focus {\n  outline: none !important;\n  border: thin solid #84A16E;\n  box-shadow: 0 0 10px #65874B; }\n"

/***/ },

/***/ 682:
/***/ function(module, exports) {

module.exports = ".container {\n  padding: 2%; }\n\n.card {\n  margin: 3%;\n  display: inline-block; }\n\nh4, p.card-text {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\np.card-text {\n  font-size: 12px; }\n\np.card-desc {\n  font-size: 14px;\n  font-family: \"PT Serif\", serif; }\n\np.card-title {\n  font-size: 18px;\n  font-family: \"Lora\", serif; }\n\n.card-img-top {\n  width: 100%;\n  height: auto; }\n"

/***/ },

/***/ 683:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 684:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\n.carousel-inner > .carousel-item > img,\n.carousel-inner > .item > a > img {\n  margin: auto;\n  height: 100%;\n  width: 100%; }\n\n#kuvakaruselli {\n  position: relative; }\n\n.col {\n  margin: 0;\n  padding-right: 0px;\n  padding-left: 0px; }\n\n.searchbox {\n  position: absolute;\n  z-index: 9999999;\n  top: 45%;\n  width: 33em;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 4%;\n  letter-spacing: 1px;\n  box-shadow: 0 0 20px #fff; }\n  .searchbox .container {\n    background-color: rgba(255, 255, 255, 0); }\n"

/***/ },

/***/ 685:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\n"

/***/ },

/***/ 686:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\nnav {\n  background-color: #fff; }\n\n.navbar-brand img {\n  width: 60px;\n  height: 60px;\n  margin-left: -0.8em; }\n\n.nav-item {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase;\n  padding-bottom: 1%;\n  font-size: 1.4em; }\n\n.nav-item:hover {\n  background-color: rgba(168, 192, 149, 0.6); }\n"

/***/ },

/***/ 687:
/***/ function(module, exports) {

module.exports = "h2 {\n  font-family: \"Lora\", serif;\n  line-height: 1.2em; }\n\nh6, a {\n  font-family: \"PT Serif\", serif; }\n\n.container {\n  padding: 2%; }\n\nimg {\n  margin-bottom: 8%; }\n\nli, h5 {\n  font-family: \"Karla\", sans-serif; }\n\n.recipetitle {\n  background: rgba(168, 192, 149, 0.6);\n  padding: 5%;\n  box-shadow: 0 0 20px #A8C095; }\n\n.recipedesc {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\n.recipeIngredients {\n  border-left: thin solid #000;\n  border-right: thin solid #000;\n  padding-left: 12%;\n  margin-right: 5%;\n  padding-bottom: 1%; }\n\n.verticalLine {\n  border-left: thin solid #000;\n  border-right: thin solid #000;\n  padding-left: 12%;\n  font-family: \"PT Serif\", serif; }\n"

/***/ },

/***/ 688:
/***/ function(module, exports) {

module.exports = "/* COLOURS */\n/* FONTS */\n.container {\n  padding: 2%; }\n\n.card {\n  margin: 3%;\n  display: inline-block; }\n  .card .row {\n    padding: 0%; }\n    .card .row .col {\n      padding: 1%; }\n\nh4, p.card-text {\n  font-family: \"Karla\", sans-serif;\n  text-transform: uppercase; }\n\np.card-text {\n  font-size: 12px; }\n\np.card-desc {\n  font-size: 14px;\n  font-family: \"PT Serif\", serif; }\n\np.card-title {\n  font-size: 18px;\n  font-family: \"Lora\", serif; }\n\n.card-img-top {\n  width: 100%;\n  height: auto; }\n"

/***/ },

/***/ 689:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 690:
/***/ function(module, exports) {

module.exports = ".isearch {\n  margin-right: 5%;\n  padding: 2%;\n  margin-top: 2%;\n  font-family: 'Karla', sans-serif; }\n\ntextarea:focus, input:focus {\n  outline: none !important;\n  box-shadow: 0 0 20px #65874B; }\n\n.btn-warning {\n  letter-spacing: 1px;\n  font-family: 'Karla', sans-serif;\n  background-color: #84A16E;\n  border: none; }\n\n.btn-warning:hover {\n  background-color: #65874B; }\n\n.searchbox {\n  font-family: 'PT Serif', serif; }\n\ntextarea:focus, input:focus {\n  border: 2px solid #A8C095; }\n\nh4 {\n  font-family: 'Lora', serif; }\n"

/***/ },

/***/ 692:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n\r\n  <h4><i class=\"fa fa-search\" aria-hidden=\"true\"></i> <b>Advanced search:</b></h4>\r\n\r\n\r\n  <form class=\"search\" #f=\"ngForm\" (ngSubmit)=\"search()\">\r\n\r\n<div class=\"form-group row justify-content-center\">\r\n  <label class=\"col-sm-4 col-form-label\">Recipe name or ingredient(s)</label>\r\n   <div class=\"col-sm-8\">\r\n  <input size=\"30\" height=\"100\" class=\"isearch\" name=\"searchQuery.query\" [(ngModel)]=\"searchQuery.query\" minlength=\"3\" placeholder=\"i.e. chicken, bacon...\">\r\n   </div>\r\n</div>\r\n\r\n<div class=\"form-group row justify-content-center\">\r\n  <label class=\"col-sm-4 col-form-label\">Exclude ingredients</label><br>\r\n   <div class=\"col-sm-8\">\r\n    <input size=\"30\" height=\"100\" class=\"isearch\" name=\"searchQuery.excludeIngredients\" [(ngModel)]=\"searchQuery.excludeIngredients\" minlength=\"3\" placeholder=\"i.e. tomato\"><br>\r\n   </div>\r\n</div>\r\n\r\n \r\n <div class=\"form-group row justify-content-center\">\r\n      <div class=\"col-sm-3\">\r\n\r\n       Diet\r\n         <div class=\"form-check\" *ngFor=\"let diettype of dietArray\">\r\n          <label>\r\n            <input class=\"form-check-input\" type=\"radio\" \r\n            value=\"{{diettype}}\" [(ngModel)]=\"searchQuery.diet\" name=\"searchQuery.diet\">\r\n                  {{diettype}}\r\n          </label>\r\n        </div>\r\n      </div> \r\n\r\n      <div class=\"col-sm-3\">\r\n\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#allergensModal\">\r\n  Allergens\r\n</button><br>\r\n\r\n  <div *ngFor=\"let intolerance of intolerancesArray\">\r\n    <span *ngIf=\"intolerance.checked\">{{intolerance.value}} <br></span>\r\n  </div>\r\n\r\n\r\n<div class=\"modal optionsModal\" id=\"allergensModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"advancedOptions\" *ngFor=\"let option of intolerancesArray\">\r\n          <label>\r\n            <input class=\"\" type=\"checkbox\"\r\n                  name=\"option\"\r\n                   value=\"{{option.value}}\"\r\n                   [(ngModel)]=\"option.checked\"/>\r\n                  {{option.value}}\r\n          </label>\r\n        </div> \r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary btn-options\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n      <div class=\"col-sm-3\">\r\n\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#typesModal\">\r\n  Type\r\n</button><br>\r\n{{chosenType}}\r\n\r\n<div class=\"modal optionsModal\" id=\"typesModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"advancedOptions\" *ngFor=\"let foodtype of typesArray\">\r\n          <label>\r\n            <input class=\"\" type=\"radio\" \r\n            value=\"{{foodtype}}\" [(ngModel)]=\"searchQuery.type\" name=\"searchQuery.type\">\r\n                  {{foodtype}}\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary btn-options\" data-dismiss=\"modal\" (click)=\"checkTypes()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n       \r\n      </div>\r\n    </div>\r\n  \r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-3\">\r\n      <button type=\"submit\" class=\"btn btn-warning btn-primary\">Submit</button>\r\n    </div>\r\n  </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ },

/***/ 693:
/***/ function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\r\n\r\n<!-- <app-recipe-card-detailed></app-recipe-card-detailed> -->\r\n\r\n<router-outlet></router-outlet>"

/***/ },

/***/ 694:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <div *ngIf=\"recipes\">\n\n      <h4>{{title}}</h4>\n\n      <div class=\"row\" *ngIf=\"horizontal\">\n      <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12 recipecard\" *ngFor=\"let recipe of recipes\">\n          <div class=\"card\">\n            <a [routerLink]=\"['/recipe', recipe.id]\"><img class=\"card-img-top img-fluid\" src=\"http://i.imgur.com/uG0XRBH.jpg\" alt=\"Card image cap\">\n            <div class=\"card-block\">\n                      <!-- <img src=\"{{imageurl}}{{recipe.image}}\"><br> -->\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <p class=\"card-title\">{{recipe.title}} <i class=\"fa fa-heart\" aria-hidden=\"true\" (click)=\"saveToFavourites(recipe)\"></i></p>\n                            </div>\n                        </div>\n                        <div class=\"row\">                            \n                            <div class=\"col text-right\">\n                                <p class=\"card-text\">{{recipe.readyInMinutes}} min</p>\n                            </div>\n                        </div>  \n             </div>\n            </a>\n          </div>\n      </div>\n      </div>\n   \n<div class=\"row\" *ngIf=\"!horizontal\">\n\n        <div class=\"col\" *ngFor=\"let recipe of recipes\">\n          <div class=\"card\">\n            <a [routerLink]=\"['/recipe', recipe.id]\"><img class=\"card-img-top img-fluid\" src=\"http://i.imgur.com/uG0XRBH.jpg\" alt=\"Card image cap\">\n            <div class=\"card-block\">\n                      <!-- <img src=\"{{imageurl}}{{recipe.image}}\"><br> -->\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <p class=\"card-title\">{{recipe.title}} <i class=\"fa fa-heart\" aria-hidden=\"true\" (click)=\"saveToFavourites(recipe)\"></i></p>\n                            </div>\n                        </div>\n                        <div class=\"row\">                            \n                            <div class=\"col text-right\">\n                                <p class=\"card-text\">{{recipe.readyInMinutes}} min</p>\n                            </div>\n                        </div>  \n             </div>\n            </a>\n          </div>\n      </div>\n  </div>\n\n\n    </div>\n\n</div>"

/***/ },

/***/ 695:
/***/ function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color: #fff; padding: 2%;\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h4>Comments</h4>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"comment\">qqqqqqq\n                            <br>Tekstiä jee\n                            <br> Lalalalalalalal\n                            <div class=\"date\">30.1.2017\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"comment\">qqqqqqq\n                            <br>Tekstiä jee\n                            <br> Lalalalalalalal\n                            <div class=\"date\">30.1.2017\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"comment\">Tosipitkä kommenttiteksti jee jee asdsdadsadsaadsads qw qwe ewq q wq ewq wqe wqe ewq ewq ewq qew eq ewq\n                            <br>Tekstiä jee\n                            <br> Lalalalalalalal\n                            <div class=\"date\">30.1.2017\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <h4>Write a comment</h4></div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <textarea class=\"form-control\" id=\"commentarea\" rows=\"5\"></textarea>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <button type=\"submit\" class=\"btn btn-warning\">Submit</button>\n                    </div>\n                </div>\n\n\n            </div>\n            </div>\n        </div>\n"

/***/ },

/***/ 696:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h4>Recommendations</h4></div>\r\n        </div>\r\n\r\n<br>\r\n\r\n        <div class=\"row\">\r\n  \r\n        \r\n\r\n             \r\n\r\n         \r\n        </div>\r\n</div>"

/***/ },

/***/ 697:
/***/ function(module, exports) {

module.exports = "<app-image-carousel></app-image-carousel>\r\n\r\n<br>\r\n\r\n<app-cards-container [recipes]=\"recommendRecipes\" [title]=\"recTitle\"></app-cards-container> \r\n\r\n<!--\r\n<br>\r\n<app-cards-container [recipes]=\"ownRecipes\" [horizontal]=\"false\" [title]=\"Similar recipes\"></app-cards-container>\r\n\r\n<br>\r\n-->"

/***/ },

/***/ 698:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n        <div id=\"kuvakaruselli\" class=\"carousel slide\" data-ride=\"carousel\" style=\"align-content: center;\">\r\n            <div class=\"carousel-inner\" role=\"listbox\">\r\n                <div class=\"searchbox\">\r\n                <app-simple-search></app-simple-search>\r\n                </div>\r\n                <div class=\"carousel-item active\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/9umx9az.jpg\" alt=\"First slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/v3Oeehk.jpg\" alt=\"Second slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/Cz6B8xf.jpg\" alt=\"Third slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/T3tM5rp.jpg\" alt=\"Fourth slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/bwFrm6t.jpg\" alt=\"Fifth slide\">\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img class=\"d-block img-fluid\" src=\"http://i.imgur.com/Gj4Ey6O.jpg\" alt=\"Sixth slide\">\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 699:
/***/ function(module, exports) {

module.exports = "<p>\n  my-recipes works!\n</p>\n"

/***/ },

/***/ 700:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n        <nav class=\"navbar navbar-toggleable-md navbar-light\">\r\n            <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\r\n                <img src=\"https://trello-attachments.s3.amazonaws.com/588727fd73d9c03b796b7e16/306x282/1c03784ed78a3c26c554d8d85430b643/logo.png\" class=\"d-inline-block align-top\" alt=\"\">\r\n            </a>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item\">\r\n                        <a [routerLink]=\"['/home']\" class=\"nav-link\"><b> Home</b></a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a [routerLink]=\"['/search']\" class=\"nav-link\">Recipe search</a>\r\n                    </li>\r\n                    <li class=\"nav-item text-right\">\r\n                        <a [routerLink]=\"['/myrecipes']\" class=\"nav-link\">My recipes</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </nav>\r\n    </div>"

/***/ },

/***/ 701:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"recipeInfo\" class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <img src=\"http://i.imgur.com/uG0XRBH.jpg\">\r\n      <br>\r\n      <div class=\"recipeIngredients\">\r\n      <ul *ngIf=\"ingredients\">\r\n      <h5>Ingredients:</h5>\r\n          <li *ngFor=\"let foodthing of ingredients\">\r\n           <!-- {{foodthing.originalString}} -->\r\n            <b>{{foodthing.amount}} {{foodthing.unit}}</b> {{foodthing.name}}\r\n            </li>\r\n        </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <div class=\"recipetitle\">\r\n      <h2>{{recipeInfo.title}}</h2>\r\n      <hr>\r\n      <div class=\"recipedesc\">\r\n      <b>Preparing time:</b> {{recipeInfo.readyInMinutes}} minutes</div>\r\n      </div>\r\n      <br>\r\n\r\n    <ol *ngIf=\"instructions\">\r\n       <h5>Instructions:</h5>\r\n      <li *ngFor=\"let phase of instructions\">{{phase.step}}</li>\r\n      <br>\r\n\r\n    <p><a href=\"{{recipeInfo.sourceUrl}}\">Original recipe: {{recipeInfo.sourceName}}</a></p>\r\n    </ol>\r\n\r\n    </div>\r\n  </div>\r\n </div>\r\n\r\n<br>\r\n\r\n<div class=\"container\">\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-9\">\r\n    <app-commentbox></app-commentbox>\r\n  </div>\r\n  <div class=\"col-3\">\r\n    <app-cards-container [recipes]=\"similarRecipes\" [horizontal]=\"false\" [title]=\"recipesTitle\"></app-cards-container>\r\n  </div>\r\n</div>\r\n\r\n</div>"

/***/ },

/***/ 702:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n\r\n  <div class=\"row\" *ngIf=\"recipes\">\r\n      <div class=\"col-lg-3 col-md-4 col-sm-6 recipecard\" *ngFor=\"let recipe of recipes\">\r\n          <div class=\"card\">\r\n            <a [routerLink]=\"['/recipe', recipe.id]\"><img class=\"card-img-top img-fluid\" src=\"http://i.imgur.com/uG0XRBH.jpg\" alt=\"Card image cap\">\r\n            <div class=\"card-block\">\r\n    \r\n\r\n                  <!-- <img src=\"{{imageurl}}{{recipe.image}}\"><br> -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <p class=\"card-title\">{{recipe.title}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">                            \r\n                            <div class=\"col text-right\">\r\n                                <p class=\"card-text\">{{recipe.readyInMinutes}} min</p>\r\n                            </div>\r\n                        </div>\r\n                \r\n                \r\n              \r\n            </div>\r\n          </a>\r\n          </div>\r\n  </div>\r\n\r\n<div *ngIf=\"!recipes.length\">\r\n\r\n  <p>No results :(</p>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ },

/***/ 703:
/***/ function(module, exports) {

module.exports = "<app-advanced-search></app-advanced-search>\r\n\r\n<app-search-results *ngIf=\"route.params\"></app-search-results>"

/***/ },

/***/ 704:
/***/ function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n\r\n  <h4><b>Search for a recipe:</b></h4>\r\n\r\n  <form class=\"search\" [formGroup]=\"searchForm\" (ngSubmit)=\"search($event)\">\r\n  <input size=\"30\" height=\"100\" class=\"isearch\" formControlName=\"query\" minlength=\"3\" placeholder=\"i.e. chicken, bacon...\" required>\r\n  <button type=\"submit\" class=\"btn btn-warning\">Submit</button>\r\n  </form>\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ }

},[722]);
//# sourceMappingURL=main.bundle.map